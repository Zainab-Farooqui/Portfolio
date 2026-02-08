const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const feedbackRoutes = require("./routes/feedback");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Disable mongoose buffering
mongoose.set("bufferCommands", false);

// -------------------- API ROUTES --------------------
app.use("/api/feedback", feedbackRoutes);

// -------------------- SERVE FRONTEND (VITE BUILD) --------------------
// Resolve root project directory
const rootDir = path.resolve(__dirname, "..");

// Serve static files from Vite build
app.use(
  express.static(path.join(rootDir, "zainab-portfolio", "dist"))
);

// For all other routes, tell React to handle routing
app.get("*", (req, res) => {
  res.sendFile(
    path.join(rootDir, "zainab-portfolio", "dist", "index.html")
  );
});

// -------------------- SERVER + DB --------------------
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
