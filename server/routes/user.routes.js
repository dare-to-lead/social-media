import express from "express";
import {
  getUser,
  login,
  signup,
  verifyToken,
} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/profile", verifyToken, getUser);

export default userRouter;
