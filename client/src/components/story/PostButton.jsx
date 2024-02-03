import React, { useState } from "react";
import { Avatar, Stack,IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreatePost from "../post/CreatePost";

const PostButton = () => {

  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={()=>setOpen(!open)}>
      <Avatar sx={{ width: "70px", height: "70px" }}>
        <AddIcon />
      </Avatar>
      </IconButton>
      <CreatePost open={open} setOpen={setOpen}/>
    </div>
  );
};

export default PostButton;
