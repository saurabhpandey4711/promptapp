import express from "express";

import { verifyToken } from "../middleware/authMiddleware.js";

import {
  getPrompts,
  getPromptById,
  getUserPrompts,
  addPrompt,
  updatePrompt,
  deletePrompt,
  getDashboardStats,
} from "../controllers/promptController.js";

const router = express.Router();

// Public Routes
router.get("/", getPrompts);
router.get("/stats/:userId", getDashboardStats);
router.get("/user/:userId", getUserPrompts);
router.get("/:id", getPromptById);

// Protected Routes
router.post("/", verifyToken, addPrompt);
router.put("/:id", verifyToken, updatePrompt);
router.delete("/:id", verifyToken, deletePrompt);

export default router;