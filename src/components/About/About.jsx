import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";

export const About = () => {
  const isMobile = useMediaQuery("(max-width:830px)");

  const items = [
    {
      icon: cursorIcon,
      title: "Frontend Developer",
      desc: "I specialize in building responsive and optimized user interfaces using modern frameworks like React.js and MUI.",
    },
    {
      icon: serverIcon,
      title: "Backend Developer",
      desc: "I create efficient, secure, and scalable APIs and services with .NET, focusing on performance and reliability.",
    },
    {
      icon: cursorIcon,
      title: "Fullstack Developer",
      desc: "From UI/UX to database architecture, I build complete web applications that integrate both frontend and backend technologies seamlessly.",
    },
    {
      icon: cursorIcon,
      title: "Subject Matter Expert in Mathematics -Chegg",
      desc: "Worked as a Subject Matter Expert in Mathematics at Chegg for 6 months. This role strengthened my analytical thinking and problem-solving approach — skills I now apply in my software development journey.",
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: "relative",
        bgcolor: "rgba(12, 12, 12, 0.6)",
        borderRadius: "15px",
        p: isMobile ? 3 : 6,
        mt: 16,
        mx: isMobile ? 2 : "10%",
        zIndex: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          mb: 6,
          textAlign: "center",
        }}
      >
        About Me
      </Typography>

      <Stack spacing={4}>
        {items.map((item, index) => (
          <Paper
            key={index}
            elevation={4}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: 3,
              p: 4,
              borderRadius: 4,
              background:
                "linear-gradient(135deg, rgba(87,108,188,0.4), rgba(19,42,83,0.4))",
              color: "white",
              backdropFilter: "blur(6px)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Avatar
              src={item.icon}
              alt={`${item.title} icon`}
              sx={{ width: 64, height: 64 }}
            />
            <Box>
              <Typography variant="h6" sx={{ fontSize: 22, fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: 16, mt: 1 }}>{item.desc}</Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};
