import express from "express";
import { createPost, deletePost, editPost, getPosts } from "../controller/post.controller.js";
import upload from "../middleware/multer.middleware.js"
const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/", upload.single("image"), createPost);
postRouter.put("/:id", editPost);
postRouter.delete("/:id", deletePost);


export default postRouter;
