import React from "react";
import {
  Box,
  Avatar,
  CardContent,
  Container,
  IconButton,
  Typography,
  Card,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  marginBottom: 8,
  borderRadius: 8,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const FollowRequests = () => {
  return (
    <Container sx={{ maxHeight: "calc(100vh - 520px)", overflowY: "scroll" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {[1, 2, 3, 4, 5, 5, 3, 3, 3, 3, 6].map((f, i) => (
          <StyledCard key={i}>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "#f4f4fd",
                padding: 2,
                maxHeight: "30px",
              }}
            >
              <Avatar sx={{ height: "40px", width: "40px" }}>A</Avatar>
              <Container>
                <Typography sx={{ fontWeight: "bold" }}>John Doe</Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  100K followers
                </Typography>
              </Container>
              <IconButton>
                <AddCircleIcon color="success" />
              </IconButton>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Container>
  );
};

export default FollowRequests;
