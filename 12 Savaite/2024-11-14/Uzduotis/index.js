import { readFromUser, writeToUser } from "./file-io.js";
import { generateId } from "./idGenerator.js";
import { getFormattedDate } from "./date.js";

import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
const idGen = generateId();

server.listen(8080, () => {
  console.log("Server working. http://localhost:8080");
});

// Visi user
server.get("/saskaita", (req, res) => {
  const allUsers = readFromUser();
  res.status(200).send(allUsers);
});

// Vienas user
server.get("/saskaita/:id", (req, res) => {
  const allUsers = readFromUser();
  const id = +req.params.id;
  const findUser = allUsers.find((usr) => usr.id === id);

  if (!findUser) return res.status(404).json({ message: "User not found!" });

  res.status(200).send(findUser);
});

// Sukurti nauja user
server.post("/saskaita/sukurti", (req, res) => {
  const allUsers = readFromUser();
  const newUser = req.body;

  if (!newUser.name) return res.status(400).json("not valid user schema!");

  newUser.id = idGen.next().value;
  newUser.balance = 0;
  newUser.transactions = [];

  allUsers.push(newUser);
  writeToUser(allUsers);
  res.status(201).json(newUser);
});

// Sukurti imoka
server.post("/saskaita/:id/imoka", (req, res) => {
  const allUsers = readFromUser();
  const id = Number(req.params.id);
  const number = Number(req.body.balance);
  const findUser = allUsers.find((usr) => usr.id === id);

  if (number < 0)
    return res.status(404).json({ message: "Number must be above 0" });

  findUser.balance += number;
  findUser.transactions.push({
    type: "Imoka",
    time: getFormattedDate(),
    amount: number,
  });
  writeToUser(allUsers);
  res.status(200).send(findUser);
});

// Sukurti ismoka
server.post("/saskaita/:id/ismoka", (req, res) => {
  const allUsers = readFromUser();
  const id = Number(req.params.id);
  const number = -Number(req.body.balance);
  const findUser = allUsers.find((usr) => usr.id === id);

  if (number > 0 || +findUser.balance + number < 0) {
    return res
      .status(404)
      .json({ message: "Number must be negative and within balance limit" });
  }

  findUser.balance += number;
  findUser.transactions.push({
    type: "Ismoka",
    time: getFormattedDate(),
    amount: number,
  });

  writeToUser(allUsers);
  res.status(200).send(findUser);
});

// Istrinti user
server.delete("/saskaita/:id", (req, res) => {
  const allUsers = readFromUser();
  const id = Number(req.params.id);
  const index = allUsers.findIndex((usr) => usr.id === id);
  if (index === -1) return res.status(404).send("User not found");
  allUsers.splice(index, 1);
  writeToUser(allUsers);
  res.status(200).json();
});
