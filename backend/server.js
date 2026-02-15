const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const feedbackRoutes = require("./routes/feedback");

const app = express();

// -------------------- MIDDLEWARES --------------------
app.use(cors());
app.use(express.json());

// Disable mongoose buffering
mongoose.set("bufferCommands", false);

// -------------------- API ROUTES --------------------
app.use("/api/feedback", feedbackRoutes);

// Simple test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// -------------------- DATABASE + SERVER --------------------
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
