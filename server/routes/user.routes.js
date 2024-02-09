import express from "express";
import {
  deleteUser,
  editProfilePicture,
  editUser,
  getAllusers,
  getUser,
} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/allUsers", getAllusers);
userRouter.get("/", getUser);
userRouter.put("/:id", editUser);
userRouter.put("/profile/:id", editProfilePicture);
userRouter.put("/cover/:id", editProfilePicture);
userRouter.delete("/:id", deleteUser);

export default userRouter;
