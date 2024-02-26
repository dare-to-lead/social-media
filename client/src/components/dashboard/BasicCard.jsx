import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const BasicCard = ({ title, count }) => {
  return (
    <div>
      <Card
        sx={{
          height: "25vh",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}>
        <CardContent>
          <Typography>{title}</Typography>
          <Typography>{count}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BasicCard;
