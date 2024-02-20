// React
import React from "react";
// Libs
import { useNavigate } from "react-router-dom";
import { StyledBackButton } from "./styled-components";
// Pages
// Components and Containers
// Types and Interfaces
// Hooks

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <StyledBackButton
      variant="contained"
      color="error"
      onClick={() => navigate(-1)}
    >
      Go Back
    </StyledBackButton>
  );
};

export default BackButton;
