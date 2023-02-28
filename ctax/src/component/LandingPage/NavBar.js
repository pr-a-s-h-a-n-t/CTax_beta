import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  Avatar,
  Tooltip,
  AppBar,
  MenuItem,
  Button,
  Box,
  Toolbar,
  Collapse,
  Container,
  Menu,
  Typography,
  styled,
  IconButton,
  Grid,
} from "@mui/material";
import { height } from "@mui/system";
import "./NavBar.css";
const pages = [
  "Business Registration",
  "Consultation",
  "Compliance",
  "Trademark",
  "Tax",
  "GST",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// ------Mui exapand icon start ------
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// ------Mui exapand icon end ------

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // ---------- services collapse start ----------------

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // ---------- services collapse end ----------------

  return (
    <AppBar
      sx={{
        backgroundColor: " white",
        color: "black",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            id="logo"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,

              color: "inherit",
              textDecoration: "none",
              fontSize: "40px",
            }}
          >
            CTax
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "red",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      color: "red",
                    }}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "1.12rem",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
                <div>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </div>
                <Grid
                  container
                  sx={{
                    position: "absolute",
                    // zIndex:"-1",
                    top: "5rem",
                    left: "9rem",
                    backgroundColor: "#fff",
                    width: "260px",
                    display: "flex",
                    flexDirection: "column",
                    border: "0 0 1rem 0 solid",
                    // borderRadius: '1rem',
                  }}
                >
                  {page === "Business Registration" ? (
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <ul className="footer_quick_links_wrapper">
                        <li>Private Limited Company</li>
                        <li>Limited Liability Partnership</li>
                        <li>One Person Company</li>
                        <li>Proprietorship Firm</li>
                        <li>TRADEMARK & COPYRIGHT</li>
                        <li>Partnership Firm</li>
                        <li>LLP (Limited Liablity partnership)</li>
                      </ul>
                    </Collapse>
                  ) : page === "Consultation" ? (
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <ul className="footer_quick_links_wrapper">
                        <li>Private Limited Company</li>
                        <li>Limited Liability Partnership</li>
                        <li>One Person Company</li>
                        <li>Proprietorship Firm</li>
                        <li>TRADEMARK & COPYRIGHT</li>
                        <li>Partnership Firm</li>
                        <li>LLP (Limited Liablity partnership)</li>
                      </ul>
                    </Collapse>
                   
                  
                  ) : (
                    ""
                  )}
                </Grid>
              </div>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;


// testing again
// testing again
