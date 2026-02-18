const Configuration = require("../models/Configuration.js");
const Price = require("../models/Price.js");

const calculateTotal = async (components) => {
  let total = 0;

  for (const item of components) {
    const price = await Price.findById(item.price);
    if (price) total += price.price;
  }

  return total;
};

module.exports.getByUser = (userId) =>
  Configuration.find({ user: userId })
    .populate("components.component")
    .populate("components.price");

module.exports.getById = async (id, user) => {
  const config = await Configuration.findById(id)
    .populate("components.component")
    .populate("components.price");

  checkOwnership(config, user);

  return config;
};

module.exports.create = async (userId, data) => {
  const totalPrice = await calculateTotal(data.components);

  return Configuration.create({
    user: userId,
    name: data.name,
    components: data.components,
    totalPrice
  });
};

module.exports.addComponent = async (configId, componentData, user) => {
  const config = await Configuration.findById(configId);

  checkOwnership(config, user);

  config.components.push(componentData);
  config.totalPrice = await calculateTotal(config.components);

  return config.save();
};


module.exports.removeComponent = async (configId, componentId, user) => {
  const config = await Configuration.findById(configId);

  checkOwnership(config, user);

  config.components = config.components.filter(
    (c) => c.component.toString() !== componentId
  );

  config.totalPrice = await calculateTotal(config.components);

  return config.save();
};

module.exports.remove = async (id, user) => {
  const config = await Configuration.findById(id);

  checkOwnership(config, user);

  return Configuration.findByIdAndDelete(id);
};

const checkOwnership = (config, user) => {
  if (!config) throw new Error("Configuration introuvable");

  if (config.user.toString() !== user.id && user.role !== "admin") {
    throw new Error("Accès non autorisé");
  }
};
