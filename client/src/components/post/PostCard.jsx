import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const PostCard = () => {
  return (
    <Card sx={{ width: "60%", minWidth:"350px", minHeight:"500px" }}>
      <CardContent sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <Avatar sx={{height:"60px", width:"60px"}}>A</Avatar>
        <Container>
          <Typography sx={{fontWeight:"bold", fontSize:"1.2rem"}}>John Doe</Typography>
          <Typography variant="body2" sx={{color:"gray"}}>100K followers</Typography>
        </Container>
        <IconButton>
        <AddCircleIcon color="success" sx={{fontSize:"2rem"}}/>
        </IconButton>
      </CardContent>
      <CardContent>
        <Typography variant="body1" mb={1} mt={-2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla justo ut metus vehicula, vitae fringilla odio fermentum.
        </Typography>
        <CardMedia
          component="img"
          height="50%"
          sx={{objectFit:"cover", borderRadius:2}}
          image="https://plus.unsplash.com/premium_photo-1665657351435-96c58da04fd1?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Post Image"
        />
      </CardContent>
      <CardContent sx={{mt:-2}}>
        <IconButton  aria-label="like">
          <FavoriteIcon sx={{color:"#ff4081"}}/>
        </IconButton>
        <IconButton color="primary"   aria-label="comment">
          <CommentOutlinedIcon />
        </IconButton>
        <IconButton color="primary" aria-label="save">
          <BookmarkBorderIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default PostCard;
