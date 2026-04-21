const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    type: {
      type: String,
      enum: ["lost", "found"],
      required: true,
    },

    image: {
      type: String,
      default: null,
    },

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