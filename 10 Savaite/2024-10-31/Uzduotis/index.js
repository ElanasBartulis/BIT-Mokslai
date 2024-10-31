import Rectangle from "./Rectangle.js";
import Circle from "./circle.js";
import Bank from "./bankAccount.js";
import Temp from "./temperature.js";

const rectangle = new Rectangle(4, 5);
const circkle = new Circle(1);
const bank = new Bank(100);
bank.deposit(10);
bank.withdraw(90);
const temperature = new Temp();
temperature.fahrenheit = 20;
console.log(temperature);
