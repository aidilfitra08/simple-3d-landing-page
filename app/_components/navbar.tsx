"use client";

import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: 250,
        background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
        height: "100%",
        pt: 2,
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/spline-test"
            sx={{
              color: "#00d4ff",
              "&:hover": {
                backgroundColor: "rgba(0, 212, 255, 0.1)",
              },
            }}
          >
            <ListItemText
              primary="Spline Test"
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: "1.1rem",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background:
            "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 212, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 212, 255, 0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 80 } }}>
            {/* Logo */}
            <Typography
              variant="h5"
              component={Link}
              href="/"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                fontSize: { xs: "1.5rem", md: "2rem" },
                background: "linear-gradient(90deg, #00d4ff 0%, #7b2ff7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textDecoration: "none",
                fontFamily: "monospace",
                letterSpacing: "0.1rem",
                textTransform: "uppercase",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "40%",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, #00d4ff 0%, transparent 100%)",
                },
                "&:hover": {
                  transform: "translateY(-2px)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              Hugger3D
            </Typography>

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  component={Link}
                  href="/spline-test"
                  sx={{
                    color: "#00d4ff",
                    fontSize: "1rem",
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    border: "2px solid transparent",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(#0a0e27, #0a0e27) padding-box, linear-gradient(135deg, #00d4ff, #7b2ff7) border-box",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)",
                      transition: "left 0.5s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 20px rgba(0, 212, 255, 0.3)",
                      "&::before": {
                        left: "100%",
                      },
                    },
                  }}
                >
                  Spline Test
                </Button>
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: "#00d4ff",
                  border: "2px solid rgba(0, 212, 255, 0.3)",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 212, 255, 0.1)",
                    borderColor: "#00d4ff",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar sx={{ minHeight: { xs: 64, md: 80 } }} />
    </>
  );
}
