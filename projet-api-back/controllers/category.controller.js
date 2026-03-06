const categoryService = require("../services/category.service.js");

module.exports.getAll = async (req, res) => {
  try {
    const categories = await categoryService.getAll();
    res.json(categories);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.create = async (req, res) => {
  try {
    const category = await categoryService.create(req.body);
    res.status(201).json(category);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.update = async (req, res) => {
  try {
    const category = await categoryService.update(req.params.id, req.body);
    res.json(category);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.remove = async (req, res) => {
  try {
    await categoryService.remove(req.params.id);
    res.status(204).end();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};