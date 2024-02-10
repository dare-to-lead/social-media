import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slices/postSlice";
import LoadingBar from "../errors/LoadingBar";

const PostList = () => {
  const allPosts = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.post.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <>
      {status === "loading" ? (
        <LoadingBar />
      ) : (
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems="center"
          width="100%"
          sx={{
            pt: 3,
          }}
        >
          {allPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </Stack>
      )}
    </>
  );
};

export default PostList;
