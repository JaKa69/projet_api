import * as componentService from "../services/component.service.js";

export const getAll = async (req, res) => {
  const filters = {};
  if (req.query.category) filters.category = req.query.category;
  if (req.query.brand) filters.brand = req.query.brand;

  res.json(await componentService.getAll(filters));
};

export const getById = async (req, res) => {
  res.json(await componentService.getById(req.params.id));
};

export const create = async (req, res) => {
  res.status(201).json(await componentService.create(req.body));
};

export const update = async (req, res) => {
  res.json(await componentService.update(req.params.id, req.body));
};

export const remove = async (req, res) => {
  await componentService.remove(req.params.id);
  res.status(204).end();
};
