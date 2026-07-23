import express from "express";
//import { getPrompts } from "../controllers/promptController.js";
import verifyToken from "../middleware/verifyToken.js";

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

router.get("/", getPrompts);
router.get("/stats/:userId", getDashboardStats);
router.get("/user/:userId", getUserPrompts);

router.get("/:id", getPromptById);

// Protected Routes
router.post("/", verifyToken, addPrompt);
router.put("/:id", verifyToken, updatePrompt);
router.delete("/:id", verifyToken, deletePrompt);

router.post("/", addPrompt);

router.put("/:id", updatePrompt);
router.delete("/:id", deletePrompt);

export default router;

// router.put("/:id", updatePrompt);
// router.delete("/:id", deletePrompt);