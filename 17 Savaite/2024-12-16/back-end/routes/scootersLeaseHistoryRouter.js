import express from "express";
import * as scootersController from "../controllers/scoters-history-controller.js";

const router = express.Router();

router.get("/", scootersController.getAllScootersHistory);

export default router;
