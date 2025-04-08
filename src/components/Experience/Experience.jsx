import React from "react";
import { Box, Typography, Grid, Stack, useMediaQuery } from "@mui/material";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

// Image imports using Vite's import.meta.glob
const skillImages = import.meta.glob("../../assets/skills/*", {
  eager: true,
  as: "url",
});
const historyImages = import.meta.glob("../../assets/history/*", {
  eager: true,
  as: "url",
});

const getSkillImage = (imageName) =>
  skillImages[`../../assets/skills/${imageName}`];
const getHistoryImage = (imageName) =>
  historyImages[`../../assets/history/${imageName}`];

export const Experience = () => {
  const isMobile = useMediaQuery("(max-width:830px)");

  return (
    <Box
      id="experience"
      sx={{
        color: "var(--color-text)",
        mt: "79px",
        mx: "10%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-evenly",
          mt: "14px",
          gap: isMobile ? "34px" : 0,
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        {/* Skills Section */}
        <Box sx={{ width: isMobile ? "100%" : "45%" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "35px",
              fontWeight: 700,
              letterSpacing: "1.75px",
              textTransform: "uppercase",
              mb: 3,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Skills
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent={isMobile ? "center" : "flex-start"}
          >
            {skills.map((skill, index) => (
              <Grid item key={index}>
                <Stack alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      bgcolor: "var(--color-secondary)",
                      borderRadius: "50%",
                      width: 120,
                      height: 120,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={getSkillImage(skill.imageSrc)}
                      alt={skill.title}
                      width={75}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      fontFamily: "var(--font-roboto)",
                      fontWeight: 500,
                    }}
                  >
                    {skill.title}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Experience Section */}
        <Box sx={{ width: isMobile ? "100%" : "45%" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "35px",
              fontWeight: 700,
              letterSpacing: "1.75px",
              textTransform: "uppercase",
              mb: 3,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Experience
          </Typography>
          <Stack spacing={isMobile ? 2 : 5}>
            {history.map((historyItem, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{
                  background:
                    "linear-gradient(90deg, #19376d 0%, rgba(25, 55, 109, 0) 100%)",
                  borderRadius: "10px",
                  p: "24px",
                }}
              >
                <img
                  src={getHistoryImage(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  width={50}
                />
                <Box
                  sx={{
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: 500,
                    }}
                  >
                    {`${historyItem.role}, ${historyItem.organisation}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 300,
                    }}
                  >
                    {`${historyItem.startDate} - ${historyItem.endDate}`}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      mt: "6px",
                      listStyleType: "disc",
                      listStylePosition: "inside",
                      fontSize: "25px",
                      ml: "17px",
                      p: 0,
                    }}
                  >
                    {historyItem.experiences.map((exp, i) => (
                      <li key={i}>{exp}</li>
                    ))}
                  </Box>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
