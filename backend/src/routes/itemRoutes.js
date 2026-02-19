const express = require("express");
const {
  createItem,
  getItems,
  getSingleItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", authMiddleware, upload.single("image"), createItem);
router.get("/", getItems);
router.get("/:id", getSingleItem);
router.put("/:id", authMiddleware, updateItem);
router.delete("/:id", authMiddleware, deleteItem);

module.exports = router;
