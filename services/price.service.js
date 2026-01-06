const Price = require("../models/Price.js");

module.exports.getByComponent = (componentId) =>
  Price.find({ component: componentId }).populate("merchant");

module.exports.create = (data) => Price.create(data);

module.exports.update = (id, data) =>
  Price.findByIdAndUpdate(id, data, { new: true });

module.exports.remove = (id) =>
  Price.findByIdAndDelete(id);
