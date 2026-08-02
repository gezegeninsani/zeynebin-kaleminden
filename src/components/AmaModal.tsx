"use client";

import React, { useState } from "react";

interface AmaModalProps {
  onClose: () => void;
}

const AmaModal: React.FC<AmaModalProps> = ({ onClose }) => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app you would send this to a backend or store it.
    console.log("AMA question submitted:", question);
    setSubmitted(true);
    setQuestion("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Ask Me Anything</h2>
        {submitted ? (
          <p className="mb-4 text-green-600">Thank you! Your question has been received.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full h-24 border rounded p-2 mb-4"
              placeholder="Your question..."
              value={question}
              onChange={e => setQuestion(e.target.value)}
              required
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default AmaModal;
