import React from "react";
import { Box, Typography, Stack, Link, useMediaQuery } from "@mui/material";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  const isMobile = useMediaQuery("(max-width:830px)");

  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        color: "var(--color-text)",
        mt: "120px",
        bgcolor: "var(--color-secondary)",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-evenly",
        width: "100vw",
        px: "10%",
        py: "58px",
        gap: isMobile ? "23px" : "10px",
      }}
    >
      <Box
        className="text"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "80px", fontWeight: 700, letterSpacing: "4px" }}>
          Contact
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "40px", fontWeight: 400, letterSpacing: "2px" }}>
          Feel free to reach out!
        </Typography>
      </Box>

      <Stack
        component="ul"
        spacing={3}
        sx={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-start",
          m: 0,
          p: 0,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={3} component="li">
          <img src={emailIcon} alt="Email icon" />
          <Link
            href="mailto:myemail@email.com"
            sx={{
              color: "var(--color-text)",
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: 400,
              letterSpacing: "1.5px",
            }}
          >
            myemail@email.com
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={3} component="li">
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <Link
            href="https://www.linkedin.com/myname"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "var(--color-text)",
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: 400,
              letterSpacing: "1.5px",
            }}
          >
            linkedin.com/myname
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={3} component="li">
          <img src={githubIcon} alt="Github icon" />
          <Link
            href="https://www.github.com/myname"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "var(--color-text)",
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: 400,
              letterSpacing: "1.5px",
            }}
          >
            github.com/myname
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};
