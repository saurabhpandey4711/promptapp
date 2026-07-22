import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import categoryRoutes from "./routers/categoryRoutes.js";
import db from "./config/db.js";
import promptRoutes from "./routers/promptRoutes.js";
import authRoutes from "./routers/authRoutes.js";
import likeRoutes from "./routers/likeRoutes.js";
import path from "path";
import uploadRoutes from "./routers/uploadRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/prompts", promptRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "PromptVerse Backend Running 🚀",
  });
});

export default app;