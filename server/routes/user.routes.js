import express from "express";
import {
  getUser,
  login,
  refreshToken,
  signup,
  verifyToken,
} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/profile", verifyToken, getUser);
userRouter.get("/refresh", refreshToken, verifyToken, getUser);

export default userRouter;
