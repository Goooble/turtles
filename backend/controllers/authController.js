import bcrypt from "bcryptjs";
import { getDb } from "../db.js";
import jwt from "jsonwebtoken";

const SECRET = "supersecret";
function generateToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, SECRET, {
    expiresIn: "7d",
  });
}

export const signup = async (req, res) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const db = getDb();
  const usersCollection = db.collection("users");

  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ msg: "User already exists" });
  }

  const user = { email, password: hashed, createdAt: new Date() };
  const result = await usersCollection.insertOne(user);

  res.json({ msg: "User created", userId: result.insertedId });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const db = getDb();
  const usersCollection = db.collection("users");

  const user = await usersCollection.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ msg: "Wrong password" });

  const token = generateToken(user);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
  });

  res.json({ msg: "Logged in" });
};

export const dashboard = (req, res) => {
  res.json({ msg: "Welcome", user: req.user });
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "Logged out" });
};
