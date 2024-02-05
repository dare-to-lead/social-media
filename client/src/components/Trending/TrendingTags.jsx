import React from "react";
import { Box, Typography, Chip, Paper } from "@mui/material";

const TrendingTags = ({ tags }) => {
  return (
    <Paper sx={{ mt: 2, p: 1 }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold", color: "#1876D1" }}
      >
        Trending Tags
      </Typography>
      <Box
        sx={{ width: "100%", display: "flex", flexWrap: "wrap", p: 1, gap: 1 }}
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={`#${tag}`}
            color="primary"
            variant="outlined"
          />
        ))}
      </Box>
    </Paper>
  );
};

export default TrendingTags;
