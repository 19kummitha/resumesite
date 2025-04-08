import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import educationData from "../../data/education.json";

export const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        mt: 16,
        px: { xs: 2, md: 10 },
        color: "white",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        mb={4}
        sx={{ textTransform: "uppercase", letterSpacing: 1.5 }}
      >
        Education
      </Typography>

      <Stack spacing={4}>
        {educationData.map((edu, index) => (
          <Paper
            key={index}
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              background: "linear-gradient(135deg, #132a53 0%, #576cbc 100%)",
              color: "white",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              {edu.degree}
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              {edu.institution}
            </Typography>
            <Typography variant="body2" color="gray" mb={1}>
              {edu.year}
            </Typography>
            <Typography variant="body2">{edu.details}</Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};
