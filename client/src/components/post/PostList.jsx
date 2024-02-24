import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slices/postSlice";
import LoadingBar from "../errors/LoadingBar";
import BottomNavigation from "../navigation/BottomNavigation";
import { Paper, Grid, Box, useMediaQuery } from "@mui/material";

const PostList = () => {
  const allPosts = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.post.status);
  const [reload, setIsReload] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, reload]); // Include dispatch in the dependency array

  const toggleReload = () => setIsReload((prev) => !prev);
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
            <PostCard
              key={post._id}
              postData={post}
              toggleReload={toggleReload}
            />
          ))}
        </Stack>
      )}
      {!isDesktop  && (
        <Box sx={{ position: "sticky", bottom: 0, width: "100%" }}>
          <BottomNavigation />
        </Box>
      )}
    </>
  );
};

export default PostList;
