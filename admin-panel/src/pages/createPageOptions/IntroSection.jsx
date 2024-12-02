import React, { useState } from 'react';
import './IntroSection.css';

const IntroSection = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [heading, setHeading] = useState('');
  const [previewHeading, setPreviewHeading] = useState('');
  const [previewVideo, setPreviewVideo] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const video = URL.createObjectURL(file);
      setPreviewVideo(video);
      setVideoUrl(file);
    }
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handlePreview = () => {
    setPreviewHeading(heading);
  };

  return (
    <div className="intro-section">
      <h1 className="text-center text-2xl font-bold mb-6">Admin Background Settings</h1>
      <div className="form-container flex flex-col items-center gap-4">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="file-input"
        />
        <input
          type="text"
          placeholder="Enter heading text"
          value={heading}
          onChange={handleHeadingChange}
          className="heading-input border text-gray-900 rounded px-3 py-2"
        />
        <button
          onClick={handlePreview}
          className="preview-btn bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
        >
          Preview
        </button>
      </div>

      {/* Preview Section */}
      {previewVideo && (
        <div className="preview-container relative h-screen mt-6">
          <video
            src={previewVideo}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <h1 className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
            {previewHeading}
          </h1>
        </div>
      )}
    </div>
  );
};

export default IntroSection;