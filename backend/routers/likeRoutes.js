import express from "express";
import {
  toggleLike,
  getLikes,
} from "../controllers/likeController.js";

const router = express.Router();

router.post("/:promptId", toggleLike);

router.get("/:promptId", getLikes);

export default router;