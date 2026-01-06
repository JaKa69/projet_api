import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return User.create({
    ...data,
    password: hashedPassword
  });
};

export const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Utilisateur introuvable");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Mot de passe incorrect");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { user, token };
};
