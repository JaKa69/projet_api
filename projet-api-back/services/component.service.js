const Component = require("../models/Component.js");

module.exports.getAll = (filters) =>
  Component.find(filters).populate("category");

module.exports.getById = (id) =>
  Component.findById(id).populate("category");

module.exports.create = (data) => Component.create(data);

module.exports.update = (id, data) =>
  Component.findByIdAndUpdate(id, data, { new: true });

module.exports.remove = (id) =>
  Component.findByIdAndDelete(id);
