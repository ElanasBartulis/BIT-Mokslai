import ScooterHistoryModel from "../models/ScooterLeaseHistoryModel.js";
import ScooterModel from "../models/ScooterModel.js";
import { ScooterLeaseHistoryCreateValidation } from "../utils/validations/ScooterLeaseHistorySchema.js";
import sequelize from "../config/sequelize.js";

export async function getAllScootersHistory(req, res) {
  const allScotersHistory = await ScooterHistoryModel.findAll();
  res.status(200).json(allScotersHistory);
}
export async function getScooterHistoryById(req, res) {
  const { id } = req.params;
  if (!id || isNaN(id))
    return res
      .status(400)
      .json({ message: "Scooter ID was not provided or was in wrong format" });

  const foundScooterHistory = await ScooterHistoryModel.findAll({
    where: { scooterId: id },
  });
  res.status(200).json(foundScooterHistory);
}

// working our code.
export async function createScooterHistoryRecord(req, res) {
  const { id: scooterId } = req.params;
  const { city } = req.body;
  const updatedData = await sequelize.transaction(async (t) => {
    const scooter = await ScooterModel.findByPk(scooterId);

    await ScooterModel.update(
      {
        isBusy: true,
        lastUseTime: new Date(),
      },
      {
        where: {
          id: scooterId,
        },
      },
      { transaction: t }
    );

    // Validacija
    const newScooterHistoryData = {
      startingRideKm: scooter.totalRide,
      city,
      scooterId,
    };

    const validationResult = ScooterLeaseHistoryCreateValidation.safeParse(
      newScooterHistoryData
    );

    if (!validationResult.success)
      return res.status(400).json({ errors: validationResult.error.issues });

    const newScooterHistory = await ScooterHistoryModel.create(
      newScooterHistoryData,
      { transaction: t }
    );

    return { scooter, leaseHistory: newScooterHistory };
  });

  res.status(201).json(updatedData);
}
