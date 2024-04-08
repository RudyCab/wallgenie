const __getDegreeBetween = (originX, originY, targetX, targetY) => {
  let dx = originX - targetX;
  let dy = originY - targetY;

  let theta = Math.atan2(dy, -dx);
  theta *= 180 / Math.PI; // convert theta from radians to degrees

  console.log(theta);
  return theta;
};

const WallComponent = ({ wall, wallOptions }) => {
  // extract values
  const { constants, coordinates, size, border } = wall;
  const { PADDING } = constants;
  const { x, y } = coordinates;
  const { width, height } = size;
  const { borderColor, borderWidth } = border;

  const { wallColor, wallTexture, isTextured } = wallOptions;

  const rectStyle = {
    position: "fixed",
    left: x,
    top: y,
    width: width,
    height: height,
    border: `${borderWidth}px solid ${borderColor}`,
    backgroundColor: wallColor,
  };

  const renderLine = (left, top, angle) => {
    return {
      position: "fixed",
      left: left,
      top: top,
      width: `${borderWidth}px`,
      height: height,
      backgroundImage: `linear-gradient(to bottom, transparent 30%, ${borderColor} 45%)`, // apply gradient
      transform: `rotate(${angle}deg)`,
    };
  };

  return (
    <div className="wall-component">
      {/* top-left */}
      <div style={renderLine(x, y - height / 2, -45)} />
      {/* bottom-left */}
      <div style={renderLine(x, y + height / 2, -135)} />
      {/* bottom-right */}
      <div style={renderLine(width + PADDING, y + height / 2, 135)} />
      {/* top-right */}
      <div style={renderLine(width + PADDING, y - height / 2, 45)} />
      {/* main wall rect */}
      <div style={rectStyle} />
    </div>
  );
};

export default WallComponent;
