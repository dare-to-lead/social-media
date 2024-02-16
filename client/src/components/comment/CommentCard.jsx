import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CommentCard = ({ comment }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
          p: 2,
          borderRadius: "5px",
          bgcolor: "black",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>
            {comment.user.username===userData.username?"You":comment.user.username}
          </Typography>
          <Typography>{comment.content}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FavoriteBorderIcon sx={{ fontSize: "1rem", cursor: "pointer" }} />
          <Typography sx={{ fontSize: "0.8rem", cursor: "pointer" }}>
            0
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CommentCard;
