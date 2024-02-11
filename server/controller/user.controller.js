import User from "../model/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {}
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {}
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, username, dateOfBirth, profession } = req.body;
    console.log("params: ", req.params);
    console.log("body: ", req.body);
    const updatedUser = await User.findById(id);
    console.log(updatedUser);
    updatedUser.firstName = firstName;
    updatedUser.lastName = lastName;
    updatedUser.username = username;
    updatedUser.dateOfBirth = dateOfBirth;
    updatedUser.profession = profession;
    await updatedUser.save();
    res.json(updatedUser);
  } catch (error) {}
};

const editProfilePicture = async (req, res) => {
  try {
    const { path } = req.file;
    const { id } = req.params;
    const cloudinaryResponse = await uploadOnCloudinary(path);
    // console.log(cloudinaryResponse)
    const editedUser = await User.findById(id);
    editedUser.profilePicture = cloudinaryResponse.secure_url;
    await editedUser.save();
    res.status(201).json(editedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const editCoverPicture = async (req, res) => {
  try {
  } catch (error) {}
};

const deleteUser = async (req, res) => {
  try {
  } catch (error) {}
};


export {
  getAllusers,
  getUser,
  editUser,
  editProfilePicture,
  editCoverPicture,
  deleteUser,
};
