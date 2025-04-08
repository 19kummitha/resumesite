import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  CardActions,
  Button,
  Collapse,
  CardActionArea,
  Box,
} from "@mui/material";

// Dynamically import all .png images in the projects folder
const images = import.meta.glob("../../assets/projects/*.png", {
  eager: true,
  import: "default",
});

export const ProjectCard = ({
  project: { title, description, skills, source, imageSrc },
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  const getImageUrl = (imageName) => {
    const path = `../../assets/projects/${imageName}`;
    return images[path] || images["../../assets/projects/community.png"];
  };

  return (
    <Card
      sx={{
        width: 345,
        height: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 3,
        background: "linear-gradient(180deg, #576cbc 0%, #132a53 100%)",
        boxShadow: 5,
        color: "white",
        overflow: "hidden",
      }}
    >
      <CardActionArea onClick={handleExpandClick} sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="140"
          image={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ minHeight: 50 }}>
            <Typography variant="h6" fontWeight={700} noWrap title={title}>
              {title}
            </Typography>
          </Box>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography
              mt={1}
              fontSize={14}
              sx={{ maxHeight: 80, overflowY: "auto", pr: 1 }}
            >
              {description}
            </Typography>
          </Collapse>

          <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
            {skills.map((skill, id) => (
              <Chip
                key={id}
                label={skill}
                size="small"
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  color: "white",
                  fontWeight: 500,
                }}
              />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: "space-around", pb: 2 }}>
        <Button
          variant="contained"
          size="small"
          href={source}
          target="_blank"
          sx={{ borderRadius: 5, textTransform: "none" }}
        >
          Source
        </Button>
      </CardActions>
    </Card>
  );
};
