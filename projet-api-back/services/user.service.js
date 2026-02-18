const User = require("../models/User");

module.exports.getUser = async (query) => {
  return await User.findOne(query);
};
module.exports.findAll = async () => {
  return await User.find();
};
