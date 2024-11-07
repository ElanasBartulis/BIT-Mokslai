import * as fs from "fs";

// perskaityti dock
// paversti juos i json
// sugeneruoti data
// sukurti txt faila pagal data'
// txt turinys

// Metai: 2024
// Mėnuo: Lapkritis
// Mėnesio diena: 7
// Savaitės diena: Ketvirtadienis

function main() {
  const settings = perskaitytiFaila("settings.json");
  const dateLanguagesWithMonths = perskaitytiFaila(
    "dateLanguagesWithMonths.json"
  );
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDay = date.getDay();
  const dayNumberWith0 = day.toString().padStart(2, "0");

  const fullDate = `${year}-${month}-${dayNumberWith0}`;

  fs.appendFile(
    `${fullDate}`,
    printMsg(year, month, day, weekDay, dateLanguagesWithMonths, settings),
    (err) => {
      if (err) throw new err();
      console.log("Saved!");
    }
  );
}
main();

function perskaitytiFaila(jsonFile) {
  const file = JSON.parse(fs.readFileSync(jsonFile).toString());
  return file;
}
function printMsg(year, month, day, weekDay, dateLangJson, settings) {
  return `Metai: ${year}\nMenuo: ${
    dateLangJson[settings.language].months[month]
  }\nMenesio diena: ${day}\nSavaites Diena: ${
    dateLangJson[settings.language].days[weekDay === 0 ? 7 : weekDay]
  }`;
}
