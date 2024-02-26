import express from "express";
import {
  login,
  logout,
  // refreshToken,
  signup,
  verifyToken,
} from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", verifyToken, logout);

export default authRouter;
