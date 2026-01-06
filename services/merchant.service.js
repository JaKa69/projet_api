const Merchant = require("../models/Merchant.js");

module.exports.getAll = () => Merchant.find();

module.exports.getById = (id) => Merchant.findById(id);

module.exports.create = (data) => Merchant.create(data);

module.exports.update = (id, data) =>
  Merchant.findByIdAndUpdate(id, data, { new: true });

module.exports.remove = (id) =>
  Merchant.findByIdAndDelete(id);
