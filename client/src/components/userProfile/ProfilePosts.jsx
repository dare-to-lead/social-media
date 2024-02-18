import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const ProfilePosts = () => {
  const user =
    useSelector((state) => state.user.user) ||
    JSON.parse(localStorage.getItem("userData"));
  const [posts, setPosts] = useState([]);

  const getUserPosts = async (req, res) => {
    const userId = user._id;
    const { data } = await axios.get(
      `http://localhost:8080/api/post/user/${userId}`
    );
    setPosts(data);
  };

  useEffect(() => {
    getUserPosts();
  });
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {posts.map((p, i) => (
        <Box key={i} sx={{ position: "relative" }}>
          <IconButton
          color="secondary"
            sx={{
              position: "absolute"
            }}
          >
            <DeleteIcon />
          </IconButton>
          <img
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "3px",
              objectFit: "cover",
            }}
            src={p.image}
            alt=""
          />
        </Box>
      ))}
    </div>
  );
};

export default ProfilePosts;
