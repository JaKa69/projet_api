import * as categoryService from "../services/category.service.js";

export const getAll = async (req, res) => {
  res.json(await categoryService.getAll());
};

export const create = async (req, res) => {
  res.status(201).json(await categoryService.create(req.body));
};

export const update = async (req, res) => {
  res.json(await categoryService.update(req.params.id, req.body));
};

export const remove = async (req, res) => {
  await categoryService.remove(req.params.id);
  res.status(204).end();
};
