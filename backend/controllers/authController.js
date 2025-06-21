import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { JWT_SECRET } from "../constants.js";

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const registerUser = async (req, res) => {
  const { fullName, email, password, phone } = req.body;

  if (!fullName || !email || !password)
    return res.status(400).json({ error: "All fields are required." });

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: "Email already exists." });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ fullName, email, password: hashedPassword,phone });
  await user.save();

  const token = generateToken(user);
  res.status(201).json({ token });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid credentials." });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials." });

  const token = generateToken(user);
  res.json({ token });
};
