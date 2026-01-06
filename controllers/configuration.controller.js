import * as configService from "../services/configuration.service.js";

export const getMyConfigurations = async (req, res) => {
  res.json(await configService.getByUser(req.user.id));
};

export const getById = async (req, res) => {
  res.json(await configService.getById(req.params.id));
};

export const create = async (req, res) => {
  const config = await configService.create(req.user.id, req.body);
  res.status(201).json(config);
};

export const addComponent = async (req, res) => {
  const config = await configService.addComponent(
    req.params.id,
    req.body
  );
  res.json(config);
};

export const removeComponent = async (req, res) => {
  const config = await configService.removeComponent(
    req.params.id,
    req.params.componentId
  );
  res.json(config);
};

export const remove = async (req, res) => {
  await configService.remove(req.params.id);
  res.status(204).end();
};
