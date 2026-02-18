const configService =require("../services/configuration.service.js");

module.exports.getMyConfigurations = async (req, res) => {
  res.json(await configService.getByUser(req.user.id));
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
  const config = await configService.create(req.user.id, req.body);
  res.status(201).json(config);
};

module.exports.addComponent = async (req, res) => {
  const config = await configService.addComponent(
    req.params.id,
    req.body
  );
  res.json(config);
};

module.exports.removeComponent = async (req, res) => {
  const config = await configService.removeComponent(
    req.params.id,
    req.params.componentId
  );
  res.json(config);
};

module.exports.remove = async (req, res) => {
  await configService.remove(req.params.id);
  res.status(204).end();
};
