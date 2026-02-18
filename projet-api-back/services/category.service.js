const Category = require("../models/Category.js");

module.exports.getAll = () => Category.find();
module.exports.create = (data) => Category.create(data);
module.exports.update = (id, data) =>
  Category.findByIdAndUpdate(id, data, { new: true });
module.exports.remove = (id) => Category.findByIdAndDelete(id);
