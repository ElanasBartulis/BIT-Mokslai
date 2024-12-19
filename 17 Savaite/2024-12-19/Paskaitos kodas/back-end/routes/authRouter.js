import express from "express";
import * as authController from "../controllers/auth-controller.js";
const router = express.Router();

// http://localhost/server/api/auth/session
router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/log-out", authController.logout);
router.get("/session", authController.session);
export default router;
