import fs from "fs";

export function readFromUser() {
  const resultEncoded = fs.readFileSync("./users.json", "utf-8");
  const stringJSON = resultEncoded.toString();
  return JSON.parse(stringJSON);
}

export function writeToUser(users) {
  fs.writeFileSync("./users.json", JSON.stringify(users));
}
