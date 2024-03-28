import React, { useEffect } from 'react';
import './ProjectPage.css'; 

import { FaFolder } from "react-icons/fa";
import { PiFolderPlus } from "react-icons/pi";

function ProjectPage() {
  useEffect(() => {
    document.body.style.backgroundColor = '#215F5F'; 
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);
  
  return (
    <div>
      <div className='TopHeader'>
        <div className="projectText">
          <p>Projects</p>
        </div>
        <div className="buttonContainer">
          <button className="button">Select</button>
            <PiFolderPlus size={40}/>
        </div>
      </div>


      <div className="grid-container">
        <ul className="grid">
          <li><FaFolder size={100}/><span>Favorites</span></li>
          <li><FaFolder size={100}/><span>Coquette</span></li>
          <li><FaFolder size={100}/><span>Minimalist</span></li>
          <li><FaFolder size={100}/><span>Plant Mom</span></li>
        </ul>
       </div>
    </div>

  );
}

export default ProjectPage;
