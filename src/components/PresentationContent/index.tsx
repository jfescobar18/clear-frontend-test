// React
import React from "react";
// Libs
import { Grid, Typography } from "@mui/material";
// Pages
// Components and Containers
// Types and Interfaces
// Hooks

interface IPresentationContent {
  title: string;
  description?: string;
}

const PresentationContent = ({ title, description }: IPresentationContent) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h3" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        {description}
      </Typography>
    </Grid>
  );
};

export default PresentationContent;
