import { Avatar, Stack, Box, Paper, IconButton } from "@mui/material";
import React from "react";
import PostButton from "./PostButton";

const StoryList = () => {
  return (
    <Paper elevation={0}>
      <Box
        sx={{
          bgcolor: "#f4f4fd",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Stack direction="row" spacing={2} p={1} overflow="scroll">
          <PostButton/>
          {[1, 2, 3, 4, 5, 6, 7, 8,3, 4, 5, 6, 7, 8].map((s, i) => (
            <IconButton key={i}>
            <Avatar sx={{ width: "70px", height: "70px"}} >
              H
            </Avatar>
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

export default StoryList;
