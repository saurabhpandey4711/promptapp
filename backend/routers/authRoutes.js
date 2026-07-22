import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  getProfile,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me", verifyToken, getCurrentUser);
router.get("/profile/:id", getProfile);

export default router;