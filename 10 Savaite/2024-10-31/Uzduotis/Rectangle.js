export default class Rectangle {
  #width;
  #height;
  #area;
  #perimeter;
  constructor(height, width) {
    this.#width = width;
    this.#height = height;
    this.#area = height * width;
    this.#perimeter = (height + width) * 2;
  }

  get width() {
    return this.#width;
  }
  get height() {
    return this.#height;
  }
  get area() {
    return this.#area;
  }
  get perimeter() {
    return this.#perimeter;
  }

  set width(newWidth) {
    this.#width = newWidth;
    this.#area = this.#height * newWidth;
    this.#perimeter = (this.#height + newWidth) * 2;
  }
  set height(newHeight) {
    this.#height = newHeight;
    this.#area = this.#width * newHeight;
    this.#perimeter = (this.#width + newHeight) * 2;
  }
}
