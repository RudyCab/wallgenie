import React from "react";
// import { Wall } from "../../Structs/Wall";
// import { DecorItem } from "../../Structs/DecorItem";

const WallComponent = ({ wall }) => {
  const { coordinates, size, wallOptions } = wall;
  const { x, y } = coordinates;
  const { width, height } = size;
  const { color } = wallOptions;

  const OFFSET = 20;

  let originX = 0;
  let originY = y - OFFSET;
  let targetX = x + OFFSET;
  let targetY = y;

  let dx = originX - targetX;
  let dy = originY - targetY;
  console.log(dx, dy);

  let theta = Math.atan2(dy, -dx) * (180 / Math.PI);
  console.log(theta);

  const rectStyle = {
    position: "absolute",
    left: x + OFFSET,
    top: y,
    width: width - 2 * OFFSET,
    height: height,
    border: `2px solid black`,
    backgroundColor: color,
  };

  return (
    <div>
      <div style={rectStyle} />
      <div
        style={{
          position: "absolute",
          top: y - 2 * OFFSET,
          left: (2 / 3) * OFFSET,
          width: "2px",
          height: "5%",
          backgroundColor: "black",
          transform: `rotate(${theta}deg)`,
        }}
      />
    </div>
  );
};

export default WallComponent;
