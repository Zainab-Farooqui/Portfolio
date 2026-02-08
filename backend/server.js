const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const feedbackRoutes = require("./routes/feedback");

const app = express();

app.use(cors());
app.use(express.json());

// Disable mongoose buffering
mongoose.set("bufferCommands", false);

const PORT = 5000;

// Connect DB first, then start server
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000
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

// Routes
app.use("/api/feedback", feedbackRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});
