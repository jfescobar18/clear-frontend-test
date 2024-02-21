// React
import React, { FormEvent, useEffect, useState } from "react";
// Libs
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
// Pages
// Components and Containers
import PresentationContent from "../../components/PresentationContent";
import MovieTable from "../../components/MovieTable";
import BackButton from "../../components/BackButton";
import MovieForm from "../../components/MovieForm";
// Types and Interfaces
import { Movie } from "../../models/movie";
import { Actor } from "../../models/actor";
// Hooks

const AddMovieContainer = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [title, setTitle] = useState<string>("");
  const [actors, setActors] = useState<Actor[]>([]);
  const [actorSelects, setActorSelects] = useState<number[]>([1]);
  const [selectedActors, setCelectedActors] = useState<string[]>([""]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response: AxiosResponse = await axios.post<Actor>("/api/Actors", {
        name: name,
      });

      if (response.status === 201) {
        toast.success("Successful POST request");
      } else {
        toast.error("Error in the POST request");
      }
    } catch (error) {
      console.error("Error in the POST request:", error);
      toast.error("Error in the POST request");
    } finally {
      setTitle("");
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAddActorSelects = () => {
    setActorSelects((prevSelects) => [...prevSelects, prevSelects.length + 1]);
  };

  const handleActorsSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const actor = event.target.value;
    setCelectedActors((prev) => (prev ? [...prev, actor] : [actor]));
  };

  const fetchMovies = async () => {
    const response = await axios.get("/api/Movies");
    setMovies(response.data);
  };

  const fetchActors = async () => {
    const response = await axios.get("/api/Actors");
    setActors(response.data);
  };

  useEffect(() => {
    fetchMovies();
    fetchActors();
  }, []);

  return (
    <>
      <PresentationContent title="Add Movie" />

      <MovieTable movies={movies} />

      <MovieForm
        handleSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
        handleAddActorSelects={handleAddActorSelects}
        handleActorsSelect={handleActorsSelect}
        actorSelects={actorSelects}
        actors={actors}
        title={title}
      />

      <BackButton />
    </>
  );
};

export default AddMovieContainer;
