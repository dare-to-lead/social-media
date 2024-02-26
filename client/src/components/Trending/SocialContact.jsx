import React from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const SocialContact = () => {
  const socialLinks = [
    { icon: <XIcon />, link: "https://twitter.com/example", color: "black" },
    { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/example", color: "#0A66C2" },
    { icon: <GitHubIcon />, link: "https://github.com/example", color: "#6e5494" },
    { icon: <EmailIcon />, link: "mailto:example@gmail.com", color: "#EA4335" },
  ];

  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
      {socialLinks.map((item, index) => (
        <Tooltip key={index} title={item.link} placement="top">
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            sx={{ color: item.color }}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialContact;
