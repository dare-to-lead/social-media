import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Button, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

const UserTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  console.log("users", users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/user/allUsers");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = () => {
    console.log("Edit user:");
  };

  const handleDelete = async () => {
    console.log("delete user");
  };

  const columns = [
    { field: "createdAt", headerName: "JOINED AT", flex: 1 },
    {
      field: "username",
      headerName: "USERNAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    { field: "email", headerName: "EMAIL", flex: 1 },
    {
      field: "role",
      headerName: "ROLE",
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === "admin"
                ? colors.greenAccent[500]
                : colors.greenAccent[700]
            }
            borderRadius="4px">
            {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {role === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}>
        <DataGrid
          checkboxSelection
          rows={users}
          columns={columns}
          getRowId={() => Math.random()}
          loading={true}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </Box>
  );
};

export default UserTable;
