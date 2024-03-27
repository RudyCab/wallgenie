import React, { useState, useRef, useEffect } from 'react';
import "./WallEditorPage.css";
import 'bootstrap/dist/css/bootstrap.css';

function Draggable(props) {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({x: 0, y: 0});

  /* Holding image */
  const onMouseDown = (e) => {
    setIsDragging(true);
    setOffset({x: e.clientX - position.x, y: e.clientY - position.y});
  };
  /* Image is moving while being held */
  const onMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({x: e.clientX - offset.x, y: e.clientY - offset.y});
  };

  /* Image let go */
  const onMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
      style={{
        position: 'absolute',
        /* Change position based on calculated x, y above*/
        top: position.y,
        left: position.x,
        cursor: 'pointer',
      }}>
      <img draggable src={require("../WallEditorImages/Item1.png")} alt="Item 1" className="image" />
    </div>
  );
};

export default Draggable;
