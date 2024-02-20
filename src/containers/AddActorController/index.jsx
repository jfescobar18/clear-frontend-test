// React
import React from "react";
// Libs
// Pages
// Components and Containers
// Types and Interfaces
// Hooks

const AddActorController = () => {
  return (
    <>
      <PresentationContent title="Movie Search" />

      <MovieTable movies={movies} />

      <BackButton />
    </>
  );
};

export default AddActorController;
