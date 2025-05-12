# Dinosaur Image Classifier

A full-stack web application that classifies dinosaur images using a pre-trained deep learning model.

## Features

- Upload and preview images
- Real-time dinosaur classification
- Confidence score for predictions
- Modern, responsive UI
- Supports the following dinosaur classes:
  - Ankylosaurus
  - Diplodocus
  - Parasaurolophus
  - Stegosaurus
  - Trex
  - Triceratops
  - Velociraptor

## Tech Stack

- Frontend:
  - React with TypeScript
  - Vite
  - Axios for API calls
- Backend:
  - FastAPI
  - TensorFlow
  - Python Image Processing (Pillow)

## Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- `dino_model.h5` (pre-trained model file)

## Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Set up the backend:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
```

3. Set up the frontend:

```bash
cd frontend
npm install
```

## Running the Application

1. Start the backend server:

```bash
cd backend
python main.py
```

The backend will run on http://localhost:8000

2. Start the frontend development server:

```bash
cd frontend
npm run dev
```

The frontend will run on http://localhost:3000

## Usage

1. Open http://localhost:3000 in your browser
2. Click "Choose Image" to select a dinosaur image
3. Click "Predict Dinosaur" to get the classification
4. View the predicted dinosaur class and confidence score

## Model Information

The application uses a pre-trained model (`dino_model.h5`) that:

- Accepts images of size 474x474 pixels
- Normalizes pixel values (0-1)
- Outputs one of seven dinosaur classes
- Provides confidence scores for predictions

## Notes

- Ensure both frontend and backend servers are running simultaneously
- The model file `dino_model.h5` must be present in the backend directory
- CORS is enabled for localhost development
