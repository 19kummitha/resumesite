import React from "react";
import { Box, Typography, Paper, Button, Grid } from "@mui/material";
import certificationData from "../../data/certificate.json";

export const Certifications = () => {
  return (
    <Box
      id="certifications"
      sx={{ mt: 16, px: { xs: 2, md: 10 }, color: "white" }}
    >
      <Typography variant="h4" fontWeight={700} mb={4}>
        Certifications
      </Typography>

      <Grid container spacing={8}>
        {certificationData.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={4}
              sx={{
                height: 250, // fixed card height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 3,
                borderRadius: 3,
                background: "linear-gradient(135deg, #132a53 0%, #576cbc 100%)",
                color: "white",
                overflow: "hidden",
              }}
            >
              <Box sx={{ overflow: "hidden" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={cert.title}
                >
                  {cert.title}
                </Typography>

                <Typography fontSize={16}>{cert.issuer}</Typography>
                <Typography fontSize={14} color="gray">
                  {cert.year}
                </Typography>
              </Box>

              {cert.pdf && (
                <Button
                  variant="outlined"
                  href={`/certifications/${cert.pdf}`}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    mt: 2,
                    alignSelf: "flex-start",
                    color: "#90caf9",
                    borderColor: "#90caf9",
                  }}
                >
                  View Certificate
                </Button>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
