import { Paper, Grid } from "@mui/material";
import React from "react";
import StoryList from "../story/StoryList";
import PostList from "./PostList";

const Posts = () => {
  return (
    <Paper>
      <Grid container spacing={0} direction="column">
        <Grid item xs={4} sx={{ width: "100%", position: "relative" }}>
        <StoryList />
        </Grid>
        <Grid item xs={8}>
          <div style={{ pt: 3, height: "calc(100vh - 102px)", overflowY: "scroll", bgcolor: "blue" }}>
          <PostList />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Posts;
