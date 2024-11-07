import * as fs from "fs";

// failu perskaitymas
// failu informacijos parsinimas is JSON tipo
// siandienines dienos gavimas
// informacijos istraukimas is turimos informacijos

function getTodaysWeekDay() {
  const settings = readJsonFIle("settings.json");
  const date = readJsonFIle("dateLanguage.json");
  const weekDay = getTodaysWeek();
  console.log(date[settings.language][weekDay]);
}
getTodaysWeekDay();

function readJsonFIle(filePath) {
  const fileData = fs.readFileSync(filePath);
  const filieDataStringified = fileData.toString();
  const fileToJson = JSON.parse(filieDataStringified);
  return fileToJson;
}
function getTodaysWeek() {
  const currentDate = new Date();
  const weekDay = currentDate.getDay();
  if (weekDay === 0) return 7;
  return weekDay;
}
