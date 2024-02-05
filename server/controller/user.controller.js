import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({ message: "User not found. Signup please" });
    }
    const isPasswordCorrect = bcrypt.compareSync(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid email / password" });
    }
    const token = jwt.sign({ id: existingUser._id }, JWT_SECRET_KEY, {
      expiresIn: "30s",
    });
    res.cookie(String(existingUser._id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 30), //30 seconds
      httpOnly: true,
      sameSite: "lax",
    });
    console.log("Token:", token);
    console.log("Cookie:", res.getHeaders()["set-cookie"]);
    return res
      .status(200)
      .json({ message: "Successfully logged in", user: existingUser, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[2];
  console.log(token);
  if (!token) {
    return res.status(404).json({ message: "No token found" });
  }
  jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Invalid Token" });
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};

const getUser = async (req, res) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
export { signup, login, verifyToken, getUser };
