export default class Temperature {
  #celsius;
  #fahrenheit;
  constructor() {
    this.#celsius = 0;
    this.#fahrenheit = 0;
  }

  get celsius() {
    return this.#celsius;
  }
  get fahrenheit() {
    return this.#fahrenheit;
  }

  set celsius(newCelsius) {
    this.#celsius = newCelsius;
    this.#fahrenheit = +((newCelsius * 9) / 5 + 32).toFixed(1);
  }
  set fahrenheit(newfahrenheit) {
    this.#celsius = +(((newfahrenheit - 32) * 5) / 9).toFixed(1);
    this.#fahrenheit = newfahrenheit;
  }
}
