import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const platforms = [
  { value: "github", label: "GitHub" },
  { value: "youtube", label: "YouTube" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "facebook", label: "Facebook" },
  { value: "twitter", label: "Twitter" },
];

const LinkForm = ({ link, updateLink, removeLink }) => {
  const [platform, setPlatform] = useState(link.platform);
  const [url, setUrl] = useState(link.url);

  useEffect(() => {
    setPlatform(link.platform);
    setUrl(link.url);
  }, [link]);

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
    updateLink(link.id, { platform: e.target.value });
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    updateLink(link.id, { url: e.target.value });
  };

  return (
    <Box sx={{ mb: 2, p: 2, bgcolor: "background.paper", borderRadius: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">Link #{link.id}</Typography>
        <IconButton onClick={() => removeLink(link.id)} color="error">
          <DeleteIcon />
        </IconButton>
      </Box>
      <TextField
        select
        fullWidth
        label="Platform"
        value={platform}
        onChange={handlePlatformChange}
        sx={{ mb: 2 }}
      >
        {platforms.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        label="Link"
        value={url}
        onChange={handleUrlChange}
        placeholder="e.g. https://www.github.com/johnappleseed"
      />
    </Box>
  );
};

export default LinkForm;
