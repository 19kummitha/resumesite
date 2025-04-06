import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <Box component="section" id="projects" sx={{ mt: 10, px: { xs: 2, md: 10 }, color: 'text.primary' }}>
      <Typography
        variant="h4"
        fontWeight={700}
        textTransform="uppercase"
        letterSpacing={1.75}
        textAlign="center"
      >
        Projects
      </Typography>

      <Grid container spacing={3} justifyContent="center" mt={4}>
        {projects.map((project, id) => (
          <Grid item key={id} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
