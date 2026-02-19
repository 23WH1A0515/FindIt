const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: String,
    location: String,
    type: {
      type: String,
      enum: ["lost", "found"],
      required: true,
    },
    image: String,
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "returned"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
