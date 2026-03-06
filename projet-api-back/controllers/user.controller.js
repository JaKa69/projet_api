const userService = require("../services/user.service");

module.exports = {
  findAll: async (req, res) => {
    try {
      const users = await userService.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: "Server error while fetching users" });
    }
  },

  getById: async (req, res) => {
    try {
      const user = await userService.getById(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: "Server error while fetching user" });
    }
  },

  create: async (req, res) => {
    try {
      const newUser = await userService.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ message: "Server error while creating user" });
    }
  },

  update: async (req, res) => {
    try {
      const updatedUser = await userService.update(req.params.id, req.body);
      if (!updatedUser) return res.status(404).json({ message: "User not found" });
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: "Server error while updating user" });
    }
  },

  delete: async (req, res) => {
    try {
      const deletedUser = await userService.delete(req.params.id);
      if (!deletedUser) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Server error while deleting user" });
    }
  },
};