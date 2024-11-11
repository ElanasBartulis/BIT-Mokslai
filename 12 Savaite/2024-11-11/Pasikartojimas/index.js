const express = require("express");
const server = express();
server.use(express.json());

server.listen(3999, () => {
  console.log("Sekmingai paleistas serveris su 3999");
});
let skaicius = 0;

const belekas = [
  { 1: "labas", 2: "Kaip", 3: "Tu", 4: "Gyveni" },
  { 5: "Hi", 6: "How", 7: "You", 8: "Doing" },
];

server.get("/", (req, res) => {
  skaicius++;
  res.send({ belekas, skaicius });
});

server.post("/", (req, res) => {
  belekas.push(req.body);
  res.send("OK");
});
