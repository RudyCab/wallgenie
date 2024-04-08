import React, { useState, useEffect } from 'react';
import { MdAddPhotoAlternate } from "react-icons/md";
import GalleryGrid from "../Components/GalleryGrid/GalleryGrid";
import './GalleryPage.css'; 
import { DecorItem } from '../Structs/DecorItem';

function GalleryPage() {
  const [importedImages, setImportedImages] = useState([
 ]);

  useEffect(() => {
    document.body.style.backgroundColor = '#215F5F'; 
    return () => {
      document.body.style.backgroundColor = ''; 
      const storedImages = JSON.parse(localStorage.getItem('decorItems')) || [];
      setImportedImages(storedImages);
    };  }, []);

    const handleImageUpload = (newImages) => {
      console.log('adding image');
      newImages.forEach((image, index) => {
        // Save the image URL to localStorage
        saveImageToLocalStorage(image);
      });
    };
  
    const saveImageToLocalStorage = (image) => {
      const existingImages = JSON.parse(localStorage.getItem('importedImages')) || [];
      localStorage.setItem('importedImages', JSON.stringify([...existingImages, image]));
      setImportedImages(prevImages => [...prevImages, image]);
    }

  return (
    <div>
      <div className='TopHeader'>
        <div className="galleryText">
          <p>Gallery</p>
        </div>
        <div className="buttonContainer">
          <button className="button">Select</button>
          <label htmlFor="file-input">
            <MdAddPhotoAlternate size={40} style={{ cursor: 'pointer' }} />
            {/* Hidden file input to trigger file selection */}
            <input id="file-input" type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={(e) => handleImageUpload(Array.from(e.target.files))} />
          </label>
        </div>
      </div>
      <GalleryGrid images={importedImages} />
    </div>
  );
}

export default GalleryPage;
