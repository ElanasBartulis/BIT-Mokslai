import express from "express";
import User from "../modules/User.model.js";
import faker from "../faker.js";
import Vehicle from "../modules/Vehicle.model.js";
const { generateNewPerson } = faker;

const router = express.Router();

// Visi User
router.get("/", async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).send(allUsers);
});

// User pagal ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const allUsers = await User.findOne({ where: { id: id } });
  if (!allUsers) return res.status(404).send("User not found");
  res.status(200).send(allUsers);
});

// User create
router.post("/", async (req, res) => {
  const body = req.body;
  const newUserResponse = await User.create(body);
  res.status(200).send(newUserResponse);
});

// User bulk create
router.post("/auto/:count?", async (req, res) => {
  let count = +req.params.count;
  if (!count || count <= 0 || count > 50) {
    count = 1;
  }
  const people = Array.from({ length: count }, () => generateNewPerson());
  const createdPeople = await User.bulkCreate(people);
  res.status(200).send(createdPeople);
});

// Delete user
router.delete("/:id", async (req, res) => {
  const id = +req.params.id;
  const findUser = await User.findOne({ where: { id: id } });
  if (!findUser) return res.status(404).send("User not found");
  User.destroy({ where: { id: id } });
  res.status(200).send("User Delete Successful");
});

export default router;
