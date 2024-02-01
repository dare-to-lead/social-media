import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    password: {
      type: String,
      required: true,
    },
    cPassword: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    coverPicture: {
      type: String,
    },
    profession: {
      type: String,
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const userModel = mongoose.Model("User", userSchema);

export default userModel;
