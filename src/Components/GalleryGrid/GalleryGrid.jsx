import React from 'react';
import './GalleryGrid.css'; 



function GalleryGrid() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR91AglyVvCKQplGdtQY6y4RTyT88kg26aAw&usqp=CAU",
    "https://brhscatseyeview.org/wp-content/uploads/2023/03/image-684x900.png",
    "https://as2.ftcdn.net/v2/jpg/01/41/44/53/1000_F_141445380_4cggvLtO3YqU3xqzT0vxXmvHSlJHARk5.jpg",
    "https://www.decorshore.com/1027-thickbox_default/multi-colored-gold-luxe-mosaic-glass-framed-wall-mirror-decorative-embossed-mosaic-rectangular-vanity-mirror.jpg",
    "https://m.media-amazon.com/images/I/81V9SES-x2L._AC_UF894,1000_QL80_.jpg",
    "https://ctl.s6img.com/society6/img/pt9EOhNryGMzrVBxYoTe4VMLWIA/w_700/posters/top/~artwork,fw_2718,fh_3618,fy_-1,iw_2718,ih_3620/s6-original-art-uploads/society6/uploads/misc/b19a79a2f3f74def986e82c9d86d6762/~~/angel-numbers-balance-posters.jpg?attempt=0",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdP1TdSxpnlCwqsarUJUKzBTv_BYoHpYfGg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMIn9RFBj0LaaDngvn_0aQoYB86Et52Ci3A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJ6AzznfH7g3gvTRFUE0aKtiuzQTMXrlYJCS_9nreRn9tlWBPPyV4AmtoJkSJ_fjeWk4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y02qsTqhqRewmscxKSA5EhSFdXEV3nf0ow&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQse1zRZVz4M3qO31_C4zz78HUSpgFj7PUFhg&usqp=CAU"
  ];

  
  
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



// image links provided and grid creation

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


// import solution with no drop zone
// export default GalleryGrid;
// import React from 'react';
// import './GalleryGrid.css'; 


// const ImageGrid = ({ images }) => {
//   return (
//     <div className="image-grid">
//       {images.map((image, index) => (
//         <div key={index} className="image-item">
//           <img src={URL.createObjectURL(image)} alt={`User Added Image ${index}`} />
//         </div>
//       ))}
//     </div>
//   );
// };

// const ImageUpload = ({ onUpload }) => {
//   const handleDrop = (e) => {
//     e.preventDefault();
//     const files = Array.from(e.dataTransfer.files);
//     onUpload(files);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <div className="drop-zone" onDrop={handleDrop} onDragOver={handleDragOver}>
//         Drop images here
//       </div>
//     </div>
//   );
// };

// const GalleryGrid = () => {
//   const [images, setImages] = React.useState([]);

//   const handleImageUpload = (uploadedImages) => {
//     setImages([...images, ...uploadedImages]);
//   };

//   return (
//     <div>
//       <ImageUpload onUpload={handleImageUpload} />
//       <ImageGrid images={images} />
//     </div>
//   );
// };

// export default GalleryGrid;


