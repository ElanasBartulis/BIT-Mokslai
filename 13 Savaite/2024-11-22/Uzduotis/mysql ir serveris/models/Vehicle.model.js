import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";
import User from "./User.model.js";

const Vehicle = sequelize.define("vehicle", {
  make: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
  fuel: { type: DataTypes.STRING },
  vin: { type: DataTypes.STRING },
  registrationNumber: { type: DataTypes.STRING },
});

User.hasMany(Vehicle);

export default Vehicle;
