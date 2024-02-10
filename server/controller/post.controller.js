import Post from "../model/post.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { path } = req.file;
    const cloudinaryResponse = await uploadOnCloudinary(path);
    // console.log(cloudinaryResponse)
    const newPost = new Post({
      user:req.body.user,
      image: cloudinaryResponse.secure_url,
      content:req.body.content,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message });
  }
};

const editPost = async (req, res) => {

};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getPosts, createPost, editPost, deletePost };
