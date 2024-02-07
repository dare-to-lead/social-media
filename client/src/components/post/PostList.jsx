import React from "react";
import PostCard from "./PostCard";
import { Stack } from "@mui/material";

const PostList = () => {
  return (
    <Stack
      spacing={3}
      justifyContent="center"
      alignItems="center"
      width="100%"
      sx={{
        pt: 3
      }}
    >
      {[1, 2, 3, 4, 3, 3, 33, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 33].map(
        (p, i) => (
          <PostCard key={i}/>
        )
      )}
    </Stack>
  );
};

export default PostList;
