import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";
import { getAllUsers } from "../controllers/adminController.js";
import {deleteUser, getAllPrompts, getDashboardStats, updateUserRole } from "../controllers/adminController.js"

const router = express.Router();

router.get(
  "/users",
  verifyToken,
  isAdmin,
  getAllUsers
);

router.delete(
  "/users/:id",
  verifyToken,
  isAdmin,
  deleteUser
);

router.get(
  "/prompts",
  verifyToken,
  isAdmin,
  getAllPrompts
);

router.get(
  "/stats",
  verifyToken,
  isAdmin,
  getDashboardStats
);

router.put(
  "/users/:id/role",
  verifyToken,
  isAdmin,
  updateUserRole
);

export default router;