import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  FormGroup,
  FormControlLabel,
  styled,
  Switch,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authActions } from "../../redux/slices/authSlice";
import MenuListComposition from "./Menu";
axios.defaults.withCredentials = true;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sendLogoutRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/logout",
        null,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        return response;
      }
      throw new Error("Unable to Logout. Please try again");
    } catch (error) {
      console.error("Logout Error:", error);
      throw error; // Rethrow the error for further handling
    }
  };

  const handleLogout = () => {
    sendLogoutRequest()
      .then(() => dispatch(authActions.logout()))
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Add your dark mode toggle logic here
  };

  const handleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen); // Toggle menu visibility
  };

  const handleCloseMenu = () => {
    setMenuOpen(false); // Close menu
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#f4f4fd" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img src={logo} alt="" style={{ width: "50px" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            />
          </FormGroup>
          {isLoggedIn && (
            <div>
              <Avatar
                alt="Profile Avatar"
                src="https://example.com/path-to-avatar.jpg"
                onClick={handleMenu}
              />
              {menuOpen && (
                <MenuListComposition
                  handleClose={handleCloseMenu}
                  handleLogout={handleLogout}
                />
              )}
            </div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
