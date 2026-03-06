const merchantService = require("../services/merchant.service.js");

module.exports.getAll = async (req, res) => {
  try {
    const merchants = await merchantService.getAll();
    res.json(merchants);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.getById = async (req, res) => {
  try {
    const merchant = await merchantService.getById(req.params.id);
    res.json(merchant);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.create = async (req, res) => {
  try {
    const merchant = await merchantService.create(req.body);
    res.status(201).json(merchant);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.update = async (req, res) => {
  try {
    const merchant = await merchantService.update(req.params.id, req.body);
    res.json(merchant);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.remove = async (req, res) => {
  try {
    await merchantService.remove(req.params.id);
    res.status(204).end();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};