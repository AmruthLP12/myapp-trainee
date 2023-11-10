import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  // Destructuring properties from useDropzone hook
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  return (
    <div>
      {/* The dropzone area */}
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to select files</p>
      </div>

      {/* Display the uploaded files */}
      <aside style={fileListStyles}>
        <h4>Uploaded Files</h4>
        <ul>
          {acceptedFiles.map(file => (
            <li key={file.path}>
              {file.path} - {file.size} bytes
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

// Styling for the dropzone area
const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

// Styling for the uploaded files list
const fileListStyles = {
  marginTop: '20px',
};

export default FileUpload;
