const componentService = require("../services/component.service.js");

module.exports.getAll = async (req, res) => {
  try {
    const filters = {};

    if (req.query.category) filters.category = req.query.category;
    if (req.query.brand) filters.brand = req.query.brand;

    const components = await componentService.getAll(filters);

    res.json(components);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.getById = async (req, res) => {
  try {
    const component = await componentService.getById(req.params.id);
    res.json(component);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.create = async (req, res) => {
  try {
    const component = await componentService.create(req.body);
    res.status(201).json(component);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.update = async (req, res) => {
  try {
    const component = await componentService.update(req.params.id, req.body);
    res.json(component);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.remove = async (req, res) => {
  try {
    await componentService.remove(req.params.id);
    res.status(204).end();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};