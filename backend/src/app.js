const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Static uploads folder
app.use("/uploads", express.static("uploads"));

// Health check route
app.get("/", (req, res) => {
  res.send("FindIt Backend Running");
});

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/items", itemRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;