import React from "react";
import { Card, Container, Stack, Typography, Avatar } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import useDate from "../../hooks/useDate";


const ProfileCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const dob = useDate(userData.dateOfBirth);
  const joinDate = useDate(useDate.createdAt);
  // console.log(userData.firstName)
  return (
    <Stack spacing={2}>
      <Card sx={{ px: 0, py: 3 }} backgroundcolor={colors.blueAccent[500]}>
        <Container sx={{ position: "relative", width: "100%" }}>
          <img
            src="https://images.hdqwalls.com/wallpapers/bthumb/samsung-galaxy-s9-zk.jpg"
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
            src="https://images.hdqwalls.com/download/girl-scifi-mask-4k-t0-3840x2400.jpg"
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
          sx={{ fontWeight: "bold", color: colors.blueAccent[500], mt: 6 }}
        >
          {userData.firstName} {userData.lastName}
        </Typography>
        <Typography align="center" sx={{ color: "gray", fontSize: "14px" }}>
          {userData.username}
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
              {userData.followers.length}
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
              {userData.following.length}
            </Typography>
            <Typography sx={{ color: "gray", textAlign: "center" }}>
              Following
            </Typography>
          </div>
        </Container>
        <hr style={{ color: "gray" }} />
        <Container sx={{ mt: 2 }}>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Profession:</span> {userData.profession}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Date of Birth:</span>
            {dob}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Joined On:</span> {joinDate}
          </Typography>
        </Container>
      </Card>
    </Stack>
  );
};

export default ProfileCard;
