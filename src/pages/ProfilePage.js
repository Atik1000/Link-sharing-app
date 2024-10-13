import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { useStore } from "../store/StoreContext";

const ProfilePage = () => {
  const { profile, updateProfile } = useStore();
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);

  useEffect(() => {
    setFirstName(profile.firstName);
    setLastName(profile.lastName);
    setEmail(profile.email);
  }, [profile]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfile({ profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ firstName, lastName, email });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Profile Details
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Add your details to create a personal touch to your profile.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <Avatar
            src={profile.profilePicture}
            sx={{ width: 96, height: 96, mr: 2 }}
          />
          <Button variant="contained" component="label">
            Change Image
            <input
              type="file"
              hidden
              onChange={handleImageUpload}
              accept="image/*"
            />
          </Button>
        </Box>
        <TextField
          fullWidth
          label="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default ProfilePage;
