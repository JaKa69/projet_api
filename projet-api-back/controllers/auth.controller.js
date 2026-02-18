const userAuthService = require("../services/auth.service");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userAuthService.getUser({ email });
    if (!user) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION || "1d" }
    );

    res.status(200).json({ token });

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.register = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const existingUser = await userAuthService.getUser({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await userAuthService.createUser({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      role: user.role
    });

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
