import express from "express";
import Vehicle from "../models/Vehicle.model.js";
import faker from "../faker.js";
import User from "../models/User.model.js";
const { generateNewVehicle } = faker;

const router = express.Router();

// All vehicles
router.get("/", async (req, res) => {
  const allVehicles = await Vehicle.findAll();
  res.status(200).send(allVehicles);
});

// Vehicle pagal ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const allVehicles = await Vehicle.findOne({ where: { id: id } });
  if (!allVehicles) return res.status(404).send("Vehicle not found");
  res.status(200).send(allVehicles);
});

// Vehicle create manual
router.post("/", async (req, res) => {
  const { UserId, ...VehicleData } = req.body;

  if (!UserId) return res.status(400).send({ error: "UserId is required" });

  const doesUserExist = await User.findByPk(UserId);
  if (!doesUserExist)
    return res.status(404).send({ error: `User with ID ${UserId} not found` });

  const newVehicleResponse = await Vehicle.create({
    ...VehicleData,
    UserId,
  });
  res.status(200).send(newVehicleResponse);
});

// Vehicle bulk create
router.post("/auto/", async (req, res) => {
  const { count, UserId } = req.query;
  Number(count);

  if (!count || count <= 0 || count > 50) {
    count = 1;
  }

  if (!UserId) return res.status(400).send({ error: "UserId is required" });

  const doesUserExist = await User.findByPk(UserId);
  if (!doesUserExist)
    return res.status(404).send({ error: `User with ID ${UserId} not found` });

  const vehicles = Array.from({ length: count }, () => ({
    UserId,
    ...generateNewVehicle(),
  }));

  const createdVehicles = await Vehicle.bulkCreate(vehicles);
  res.status(200).send(createdVehicles);
});

// Delete vehicle
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const findVehicle = await Vehicle.findOne({ where: { id: id } });
  if (!findVehicle) return res.status(404).send("Vehicle not found");
  Vehicle.destroy({ where: { id: id } });
  res.status(200).send("User Delete Successful");
});

export default router;
