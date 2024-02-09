import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Container,
  CssBaseline,
  TextField,
  Slide,
  Button,
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { editUser } from "../../redux/slices/userSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProfileForm({ open, setOpen }) {
  const user = useSelector((state)=>state);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [profession, setProfession] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let id = "65c08e6bb2256cd224a334cc";
    dispatch(editUser({id,firstName, lastName, username, dateOfBirth, profession}))
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Profile
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >

              <TextField
                margin="normal"
                fullWidth
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              {/* Display profession */}
              <TextField
                margin="normal"
                fullWidth
                label="Profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              {/* Display date of birth */}
              <TextField
                margin="normal"
                fullWidth
                label="Date of Birth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}
