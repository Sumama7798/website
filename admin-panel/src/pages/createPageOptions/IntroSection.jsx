import React, { useState } from 'react';

const IntroSection = () => {
  const [pageTitle, setPageTitle] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setPageTitle(e.target.value);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="p-6 pl-[250px] bg-gray-800 min-h-screen ">
        <div className='pl-5'>
      <h1 className="text-2xl text-emerald-400 font-bold mb-4">Create Your Page</h1>

      {/* Page Title Input */}
      <div className="mb-4">
        <label className="block text-emerald-400 font-semibold mb-2">Page Title:</label>
        <input
          type="text"
          value={pageTitle}
          onChange={handleTitleChange}
          className="w-full px-4 py-2 border text-gray-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter page title"
        />
      </div>

      {/* File Upload */}
      <div className="mb-4">
        <label className="block text-emerald-400 font-semibold mb-2">Upload Files:</label>
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
        />
      </div>

      {/* Display Uploaded Files */}
      <div className="mb-4">
        {uploadedFiles.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Uploaded Files:</h2>
            <ul className="list-disc list-inside">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="text-gray-600">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Editable Content Area */}
      <div className="mb-4">
        <label className="block text-emerald-400 font-semibold mb-2">Page Content:</label>
        <textarea
          value={content}
          onChange={handleContentChange}
          className="w-full px-4 py-2 text-gray-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter content for the page"
          rows="6"
        />
      </div>

      {/* Page Preview */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl text-gray-950 font-bold">{pageTitle || 'Page Title'}</h2>
        <p className="mt-4 text-gray-950">{content || 'Your content will appear here...'}</p>
      </div>
        </div>
    </div>
  );
};

export default  IntroSection;