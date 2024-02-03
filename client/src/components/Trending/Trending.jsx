import { Paper, Box } from "@mui/material";
import React from "react";
import Navbar from "../navigation/Navbar";
import AdCard from "../AddCard";

const Trending = () => {
  return (
    <Paper sx={{ height: "100vh" }}>
      <Navbar />
      <Box sx={{m:1,mt:2}}>
      <AdCard
        imageUrl="https://images.samsung.com/in/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-kv.jpg?imbypass=true"
        text="Check out our latest products!"
        isSponsored={true}
      />
      </Box>
    </Paper>
  );
};

export default Trending;
