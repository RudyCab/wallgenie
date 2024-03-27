export class Wall {
  constructor(id, coordinates, size, wallOptions, decorItems) {
    this.id = id;
    this.coordinates = coordinates; // x, y
    this.size = size; // width, height
    this.wallOptions = wallOptions; // color, texture, isTextured
    this.decorItems = decorItems;
  }
}
