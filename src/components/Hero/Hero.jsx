import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import HeroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  const isMobile = useMediaQuery("(max-width:830px)");

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        mt: "49px",
        mx: "10%",
        zIndex: 1,
      }}
    >
      {/* Left Text Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-start",
          color: "var(--color-text)",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "72px",
            fontWeight: 900,
            mb: "33px",
            fontFamily: "var(--font-roboto)",
            background: "linear-gradient(90deg, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 120%)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          Hi, I'm Ada
        </Typography>

        <Typography
          sx={{
            fontSize: "30px",
            fontFamily: "var(--font-roboto)",
            mb: "52px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </Typography>

        <Button
          href="mailto:myemail@email.com"
          sx={{
            textTransform: "none",
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text)",
            borderRadius: "100px",
            fontSize: "30px",
            fontWeight: 600,
            padding: "17px 26px",
            boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)",
            "&:hover": {
              backgroundColor: "var(--color-primary)", // retain same on hover
            },
          }}
        >
          Contact Me
        </Button>
      </Box>

      {/* Right Floating Image */}
      <Box
        component="img"
        src={HeroImage}
        alt="Hero image of me"
        sx={{
          width: "50%",
          zIndex: 1,
          animation: "floating 3s ease-in-out infinite",
        }}
      />

      {/* Top Blur */}
      <Box
        sx={{
          position: "absolute",
          width: "50vw",
          height: "50vw",
          minWidth: "350px",
          top: "-128px",
          left: "-10vw",
          borderRadius: "764px",
          backgroundColor: "rgba(25, 55, 109, 0.7)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* Bottom Blur */}
      <Box
        sx={{
          position: "absolute",
          width: "70vw",
          height: "50vw",
          minWidth: "250px",
          top: "246px",
          right: "-25vw",
          borderRadius: "764px",
          backgroundColor: "rgba(25, 55, 109, 0.7)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* Keyframes animation */}
      <style>
        {`
          @keyframes floating {
            0% { transform: translate(0, 0px); }
            50% { transform: translate(0, 10px); }
            100% { transform: translate(0, 0px); }
          }
        `}
      </style>
    </Box>
  );
};
