const User = require("../models/User");

module.exports.getUser = async (query) => {
  return await User.findOne(query);
};

module.exports.createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};
