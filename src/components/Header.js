import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as MuiLink, IconButton } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <MuiLink
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <IconButton edge="start" color="primary" aria-label="logo">
            <LinkIcon />
          </IconButton>
          <Box
            component="span"
            sx={{ ml: 1, fontWeight: "bold", fontSize: "1.2rem" }}
          >
            devlinks
          </Box>
        </MuiLink>
        <Button
          component={RouterLink}
          to="/"
          startIcon={<LinkIcon />}
          color={location.pathname === "/" ? "primary" : "inherit"}
        >
          Links
        </Button>
        <Button
          component={RouterLink}
          to="/profile"
          startIcon={<PersonIcon />}
          color={location.pathname === "/profile" ? "primary" : "inherit"}
        >
          Profile Details
        </Button>
        <Button
          component={RouterLink}
          to="/preview"
          variant="outlined"
          startIcon={<VisibilityIcon />}
          sx={{ ml: 2 }}
        >
          Preview
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
