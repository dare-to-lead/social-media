import {
  Paper,
  Avatar,
  Container,
  Box,
  IconButton,
  Typography,
  Divider
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ProfilePosts from "./ProfilePosts";

const ProfileSection = () => {
  return (
    <Paper sx={{ height: "100vh" }}>
      <Box sx={{ position: "relative", width: "100%" }}>
        <img
          src="https://images.hdqwalls.com/wallpapers/bthumb/samsung-galaxy-s9-zk.jpg"
          alt=""
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
        />
        <Avatar
          src="https://images.hdqwalls.com/download/girl-scifi-mask-4k-t0-3840x2400.jpg"
          alt=""
          sx={{
            position: "absolute",
            bottom: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "120px",
            height: "120px",
            border: "3px solid #fff",
            backgroundColor: "#fff",
          }}
        />
        <IconButton
          sx={{
            position: "absolute",
            bottom: -15,
            right: 0,
            transform: "translateX(-50%)",
            bgcolor: "#2196F3",
            color: "white",
            ":hover": { bgcolor: "white", color: "#2196F3" },
          }}
        >
          <EditIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 5, display: "flex", pb:2}}>
        <Container sx={{ borderRight: "1.2px solid #1876D0" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color:"#1876D0" }}>
            Anjum Shaikh
          </Typography>
          <Typography>Full Stack Developer</Typography>
          <Typography>5 April 1996</Typography>
          <Typography>Joined on 23 Jan 2023</Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color:"#1876D0" }}>
              200K
            </Typography>
            <Typography sx={{ color: "gray" }}>Following</Typography>
          </Container>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color:"#1876D0" }}>
              2.3M
            </Typography>
            <Typography sx={{ color: "gray" }}>Followers</Typography>
          </Container>
        </Container>
      </Box>
      <Divider sx={{mx:3}}/>
      <Box sx={{pt:2, maxHeight:"calc(100vh - 340px)", overflow:"scroll"}}>
        <ProfilePosts/>
      </Box>
    </Paper>
  );
};

export default ProfileSection;
