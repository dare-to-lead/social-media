import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Card, CardContent } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

export default function BasicLineChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ p: 3 }}>
      <Card
        sx={{
          width: "80%",
          minWidth: "750px",
          height: "92vh",
          bgcolor: colors.primary[500],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <CardContent>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                label: "users",
              },
            ]}
            width={620}
            height={320}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
