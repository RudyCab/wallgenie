// import React, { useState } from 'react';
// import './GalleryGrid.css'; 

// const ImageGrid = ({ images }) => {
//   return (
//     <div className="image-grid">
//       {images.map((image, index) => (
//         <div key={index} className="image-item">
//           <img src={image.url} alt={image.alt} />
//         </div>
//       ))}
//     </div>
//   );
// };

// const GalleryGrid = () => {
//   const [imageUrls, setImageUrls] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddImage = () => {
//     if (inputValue.trim() !== '') {
//       setImageUrls([...imageUrls, { url: inputValue, alt: 'User Added Image' }]);
//       setInputValue('');
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button onClick={handleAddImage}>Add Image</button>
//       </div>
//       <ImageGrid images={imageUrls} />
//     </div>
//   );
// };

// export default GalleryGrid;
import React from 'react';
import './GalleryGrid.css'; 


const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={URL.createObjectURL(image)} alt={`User Added Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

const ImageUpload = ({ onUpload }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    onUpload(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="drop-zone" onDrop={handleDrop} onDragOver={handleDragOver}>
        Drop images here
      </div>
    </div>
  );
};

const GalleryGrid = () => {
  const [images, setImages] = React.useState([]);

  const handleImageUpload = (uploadedImages) => {
    setImages([...images, ...uploadedImages]);
  };

  return (
    <div>
      <ImageUpload onUpload={handleImageUpload} />
      <ImageGrid images={images} />
    </div>
  );
};

export default GalleryGrid;
