import Grid from '@mui/material/Grid'; 
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Box } from "@mui/material";
import Profile from '../components/profile/Profile';
import Posts from '../components/post/Posts';
import Trending from '../components/Trending/Trending';

const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {isDesktop && (
          <>
            <Grid item xs>
              <Profile />
            </Grid>
            <Grid item xs={6}>
              <Posts />
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
              <Posts />
            </Grid>
          </>
        )}
        {!isDesktop && !isMedium && (
          <Grid item xs={12}>
            <Posts />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Home;
