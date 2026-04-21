const { markAsReturned } = require("../controllers/itemController");
const express = require("express");

const {
  createItem,
  getItems,
  getMyItems,
  getSingleItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", authMiddleware, upload.single("image"), createItem);

router.get("/me", authMiddleware, getMyItems);

router.get("/", getItems);

router.get("/:id", getSingleItem);

router.put("/:id", authMiddleware, upload.single("image"), updateItem);

router.delete("/:id", authMiddleware, deleteItem);

router.put("/:id/return", authMiddleware, markAsReturned);

module.exports = router;