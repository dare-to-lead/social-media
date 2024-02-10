import React, { useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  Paper,
  Avatar,
  Container,
  Box,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ProfilePosts from "./ProfilePosts";
import ProfileForm from "./ProfileForm";
import { editUser } from "../../redux/slices/userSlice";
import useDate from "../../hooks/useDate";

const ProfileSection = () => {
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = React.useState(false);
  const dob = useDate(user?.dateOfBirth);
  const joinDate = useDate(user?.createdAt);
  const inputFileRef = useRef(null); // Ref for file input element
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(user)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditAvatar = () => {
    // Trigger file input click
    inputFileRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
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
          src={selectedImage ? URL.createObjectURL(file) : (user?.profilePicture || "https://randomuser.me/api/portraits/lego/1.jpg")}
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
            cursor: "pointer", // Add cursor pointer for avatar
          }}
          onClick={handleEditAvatar} // Call function to open file picker on avatar click
        />
        <input
          type="file"
          ref={inputFileRef} // Attach ref to input element
          style={{ display: "none" }} // Hide the input element
          accept="image/*" // Allow only image files
          onChange={handleImageChange} // Handle file selection
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
          onClick={handleClickOpen}
        >
          <EditIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 5, display: "flex", pb: 2 }}>
        <Container sx={{ borderRight: "1.2px solid #1876D0" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#1876D0" }}
          >
            {user?.firstName} {user?.lastName}
          </Typography>
          <Typography>{user?.profession}</Typography>
          <Typography>Date of Birth: {dob}</Typography>
          <Typography>Joined on {joinDate}</Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Container
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1876D0" }}
            >
              {user?.following.length}
            </Typography>
            <Typography sx={{ color: "gray" }}>Following</Typography>
          </Container>
          <Container
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1876D0" }}
            >
              {user?.followers.length}
            </Typography>
            <Typography sx={{ color: "gray" }}>Followers</Typography>
          </Container>
        </Container>
      </Box>
      <Divider sx={{ mx: 3 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#f4f4fd",
        }}
      >
        <Container sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <IconButton>
            <ImageIcon sx={{ height: "2rem", width: "2rem" }} color="primary" />
          </IconButton>
        </Container>

        <Container sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <IconButton>
            <VideocamIcon sx={{ height: "2rem", width: "2rem" }} />
          </IconButton>
        </Container>
      </Box>
      <Box sx={{ pt: 2, maxHeight: "calc(100vh - 400px)", overflow: "scroll" }}>
        <ProfilePosts />
      </Box>
      <ProfileForm open={open} setOpen={setOpen} />
    </Paper>
  );
};

export default ProfileSection;
