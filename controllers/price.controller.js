import * as priceService from "../services/price.service.js";

export const getByComponent = async (req, res) => {
  res.json(await priceService.getByComponent(req.params.componentId));
};

export const create = async (req, res) => {
  res.status(201).json(await priceService.create(req.body));
};

export const update = async (req, res) => {
  res.json(await priceService.update(req.params.id, req.body));
};

export const remove = async (req, res) => {
  await priceService.remove(req.params.id);
  res.status(204).end();
};
