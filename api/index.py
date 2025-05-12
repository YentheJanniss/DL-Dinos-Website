from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.efficientnet import preprocess_input
from tensorflow.keras import layers
import numpy as np
from PIL import Image
import io
from mangum import Mangum
import logging
import os

# Logging setup
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

tf.keras.config.enable_unsafe_deserialization()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CLASS_LABELS = [
    'Ankylosaurus', 'Diplodocus', 'Parasaurolophus',
    'Stegosaurus', 'Trex', 'Triceratops', 'Velociraptor'
]

IMG_SIZE = 456

data_augmentation = tf.keras.Sequential([
    layers.RandomFlip("horizontal"),
    layers.RandomRotation(0.1),
    layers.RandomZoom(0.1),
    layers.RandomTranslation(0.1, 0.1),
    layers.RandomContrast(0.2),
    layers.RandomBrightness(0.1),
])

model = None
try:
    model_path = 'dino_model.keras'
    if not os.path.exists(model_path):
        logger.warning(f"Model file {model_path} not found!")
    else:
        model = load_model(model_path, compile=False)
        logger.info("Model loaded successfully")
except Exception as e:
    logger.error(f"Failed to load model: {str(e)}")
    logger.exception("Full exception details:")

def preprocess_image(image: Image.Image) -> np.ndarray:
    if image.mode != 'RGB':
        image = image.convert('RGB')

    width, height = image.size
    size = min(width, height)
    image = image.crop((
        (width - size) // 2,
        (height - size) // 2,
        (width + size) // 2,
        (height + size) // 2
    ))
    image = image.resize((IMG_SIZE, IMG_SIZE), Image.Resampling.LANCZOS)
    img_array = np.array(image).astype(np.float32)
    return img_array

def predict_with_tta_single_image(image_array, model, tta_steps=10):
    preds = []
    for _ in range(tta_steps):
        augmented = data_augmentation(tf.constant(image_array), training=True)
        processed = preprocess_input(augmented)
        prediction = model(processed, training=False).numpy()
        preds.append(prediction)
    return np.mean(preds, axis=0)

@app.post("/api/predict")
async def predict(file: UploadFile = File(...)):
    if model is None:
        raise HTTPException(status_code=500, detail="Model not loaded. Check server logs.")

    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents))
        image_array = preprocess_image(image)
        image_array = np.expand_dims(image_array, axis=0)

        prediction = predict_with_tta_single_image(image_array, model, tta_steps=10)

        prediction = np.ravel(prediction)  # Ensure it's 1D array

        if np.any(np.isnan(prediction)) or np.any(np.isinf(prediction)):
            raise ValueError("Model produced invalid predictions")

    

        predicted_index = int(np.argmax(prediction))
        predicted_label = CLASS_LABELS[predicted_index]
        confidence = float(prediction[predicted_index])

        return {
            "class": predicted_label,
            "confidence": confidence,
            
            "all_predictions": {
                CLASS_LABELS[i]: float(pred) for i, pred in enumerate(prediction)
            }
        }

    except Exception as e:
        logger.error(f"Prediction error: {str(e)}")
        logger.exception("Full exception details:")
        raise HTTPException(status_code=500, detail=str(e))

handler = Mangum(app)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
