import Post from "../model/post.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user').sort({createdAt:-1});
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPost = async(req, res)=>{
  try {
    const {postId} = req.params;
    const post = await Post.findById(postId).populate('user');
    // console.log("post", post)
    res.json(post);
  } catch (error) {
    
  }
}

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

export { getPost, getAllPosts, createPost, editPost, deletePost };
