import express from "express";

import {
  getCategories,
  addCategory,
} from "../controllers/categoryController.js";

import { verifyToken } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Get all categories
router.get("/", getCategories);

// Only admin can add category
router.post("/", verifyToken, isAdmin, addCategory);

export default router;