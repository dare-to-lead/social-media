import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
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
    },
    role: {
      type: String,
      default: "user",
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
    token: [{ type: String }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
