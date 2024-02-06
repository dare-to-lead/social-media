import express from "express";
import {
  getUser,
  login,
  logout,
  // refreshToken,
  signup,
  verifyToken,
} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/user", verifyToken, getUser);
userRouter.post("/logout", verifyToken, logout);
// userRouter.get("/refresh", refreshToken, verifyToken, getUser);

export default userRouter;
