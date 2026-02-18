const userService = require("../services/user.service");

module.exports.findAll = async (req, res) => {
  res.json(await userService.findAll());
};
