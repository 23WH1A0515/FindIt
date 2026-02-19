const Item = require("../models/Item");

exports.createItem = async (req, res, next) => {
  try {
    const { title, description, category, location, type } = req.body;

    const item = await Item.create({
      title,
      description,
      category,
      location,
      type,
      image: req.file ? req.file.path : null,
      reportedBy: req.user.id,
    });

    res.status(201).json({ success: true, data: item });
  } catch (error) {
    next(error);
  }
};

exports.getItems = async (req, res, next) => {
  try {
    const { category, type, location, keyword } = req.query;

    let filter = {};

    if (category) filter.category = category;
    if (type) filter.type = type;
    if (location) filter.location = location;
    if (keyword) {
      filter.$or = [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ];
    }

    const items = await Item.find(filter).populate("reportedBy", "name email");

    res.json({ success: true, data: items });
  } catch (error) {
    next(error);
  }
};

exports.getSingleItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id).populate("reportedBy", "name");

    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }

    res.json({ success: true, data: item });
  } catch (error) {
    next(error);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    let item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }

    if (item.reportedBy.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json({ success: true, data: item });
  } catch (error) {
    next(error);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }

    if (item.reportedBy.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    await item.deleteOne();

    res.json({ success: true, message: "Item deleted" });
  } catch (error) {
    next(error);
  }
};
