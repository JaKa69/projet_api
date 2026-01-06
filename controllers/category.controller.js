const categoryService =require("../services/category.service.js");

module.exports.getAll = async (req, res) => {
  res.json(await categoryService.getAll());
};

module.exports.create = async (req, res) => {
  res.status(201).json(await categoryService.create(req.body));
};

module.exports.update = async (req, res) => {
  res.json(await categoryService.update(req.params.id, req.body));
};

module.exports.remove = async (req, res) => {
  await categoryService.remove(req.params.id);
  res.status(204).end();
};
