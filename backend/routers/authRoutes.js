import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  getProfile,
  updateProfile,
  
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();
// router.get("/profile/:id", verifyToken, getProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile/:id", verifyToken, getProfile);
router.get("/me", verifyToken, getCurrentUser);
//router.get("/profile/:id", getProfile);
router.put("/profile/:id", verifyToken, updateProfile);

export default router;