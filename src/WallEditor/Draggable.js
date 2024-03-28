import React, { useState, useRef, useEffect } from 'react';
import "./WallEditorPage.css";
import 'bootstrap/dist/css/bootstrap.css';


function Draggable(props) {
const resetPos = () => {
    setPosition({x: props.x, y: 0})
    setHeight(110)
    setWidth(80)
}

  /* dragging and dropping and image state/ref */
  const [position, setPosition] = useState({x: props.x, y: 0});
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({x: props.x, y: 0});
  const dragRef = useRef(null)

  /* resizing image state/ref */
  const [height, setHeight] = useState(110)
  const [width, setWidth] = useState(80)
  const [resizing, setResizing] = useState(false)
  const [mouseResize, setMouseResize] = useState({x: 0, y:0})
  const resizeRef = useRef(null)

  /* Holding image */
  const onMouseDown = (e) => {
    setIsDragging(true);
    setOffset({x: e.clientX - position.x , y: e.clientY - position.y});

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

  /* Clicked resize button */
  const onResizeDown = (e) => {
    setResizing(true)
    setMouseResize({x: e.offsetX, y: e.offsetY})
  }

  /* Holding and dragging resize button */
  const onResizeMove = (e) => {
    if(!resizing) return;
    setHeight(height + 100);
    setWidth(width + 100)
    setResizing(false)
  }

  /* Resize button let go*/
  const onResizeUp = (e) => {
    setResizing(false)
    resizeRef.current.removeEventListener("mousemove", onResizeMove)
  }

  return (
    <div>
    <div onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
      ref={dragRef}
      style={{
        position: 'absolute',
        /* Change position based on calculated x, y above*/
        top: position.y,
        left: position.x,
        cursor: 'pointer',
        width: "100px"
      }}>
      <button style={{width:"2px", fontSize:"5px"}} onClick={resetPos}>X</button>
      <img draggable src={require("" + props.img)} className="image" style={{height: height, width: width}} />
      <button ref={resizeRef} style={{width:"30px", fontSize:"5px", left:"30px"}} 
      onMouseDown={onResizeDown} onMouseMove={onResizeMove} onMouseUp={onResizeUp}
      >Resize</button>
    </div>
    </div>
  );
};

export default Draggable;
