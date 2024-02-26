import React from "react";
import BasicCard from "./BasicCard";
import { Box } from "@mui/material";

const InfoCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        flex: 1,
        bgcolor: "#987562",
        margin: 3,
        maxWidth: "24vw",
      }}>
      <BasicCard title="users" count={20} />
      <BasicCard title="users" count={20} />
      <BasicCard title="users" count={20} />
    </Box>
  );
};

export default InfoCards;
