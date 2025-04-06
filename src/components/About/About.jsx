import React from "react";
import { Box, Typography, Avatar, Paper, Stack, useMediaQuery } from "@mui/material";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";

export const About = () => {
  const isMobile = useMediaQuery("(max-width:830px)");

  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: "relative",
        bgcolor: "rgba(12, 12, 12, 0.6)",
        borderRadius: "15px",
        p: isMobile ? 2 : 9,
        mt: 16,
        mx: isMobile ? 0 : "10%",
        zIndex: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: 700,
          letterSpacing: "1.75px",
          textTransform: "uppercase",
          mb: 4,
        }}
      >
        About
      </Typography>

      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        alignItems="center"
        gap={4}
      >
        {!isMobile && (
          <Box
            component="img"
            src={aboutImage}
            alt="Me sitting with a laptop"
            sx={{ width: "35%" }}
          />
        )}

        <Stack spacing={5}>
          {[
            {
              icon: cursorIcon,
              title: "Frontend Developer",
              desc: "I'm a frontend developer with experience in building responsive and optimized sites",
            },
            {
              icon: serverIcon,
              title: "Backend Developer",
              desc: "I have experience developing fast and optimised back-end systems and APIs",
            },
            {
              icon: cursorIcon,
              title: "UI Designer",
              desc: "I have designed multiple landing pages and have created design systems as well",
            },
          ].map((item, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 3,
                borderRadius: 3,
                backgroundImage: "linear-gradient(90deg, rgba(165,215,232,0.42) 0%, rgba(255,255,255,0) 100%)",
                transition: "background-size 0.4s",
                "&:hover": {
                  backgroundSize: "100% 100%",
                },
              }}
            >
              <Avatar src={item.icon} alt={`${item.title} icon`} sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="h6" sx={{ fontSize: 25, fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: 25 }}>{item.desc}</Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
