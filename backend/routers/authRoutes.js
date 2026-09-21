import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  getProfile,
  updateProfile,
  
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();
// router.get("/profile/:id", verifyToken, getProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile/:id", verifyToken, getProfile);
router.get("/me", verifyToken, getCurrentUser);
//router.get("/profile/:id", getProfile);
router.put("/profile/:id", verifyToken,upload.single("profile_image"), updateProfile);

export default router;