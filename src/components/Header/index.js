import * as React from "react";
import "./Wireframe.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import { Button, createTheme } from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../assets/header/Sample Logo.png";


const pages = ["Features", "Pricing", "Community", "Support"];

function Header() {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ background: "white" }}>
          <Box sx={{ paddingInline: "50px" }}>
            <img src={logo}></img>
          </Box>
          <Box>
            <Stack direction="row" spacing={9}>
              <Typography className="headerIcons">Features</Typography>
              <Typography className="headerIcons">Pricing</Typography>
              <Typography className="headerIcons">Community</Typography>
              <Typography className="headerIcons">Support</Typography>
            </Stack>
          </Box>
          <Box sx={{ position: "absolute", right: "0px" }}>
            <Button
              variant="outlined"
              sx={{
                marginInline: "20px",
                paddingInline: "30px",
                color: "#fff",
              }}
            >
              <Typography sx={{ color: "#18A0FB" }}>Login</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{ marginRight: "30px", paddingInline: "10px", color: "#fff" }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      
    </>
  );
}

export default Header;
