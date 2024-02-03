import * as React from "react";
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

export default function PostForm() {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
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
        />
      </FormControl>
      <Box>
        <label htmlFor="image">
          <input type="file" id="image" style={{ display: "none" }} />
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
        >
          <UploadIcon />
        </Button>
      </Box>
    </Box>
  );
}
