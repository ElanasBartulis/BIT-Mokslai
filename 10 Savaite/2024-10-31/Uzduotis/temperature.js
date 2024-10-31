export default class Temperature {
  #celsius;
  #fahrenheit;
  constructor(celsius, fahrenheit) {
    this.#celsius = isNaN(celsius)
      ? (celsius = 0)
      : celsius > 0
      ? celsius
      : +(((fahrenheit - 32) * 5) / 9).toFixed(1);

    this.#fahrenheit = isNaN(fahrenheit)
      ? (fahrenheit = 0)
      : fahrenheit > 0
      ? fahrenheit
      : +((celsius * 9) / 5 + 32).toFixed(1);
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
