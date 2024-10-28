// Užduotis 1: Sukurkite tuščią objektą ir pridėkite jame savybes `name` ir `age`.

let person = {
  firstName: "Ona",
  age: 22,
  //city: 'Kaunas'
};

// Užduotis 2: Sukurkite metodą, kuris atspausdins objekto `name` savybę.

person.callMyName = function () {
  console.log(this["first name"]);
};
// person.callMyName();

// console.log(person);

// Užduotis 3: Sukurkite metodą, kuris pridės naują savybę į objektą dinamiškai.

person.addProperty = function (property, value) {
  this[property] = value;
};

person.addProperty("city", "Kaunas");
// console.log(person);

// Užduotis 4: Patikrinkite, ar objektas turi savybę `name` naudodami `hasOwnProperty`.

// console.log(person.hasOwnProperty("first name"));

// Užduotis 5: Sukurkite funkciją, kuri grąžins objekto visų savybių raktus.

function getKeys(obj) {
  return Object.keys(obj);
}

// console.log(getKeys(person));

// Užduotis 6: Sukurkite funkciją, kuri grąžins visų objekto savybių reikšmes.

function getValues(obj) {
  return Object.values(obj);
}

// console.log(getValues(person));

// Užduotis 7: Naudokite `Object.assign`, kad nukopijuotumėte esamą objektą į kitą objektą.

const clonedPerson = Object.assign({}, person);
clonedPerson["first name"] = "Marytė";
// console.log(clonedPerson);
// console.log(person);

// Užduotis 8: Sukurkite metodą, kuris skaičiuos visų objekto savybių skaičių.

person.countProperties = function () {
  return Object.keys(person).length;
};

// console.log(person.countProperties());

// Užduotis 9: Sukurkite metodą, kuris pašalins savybę iš objekto.

person.deleteFile = function (whatToDelete) {
  return delete this[whatToDelete];
};

// person.deleteFile("city");
// console.log(person);

// Užduotis 10: Sukurkite metodą, kuris atnaujins esamą objekto savybę.

person.createNew = function (key, newValue) {
  return this.hasOwnProperty(key)
    ? ((this[newValue] = this[key]), delete this[key])
    : console.log("Savybe nerasta");
};
// person.createNew("firstName", "Vardas");
// console.log(person);

// Užduotis 11: Sukurkite metodą, kuris sukurs objekto kopiją naudojant `Object.assign`.

function copyObj(obj) {
  return Object.assign(obj);
}
// console.log(copyObj(person));

// Užduotis 12: Patikrinkite, ar objektas yra tuščias (neturi jokių savybių).

// console.log(Object.getOwnPropertyNames(person));

// Užduotis 13: Sukurkite įdėtą objektą `address` ir pridėkite jį į `person`.

const address = {
  gatve: "Savanoriu pr. 18",
  miestas: "Kaunas",
  pastoKodas: 12345,
  kaskas: function () {
    console.log(`Hello from ${this.kaskas}`);
  },
};
person.address = address;
// console.log(person);

// Užduotis 14: Sukurkite metodą, kuris giliai kopijuos objektą (deep copy).

function makeCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const newCopy = makeCopy(address);
newCopy.gatve = "Nauja";
// console.log(makeCopy(newCopy));

// Užduotis 15: Pridėkite papildomą dinaminę savybę naudojant skliaustų notaciją.

const notacija = {
  1: "Apple",
  2: "Orange",
  3: "Banana",
  4: () => {
    console.log("Hi");
  },
};
// notacija[4]();

// Užduotis 16: Pridėkite metodą, kuris aprašys objektą naudojant esamas savybes.

notacija["pridejau"] = function () {
  return Object.entries(this);
};

// console.log(notacija.pridejau());

// Užduotis 17: Sukurkite konstruktoriaus funkciją, kuri priima `name` ir `age`, ir sukurkite naują objektą.

function knowAgeAndName(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
  };
}
const person1 = new knowAgeAndName("Jonas", 32);
// console.log(person1.greeting());

// Užduotis 18: Pridėkite metodą, kuris atspausdins informaciją apie žmogų, naudojant `Person`.

// Užduotis 19: Patikrinkite, ar objektas turi tam tikrą savybę, naudodami `in` operatorių.

// Užduotis 20: Sukurkite objektą ir užšaldykite jį, kad savybės nebūtų keičiamos.
