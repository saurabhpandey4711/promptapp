import express from "express";
//import { getPrompts } from "../controllers/promptController.js";

import {
  getPrompts,
  getPromptById,
  getUserPrompts,
  addPrompt,
  updatePrompt,
  deletePrompt,
} from "../controllers/promptController.js";

const router = express.Router();

router.get("/", getPrompts);

router.get("/user/:userId", getUserPrompts);

router.get("/:id", getPromptById);

router.post("/", addPrompt);

router.put("/:id", updatePrompt);
router.delete("/:id", deletePrompt);

export default router;

// router.put("/:id", updatePrompt);
// router.delete("/:id", deletePrompt);