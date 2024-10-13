import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Avatar,
  Link,
} from "@mui/material";
import { useStore } from "../store/StoreContext";
import { Link as RouterLink } from "react-router-dom";

const PreviewPage = () => {
  const { profile, links } = useStore();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Box sx={{ bgcolor: "primary.main", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="sm">
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Avatar
              src={profile.profilePicture}
              sx={{ width: 96, height: 96, mx: "auto", mb: 2 }}
            />
            <Typography variant="h5" gutterBottom>
              {profile.firstName} {profile.lastName}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {profile.email}
            </Typography>
            {links.map((link) => (
              <Button
                key={link.id}
                variant="contained"
                fullWidth
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mb: 1, textTransform: "capitalize" }}
              >
                {link.platform}
              </Button>
            ))}
          </CardContent>
        </Card>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="secondary"
          >
            Back to Editor
          </Button>
          <Button variant="contained" onClick={copyToClipboard}>
            {copied ? "Copied!" : "Share Link"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PreviewPage;
