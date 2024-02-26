import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Preview } from "@mui/icons-material";
import axios from "axios";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const UserActions = ({ id }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const deleteUser = async () => {
    const res = await axios.delete(`http://localhost:8080/api/user/${id}`);
    console.log("res", res);
  };

  return (
    <Box>
      <Tooltip title="View user details">
        <IconButton onClick={() => console.log(id)}>
          <Preview />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete this user">
        <IconButton onClick={deleteUser}>
          <Delete sx={{ color: colors.redAccent[500] }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default UserActions;
