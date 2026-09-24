import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No Image Uploaded",
    });
  }

  res.json({
    success: true,
    imageUrl: `${process.env.BACKEND_URL}/uploads/${req.file.filename}`,
    message: "Image Uploaded Successfully",
  });
});

export default router;