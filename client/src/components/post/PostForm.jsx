import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageIcon from "@mui/icons-material/Image";
import UploadIcon from "@mui/icons-material/Upload";
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { createPost } from "../../redux/slices/postSlice";

export default function PostForm() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [type, setType] = useState("post");
  const [img, setImg] = useState(null); // Fix: Initialize img state as null
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(createPost({ user: user._id, content, image: img }));
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        minWidth: 350,
        padding: 2,
        borderRadius: 4,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <FormControl component="fieldset">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={type}
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              value="story"
              control={<Radio color="primary" />}
              label="Story"
            />
            <FormControlLabel
              value="post"
              control={<Radio color="primary" />}
              label="Post"
            />
          </Box>
        </RadioGroup>
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: 2 }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Content"
          variant="outlined"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </FormControl>
      <Box>
        <label htmlFor="image">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="image"
            style={{ display: "none" }}
          />
          <IconButton
            color="primary"
            component="span"
            sx={{ marginTop: 2, fontSize: "70px" }}
          >
            <ImageIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </label>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button
          color="primary"
          component="span"
          variant="contained"
          sx={{ marginTop: 2 }}
          onClick={handleSubmit}
          disabled={!content.trim() || !img}
        >
          <UploadIcon />
        </Button>
      </Box>
    </Box>
  );
}
