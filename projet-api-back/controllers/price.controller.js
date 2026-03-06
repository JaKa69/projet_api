const priceService = require("../services/price.service.js");

module.exports.getByComponent = async (req, res) => {
  try {
    const prices = await priceService.getByComponent(req.params.componentId);
    res.json(prices);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.create = async (req, res) => {
  try {
    const price = await priceService.create(req.body);
    res.status(201).json(price);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.update = async (req, res) => {
  try {
    const price = await priceService.update(req.params.id, req.body);
    res.json(price);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.remove = async (req, res) => {
  try {
    await priceService.remove(req.params.id);
    res.status(204).end();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};