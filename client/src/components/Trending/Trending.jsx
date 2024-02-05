import { Paper, Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../navigation/Navbar";
import AdCard from "../AddCard";
import TrendingTags from "./TrendingTags";
import ProjectSlider from "./ProjectSlider";
import SocialContact from "./SocialContact";

const Trending = () => {
  const trendingTags = [
    "React",
    "MaterialUI",
    "WebDevelopment",
    "JavaScript",
    "Coding",
  ];
  return (
    <Paper sx={{ height: "100vh", position: "relative" }}>
      <Navbar />
      <Box sx={{ m: 1, mt: 2 }}>
        <AdCard
          imageUrl="https://images.samsung.com/in/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-kv.jpg?imbypass=true"
          text="Check out our latest products!"
          isSponsored={true}
        />
        <TrendingTags tags={trendingTags} />
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mt: 1,
              mb: -2,
              textAlign: "center",
              color: "#1876D1",
            }}>
            Other Projects
          </Typography>
          <ProjectSlider />
        </Box>
      </Box>
      <SocialContact />
    </Paper>
  );
};

export default Trending;
