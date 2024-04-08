import React from 'react';
import './GalleryGrid.css'; 

function GalleryGrid({ images }) {
  return (
    <div>
      <div className="grid-container">
        <ul className="grid">
          {images.map((imageUrl, index) => (
            <li key={index}>
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GalleryGrid;
