import faker from "./faker.js";
import Vehicle from "./modules/Vehicle.model.js";
import User from "./modules/User.model.js";
import express from "express";
import UserRouter from "./routes/user.router.js";
import VehicleRouter from "./routes/vehicle.router.js";

const { generateNewPerson, generateNewVehicle } = faker;

await Vehicle.sync({ alter: true });
await User.sync({ alter: true });

const app = express();
app.use(express.json());

app.use("/api/person", UserRouter);
app.use("/api/vehicle", VehicleRouter);

app.listen("3000", () => {
  console.log("Serveris sekmingai paleistas.");
});
