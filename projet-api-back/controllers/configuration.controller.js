const configService = require("../services/configuration.service.js");

module.exports.getMyConfigurations = async (req, res) => {
  try {
    const configs = await configService.getByUser(req.user.id);
    res.json(configs);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.getById = async (req, res) => {
  try {
    const config = await configService.getById(req.params.id, req.user);
    res.json(config);
  } catch (e) {
    res.status(403).json({ message: e.message });
  }
};

module.exports.create = async (req, res) => {
  try {
    const config = await configService.create(req.user.id, req.body);
    res.status(201).json(config);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.addComponent = async (req, res) => {
  try {
    const config = await configService.addComponent(
      req.params.id,
      req.body,
      req.user
    );

    res.json(config);
  } catch (e) {
    res.status(403).json({ message: e.message });
  }
};

module.exports.removeComponent = async (req, res) => {
  try {
    const config = await configService.removeComponent(
      req.params.id,
      req.params.componentId,
      req.user
    );

    res.json(config);
  } catch (e) {
    res.status(403).json({ message: e.message });
  }
};

module.exports.remove = async (req, res) => {
  try {
    await configService.remove(req.params.id, req.user);
    res.status(204).end();
  } catch (e) {
    res.status(403).json({ message: e.message });
  }
};