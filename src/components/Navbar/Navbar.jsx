import React, { useState } from "react";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";

// Auto-import nav images
const navImages = import.meta.glob("../../assets/nav/*", {
  eager: true,
  as: "url",
});
const getNavImage = (imageName) =>
  navImages[`../../assets/nav/${imageName}`];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:830px)");

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pt: "61px",
        zIndex: 2,
        mx: "10%",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Typography
        variant="h6"
        component="a"
        href="/"
        sx={{
          fontSize: "30px",
          fontWeight: 600,
          textDecoration: "none",
          color: "var(--color-text)",
        }}
      >
        Portfolio
      </Typography>

      <Box
        sx={{
          position: isMobile ? "absolute" : "static",
          right: 0,
          mr: isMobile ? "10%" : 0,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-end" : "center",
          gap: isMobile ? "11px" : "0",
          zIndex: 3,
        }}
      >
        {/* Menu button */}
        {isMobile && (
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{ display: "block", cursor: "pointer" }}
          >
            <Box
              component="img"
              src={
                menuOpen
                  ? getNavImage("closeIcon.png")
                  : getNavImage("menuIcon.png")
              }
              alt="menu-button"
              sx={{ width: "32px", height: "32px" }}
            />
          </IconButton>
        )}

        {/* Nav links */}
        <Box
          component="ul"
          sx={{
            display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? "13px" : "47px",
            listStyle: "none",
            borderRadius: isMobile ? "10px" : 0,
            background: isMobile
              ? "linear-gradient(0deg, rgba(25,55,109,0.2) 0%, rgba(25,55,109,1) 100%)"
              : "none",
            padding: isMobile ? "24px 33px" : 0,
            boxShadow: isMobile ? "0 0 4px 0 rgba(0, 0, 0, 0.25)" : "none",
            zIndex: isMobile ? 1 : "auto",
          }}
          onClick={() => setMenuOpen(false)}
        >
          {navLinks.map((link) => (
            <Box
              key={link.href}
              component="li"
              sx={{
                "& a": {
                  fontSize: "25px",
                  color: "var(--color-text)",
                  textDecoration: "none",
                },
              }}
            >
              <a href={link.href}>{link.label}</a>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
