import express from "express";
import {
  toggleLike,
  getLikes,
  getLikedPrompts,
} from "../controllers/likeController.js";

const router = express.Router();

router.post("/:promptId", toggleLike);

router.get("/:promptId", getLikes);
router.get("/user/:userId", getLikedPrompts);

export default router;