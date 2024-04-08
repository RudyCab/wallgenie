import GalleryGrid from "../Components/GalleryGrid/GalleryGrid";
import React, { useEffect } from 'react';
import { MdAddPhotoAlternate } from "react-icons/md";
import './GalleryPage.css'; 


function GalleryPage() {
  useEffect(() => {
    document.body.style.backgroundColor = '#215F5F'; 
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);
  return (
    <div>
      <div className='TopHeader'>
        <div className="galleryText">
          <p>Gallery</p>
        </div>
        <div className="buttonContainer">
          <button className="button">Select</button>
            <MdAddPhotoAlternate size={40}/>
        </div>
      </div>
      <GalleryGrid></GalleryGrid>
    </div>


  );
}
document.body.style.backgroundColor = '#f0f0f0';
export default GalleryPage;
