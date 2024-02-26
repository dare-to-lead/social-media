import React from "react";
import SideBar from "../components/dashboard/SideBar";
import BasicLineChart from "../components/dashboard/Charts";
import { Box } from "@mui/material";
import InfoCards from "../components/dashboard/InfoCards";

const DashboardHome = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#098653",
      }}>
      <SideBar />
      <Box sx={{ display: "flex" }}>
        <BasicLineChart />
        <InfoCards />
      </Box>
    </Box>
  );
};

export default DashboardHome;
