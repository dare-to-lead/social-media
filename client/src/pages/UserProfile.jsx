import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import Grid from '@mui/material/Grid'; 
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Box } from "@mui/material";
import Profile from '../components/profile/Profile';
import Posts from '../components/post/Posts';
import Trending from '../components/Trending/Trending';
import ProfileSection from "../components/userProfile/ProfileSection";


const UserProfile = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
  // const [user, setUser] = useState();

  // const sendRequest = async () => {
  //   const response = await axios
  //     .get("http://localhost:8080/api/profile", {
  //       withCredentials: true,
  //     })
  //     .catch((err) => console.log(err));
  //   const data = await response.data;

  //   return data;
  // };

  // useEffect(() => {
  //   sendRequest().then((data) => setUser(data.user));
  // }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {isDesktop && (
          <>
            <Grid item xs>
              <Profile />
            </Grid>
            <Grid item xs={6}>
              <ProfileSection />
            </Grid>
            <Grid item xs>
              <Trending />
            </Grid>
          </>
        )}
        {isMedium && (
          <>
            <Grid item xs={4}>
              <Profile />
            </Grid>
            <Grid item xs={8}>
              <ProfileSection />
            </Grid>
          </>
        )}
        {!isDesktop && !isMedium && (
          <Grid item xs={12}>
            <ProfileSection />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default UserProfile;
