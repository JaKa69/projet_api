const merchantService = require("../services/merchant.service.js");

module.exports.getAll = async (req, res) => {
  res.json(await merchantService.getAll());
};

module.exports.getById = async (req, res) => {
  res.json(await merchantService.getById(req.params.id));
};

module.exports.create = async (req, res) => {
  res.status(201).json(await merchantService.create(req.body));
};

module.exports.update = async (req, res) => {
  res.json(await merchantService.update(req.params.id, req.body));
};

module.exports.remove = async (req, res) => {
  await merchantService.remove(req.params.id);
  res.status(204).end();
};
