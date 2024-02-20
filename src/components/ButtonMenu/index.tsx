// React
import React from "react";
import { Link } from "react-router-dom";
// Libs
import { Button, Grid } from "@mui/material";
// Pages
// Components and Containers
import { StyledButtonContainer } from "./styled-components";
// Types and Interfaces
// Hooks

const ButtonMenu = () => {
  return (
    <>
      <StyledButtonContainer>
        <Button
          component={Link}
          to="/movies"
          variant="contained"
          color="primary"
        >
          Search Movies
        </Button>
        <Button
          component={Link}
          to="/addmovie"
          variant="contained"
          color="primary"
        >
          Add Movies
        </Button>
        <Button
          component={Link}
          to="/addactor"
          variant="contained"
          color="primary"
        >
          Add Actors
        </Button>
      </StyledButtonContainer>
    </>
  );
};

export default ButtonMenu;
