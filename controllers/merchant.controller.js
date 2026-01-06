import * as merchantService from "../services/merchant.service.js";

export const getAll = async (req, res) => {
  res.json(await merchantService.getAll());
};

export const getById = async (req, res) => {
  res.json(await merchantService.getById(req.params.id));
};

export const create = async (req, res) => {
  res.status(201).json(await merchantService.create(req.body));
};

export const update = async (req, res) => {
  res.json(await merchantService.update(req.params.id, req.body));
};

export const remove = async (req, res) => {
  await merchantService.remove(req.params.id);
  res.status(204).end();
};
