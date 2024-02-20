// React
import React from "react";
// Libs
import { Container, Grid } from "@mui/material";
// Pages
// Components and Containers
import ButtonMenu from "../../components/ButtonMenu";
import PresentationContent from "../../components/PresentationContent";
// Types and Interfaces
// Hooks

const IndexContainer = () => {
  return (
    <>
      <PresentationContent
        title="Welcome to Movie Hub"
        description="Discover and explore information about your favorite movies."
      />
      <ButtonMenu />
    </>
  );
};

export default IndexContainer;
