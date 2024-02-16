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
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

export default function PostForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const user =
    useSelector((state) => state.user.user) ||
    JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const [type, setType] = useState("post");
  const [img, setImg] = useState(null);
  const [content, setContent] = useState("");
  //image

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
        bgcolor: colors.grey[900],
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
              control={
                <Radio
                  sx={{
                    color: colors.blueAccent[500], // Default color for unchecked state
                    "&.Mui-checked": {
                      color: colors.blueAccent[500], // Color for checked state
                    },
                  }}
                />
              }
              label="Story"
            />
            <FormControlLabel
              value="post"
              control={
                <Radio
                  sx={{
                    color: colors.blueAccent[500], // Default color for unchecked state
                    "&.Mui-checked": {
                      color: colors.blueAccent[500], // Color for checked state
                    },
                  }}
                />
              }
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
          sx={{
            color: colors.grey[900],
            outlineColor:colors.grey[900],
            borderColor:colors.grey[900],
            "::placeholder":{
              color:colors.grey[900]
            }
          }}
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
            component="span"
            sx={{ marginTop: 2, fontSize: "70px", color:colors.blueAccent[500] }}
          >
            <ImageIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </label>
      </Box>
      {img && (
        <img
          src={URL.createObjectURL(img)}
          alt=""
          style={{ width: "350px", maxHeight: "500px", borderRadius: "5px" }}
        />
      )}
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button
          component="span"
          variant="contained"
          sx={{ marginTop: 2,color:colors.blueAccent[500] }}
          onClick={handleSubmit}
          disabled={!content.trim() || !img}
        >
          <UploadIcon />
        </Button>
      </Box>
    </Box>
  );
}
