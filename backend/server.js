// import app from "./app.js";
// import express from "express";
// import path from "path";

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });

// app.use(
//   "/uploads",
//   express.static(path.join(process.cwd(), "uploads"))
// );

import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});