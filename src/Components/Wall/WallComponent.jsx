const getDegreeBetween = (originX, originY, targetX, targetY) => {
  let dx = originX - targetX;
  let dy = originY - targetY;

  let theta = Math.atan2(dy, -dx);
  theta *= 180 / Math.PI; // convert theta from radians to degrees

  console.log(theta);
  return theta;
};

const WallComponent = ({ wall }) => {
  // extract values
  const { constants, coordinates, size, wallOptions } = wall;
  const { PADDING } = constants;
  const { x, y } = coordinates;
  const { width, height } = size;
  const { color, borderColor, borderWidth } = wallOptions;

  const rectStyle = {
    position: "fixed",
    left: x,
    top: y,
    width: width,
    height: height,
    border: `${borderWidth}px solid ${borderColor}`,
    backgroundColor: color,
  };

  const renderLine = (left, top, angle) => {
    return {
      position: "fixed",
      left: left,
      top: top,
      width: `${borderWidth}px`,
      height: height,
      backgroundImage: `linear-gradient(to bottom, white 30%, ${borderColor} 55%)`, // apply gradient
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