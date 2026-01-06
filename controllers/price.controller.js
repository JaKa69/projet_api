const priceService = require("../services/price.service.js");

module.exports.getByComponent = async (req, res) => {
  res.json(await priceService.getByComponent(req.params.componentId));
};

module.exports.create = async (req, res) => {
  res.status(201).json(await priceService.create(req.body));
};

module.exports.update = async (req, res) => {
  res.json(await priceService.update(req.params.id, req.body));
};

module.exports.remove = async (req, res) => {
  await priceService.remove(req.params.id);
  res.status(204).end();
};
