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

module.exports.getById = (id) =>
  Configuration.findById(id)
    .populate("components.component")
    .populate("components.price");

module.exports.create = async (userId, data) => {
  const totalPrice = await calculateTotal(data.components);

  return Configuration.create({
    user: userId,
    name: data.name,
    components: data.components,
    totalPrice
  });
};

module.exports.addComponent = async (configId, componentData) => {
  const config = await Configuration.findById(configId);
  config.components.push(componentData);
  config.totalPrice = await calculateTotal(config.components);
  return config.save();
};

module.exports.removeComponent = async (configId, componentId) => {
  const config = await Configuration.findById(configId);

  config.components = config.components.filter(
    (c) => c.component.toString() !== componentId
  );

  config.totalPrice = await calculateTotal(config.components);
  return config.save();
};

module.exports.remove = (id) =>
  Configuration.findByIdAndDelete(id);
