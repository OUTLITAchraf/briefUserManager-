import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("DB connected successfully!");
    connection.release();
  }
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ api: "up" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});