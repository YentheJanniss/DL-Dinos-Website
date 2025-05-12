import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function Classifier() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setPrediction(null);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPrediction(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              🦖 Dinosaur Classifier
            </h1>
            <p className="text-lg text-gray-300">
              Upload an image and let AI identify the dinosaur species
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8">
            {/* Upload Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center">
                <div className="w-full max-w-lg">
                  <label
                    htmlFor="image-upload"
                    className={`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer
                  ${
                    preview
                      ? "border-green-500"
                      : "border-gray-600 hover:border-gray-500"
                  }
                  transition-colors duration-200`}
                  >
                    {preview ? (
                      <div className="relative w-full h-full">
                        <img
                          src={preview}
                          alt="Preview"
                          className="w-full h-full object-contain rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                          <p className="text-white text-sm">
                            Click to change image
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-12 h-12 text-gray-400 mb-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="text-sm text-gray-400">
                          Drop your image here or click to upload
                        </p>
                      </div>
                    )}
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={!selectedImage || loading}
                  className={`px-6 py-3 rounded-lg font-semibold text-white
                ${
                  !selectedImage || loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                }
                transition-all duration-200 transform hover:scale-105`}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    "Identify Dinosaur"
                  )}
                </button>
              </div>
            </form>

            {/* Results Section */}
            {prediction && (
              <div className="mt-8 p-6 bg-gray-700 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Prediction Results
                </h2>
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-xl font-semibold text-green-400">
                    {prediction.class}
                  </div>
                  <div className="w-full max-w-xs bg-gray-600 rounded-full h-4">
                    <div
                      className="bg-green-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${prediction.confidence * 100}%` }}
                    />
                  </div>
                  <div className="text-gray-300">
                    Confidence: {(prediction.confidence * 100).toFixed(2)}%
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-900/50 border border-red-500 rounded-lg">
                <p className="text-red-400 text-center">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
