const User = require("../models/User");
const mongoose = require("mongoose");

module.exports = {
  getUser: async (query) => {
    return await User.findOne(query);
  },

  findAll: async () => {
    return await User.find();
  },

  getById: async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;
    return await User.findById(id);
  },

  create: async (data) => {
    const user = new User(data);
    return await user.save();
  },

  update: async (id, data) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;
    return await User.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;
    return await User.findByIdAndDelete(id);
  },
};