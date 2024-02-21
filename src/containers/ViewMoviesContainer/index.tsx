// React
import React, { useEffect, useState } from "react";
// Libs
import axios from "axios";
// Pages
// Components and Containers
import PresentationContent from "../../components/PresentationContent";
import MovieTable from "../../components/MovieTable";
import BackButton from "../../components/BackButton";
// Types and Interfaces
import { Movie } from "../../models/movie";
// Hooks

const ViewMoviesContainer = () => {
  const [movies, setMovies] = useState<Movie[]>();

  const fetchData = async () => {
    const response = await axios.get("/api/Movies");
    setMovies(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PresentationContent title="Movie Search" />

      <MovieTable movies={movies} />

      <BackButton />
    </>
  );
};

export default ViewMoviesContainer;
