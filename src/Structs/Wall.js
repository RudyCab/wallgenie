export class Wall {
  constructor(coordinates, size, wallOptions, decorItems, constants) {
    this.coordinates = coordinates; // x, y
    this.size = size; // width, height
    this.wallOptions = wallOptions; // color, borderColor, borderWidth, texture, isTextured
    this.decorItems = decorItems;
    this.constants = constants; // PADDING, MAX_WIDTH
  }
}
