import { Paper, Grid, useTheme, Box } from "@mui/material";
import React from "react";
import StoryList from "../story/StoryList";
import PostList from "./PostList";
import { tokens } from "../../theme";
import BottomNavigation from "../navigation/BottomNavigation";

const Posts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper sx={{ bgcolor: colors.grey[800], position: "relative" }}>
      <Grid container spacing={0} direction="column">
        <Grid item xs={4} sx={{ width: "100%", position: "relative" }}>
          <StoryList />
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              height: "calc(100vh - 102px)",
              overflowY: "scroll",
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              bgcolor: colors.grey[800],
            }}
          >
            <PostList />
          </Box>
          {/* <Grid item sx={{ position: "sticky", bottom: 0, width: "100%" }}>
            <BottomNavigation />
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Posts;
