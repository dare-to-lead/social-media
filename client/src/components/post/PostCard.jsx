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
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const PostCard = ({post}) => {
  console.log(post.user)
  return (
    <Card sx={{ width: "60%", minWidth: "350px"}}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar sx={{ height: "60px", width: "60px" }} src={post.user.profilePicture}/>
          <Container>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {post.user.firstName} {post.user.lastName}
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {post.user.followers.length} followers
            </Typography>
          </Container>
          <IconButton>
            <AddCircleIcon color="success" sx={{ fontSize: "2rem" }} />
          </IconButton>
        </CardContent>
      <CardContent>
        <Typography variant="body1" mb={1} mt={-2}>
         {post.content}
        </Typography>
        <CardMedia
          component="img"
          height="50%"
          sx={{ objectFit: "cover", borderRadius: 2 }}
          image={post.image}
          alt="Post Image"
        />
      </CardContent>
      <CardContent sx={{ mt: -2 }}>
        <IconButton aria-label="like">
          <FavoriteIcon sx={{ color: "#ff4081" }} />
        </IconButton>
        <IconButton color="primary" aria-label="comment">
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
