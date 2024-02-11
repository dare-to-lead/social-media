import { Paper, Grid, useTheme, Box } from "@mui/material";
import React from "react";
import StoryList from "../story/StoryList";
import PostList from "./PostList";
import { tokens } from "../../theme";

const Posts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper backgroundColor={colors.grey[800]}>
      <Grid container spacing={0} direction="column">
        <Grid item xs={4} sx={{ width: "100%", position: "relative" }}>
          <StoryList />
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              height: "calc(100vh - 102px)",
              overflowY: "scroll",
            }}
            backgroundColor={colors.grey[800]}>
            <PostList />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Posts;
