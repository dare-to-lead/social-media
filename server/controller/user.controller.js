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

const login = async (req, res) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    return new Error(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found. Signup please" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid email / password" });
  }
  const token = jwt.sign({ id: existingUser._id }, JWT_SECRET_KEY, {
    expiresIn: "35s",
  });

  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30), //30 seconds
    httpOnly: true,
    sameSite: "lax",
  });
  // // console.log("Token:", token);
  // // console.log("Cookie:", res.getHeaders()["set-cookie"]);
  return res
    .status(200)
    .json({ message: "Successfully logged in", user: existingUser, token });
};

const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  console.log("cookies",cookies)
  if (!cookies) {
    return res.status(404).json({ message: "No cookies found" });
  }
  const token = cookies.split("=")[1];
  console.log("verify", token);
  if (!token) {
    return res.status(404).json({ message: "No token found" });
  }
  jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Token has expired. Please log in again." });
      } else {
        return res.status(400).json({ message: "Invalid Token" });
      }
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};

const getUser = async (req, res) => {
  const userId = req.id;
  console.log(userId);
  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (error) {
    return new Error(err);
  }
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ user });
};


const refreshToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  console.log("cookies",cookies)
  const prevToken = cookies.split("=")[1];
// const refreshToken = (req, res, next) => {
//   const cookies = req.headers.cookie;
//   const prevToken = cookies.split("=")[2];

//   if (!prevToken) {
//     return res.status(400).json({ message: "Couldn't find token" });
//   }
//   jwt.verify(String(prevToken), JWT_SECRET_KEY, (err, user) => {
//     if (err) {
//       console.log(err);
//       return res.status(403).json({ message: "Authentication failed" });
//     }
//     res.clearCookie(`${user.id}`);
//     req.cookies[`${user.id}`] = "";

//     const token = jwt.sign({ id: user.id }, JWT_SECRET_KEY, {
//       expiresIn: "35s",
//     });

//     console.log("regenrated token\n", token);


    res.cookie(String(user.id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 30), //35 seconds
      httpOnly: true,
      sameSite: "lax",
    });
    req.id = user.id;
    next();
  });
};
export { signup, login, verifyToken, getUser, refreshToken };

//     res.cookie(String(user.id), token, {
//       path: "/",
//       expires: new Date(Date.now() + 1000 * 30), //30 seconds
//       httpOnly: true,
//       sameSite: "lax",
//     });
//     req.id = user.id;
//     next();
//   });
// };
export { signup, login, verifyToken, getUser };
