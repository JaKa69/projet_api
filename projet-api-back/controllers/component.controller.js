const componentService = require("../services/component.service.js");

module.exports.getAll = async (req, res) => {
  const filters = {};
  if (req.query.category) filters.category = req.query.category;
  if (req.query.brand) filters.brand = req.query.brand;

  res.json(await componentService.getAll(filters));
};

module.exports.getById = async (req, res) => {
  res.json(await componentService.getById(req.params.id));
};

module.exports.create = async (req, res) => {
  res.status(201).json(await componentService.create(req.body));
};

module.exports.update = async (req, res) => {
  res.json(await componentService.update(req.params.id, req.body));
};

module.exports.remove = async (req, res) => {
  await componentService.remove(req.params.id);
  res.status(204).end();
};
