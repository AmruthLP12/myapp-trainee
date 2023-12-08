import React, { useState, useRef } from "react";

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [hoveredIndexes, setHoveredIndexes] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = async (e) => {
    const fileList = e.target.files;
    await handleFiles(fileList);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    const fileList = e.dataTransfer.files;
    await handleFiles(fileList);
  };

  const handleFiles = async (fileList) => {
    const imageArray = [];

    for (let i = 0; i < fileList.length; i++) {
      try {
        const resizedImage = await resizeImage(fileList[i]);
        const imageUrl = URL.createObjectURL(resizedImage);
        imageArray.push({ url: imageUrl, file: resizedImage });
      } catch (error) {
        console.error("Error resizing image:", error);
      }
    }

    setImages([...images, ...imageArray]);
  };

  const resizeImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 100; // Adjust the width as needed
          canvas.height = (img.height / img.width) * canvas.width;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            "image/jpeg",
            0.7
          ); // Adjust the quality as needed
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleHover = (index, isHovered) => {
    const newHoveredIndexes = [...hoveredIndexes];
    newHoveredIndexes[index] = isHovered;
    setHoveredIndexes(newHoveredIndexes);
  };

  return (
    <div>
      <h1>Image Upload and Preview</h1>

      <div
        id="drop-zone"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={handleBoxClick}
        style={{
          border: "2px dashed #aaa",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <p>Click or drag and drop images here</p>
        <input
          type="file"
          id="image-input"
          multiple
          onChange={handleImageChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
      </div>

      <div id="image-preview-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-preview-container"
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          >
            <img
              src={image.url}
              alt={`Preview ${index}`}
              className="image-preview"
            />
            <button
              onClick={() => handleRemoveImage(index)}
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "5px", // added padding to make it more clickable
                fontSize: "1.5em",
                color: "red",
                visibility: hoveredIndexes[index] ? "visible" : "hidden",
              }}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
