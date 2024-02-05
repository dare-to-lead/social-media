import React from "react";
import { Card, Container, Stack, Typography, Avatar } from "@mui/material";
const userData = {
  profileImage:
    "https://images.hdqwalls.com/download/girl-scifi-mask-4k-t0-3840x2400.jpg",
  coverImage:
    "https://images.hdqwalls.com/wallpapers/bthumb/samsung-galaxy-s9-zk.jpg",
  firstName: "John",
  lastName: "Doe",
  username: "johnl123",
  joinedDate: "2022-01-15",
  dateOfBirth: "1995-08-10",
};

const ProfileCard = () => {
  const {
    profileImage,
    coverImage,
    firstName,
    lastName,
    username,
    joinedDate,
    dateOfBirth,
  } = userData;
  return (
    <Stack spacing={2}>
      <Card sx={{ px: 0, py: 3, bgcolor: "#f4f4fd"}}>
        <Container sx={{ position: "relative", width: "100%" }}>
          <img
            src={coverImage}
            alt=""
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
          <Avatar
            src={profileImage}
            alt=""
            sx={{
              position: "absolute",
              bottom: "-40px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "90px",
              height: "90px",
              border: "3px solid #fff",
              backgroundColor: "#fff",
            }}
          />
        </Container>
        <Typography
          align="center"
          variant="h5"
          sx={{ fontWeight: "bold", color: "#1848f8", mt: 5 }}
        >
          {firstName} {lastName}
        </Typography>
        <Typography align="center" sx={{ color: "gray", fontSize: "14px" }}>
          {username}
        </Typography>
        <Container
          sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}
        >
          <div>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              3400
            </Typography>
            <Typography sx={{ color: "gray", textAlign: "center" }}>
              Followers
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              3400
            </Typography>
            <Typography sx={{ color: "gray", textAlign: "center" }}>
              Following
            </Typography>
          </div>
        </Container>
        <hr style={{ color: "gray" }} />
        <Container sx={{ mt: 2 }}>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Profession:</span> Artist
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Date of Birth:</span>{" "}
            {dateOfBirth}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Joined On:</span> {joinedDate}
          </Typography>
        </Container>
      </Card>
    </Stack>
  );
};

export default ProfileCard;
