import { language } from "../config.js";
import datesLang from "../lang/dates.json" with { type: "json" };
// import datesLang from "../lang/dates.json";
// import datesLang from "../lang/dates.json" assert { type: "json" };

export function whichDayOfWeek(day) {
  return datesLang[language].daysOfWeek[day];
}

export function whichMonth(monthNumber) {
  return datesLang[language].monthNames[monthNumber];
}
