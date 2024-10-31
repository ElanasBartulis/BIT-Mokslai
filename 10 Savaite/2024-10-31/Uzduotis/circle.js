export default class Circle {
  #radius;
  #area;
  constructor(radius) {
    this.#radius = radius;
    this.#area = +(Math.PI * Math.pow(radius, 2)).toFixed(2);
  }

  get radius() {
    return this.#radius;
  }
  get area() {
    return this.#area;
  }

  set radius(newRadius) {
    this.#radius = newRadius;
    this.#area = +(Math.PI * Math.pow(newRadius, 2)).toFixed(2);
  }
}
