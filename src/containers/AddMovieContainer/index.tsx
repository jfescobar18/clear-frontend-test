// React
import React, { FormEvent, useEffect, useState } from "react";
// Libs
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { SelectChangeEvent } from "@mui/material";
// Pages
// Components and Containers
import PresentationContent from "../../components/PresentationContent";
import MovieTable from "../../components/MovieTable";
import BackButton from "../../components/BackButton";
import MovieForm from "../../components/MovieForm";
// Types and Interfaces
import { Movie } from "../../models/movie";
import { Actor } from "../../models/actor";
import { SelectState } from "../../types/selectState";
// Hooks

const AddMovieContainer = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [title, setTitle] = useState<string>("");
  const [actors, setActors] = useState<Actor[]>([]);
  const [actorSelects, setActorSelects] = useState<number[]>([1]);
  const [selectValues, setSelectValues] = useState<SelectState>({});

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

  const postMovieActors = async (
    movieId: string,
    actorId: string
  ): Promise<AxiosResponse> => {
    try {
      return await axios.post<Actor>("/api/MovieActors", {
        movieId: movieId,
        actorId: actorId,
      });
    } catch (error) {
      console.error("Error in the POST request:", error);
      toast.error("Error in the POST request");
      throw error;
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const actorsResponse: AxiosResponse = await axios.post<Actor>(
        "/api/Movies",
        { title }
      );

      if (actorsResponse.status === 201) {
        toast.success("Successful POST request");

        const movieId = actorsResponse.data.movieId;
        const movieActorsPromises: Promise<AxiosResponse>[] = Object.entries(
          selectValues
        ).map(async ([key, value]) => {
          return postMovieActors(movieId, value);
        });

        const movieActorsResponses: AxiosResponse[] = await Promise.all(
          movieActorsPromises
        );
      } else {
        toast.error("Error in the POST request");
      }
    } catch (error) {
      console.error("Error in the POST request:", error);
      toast.error("Error in the POST request");
    } finally {
      setTitle("");
      setActorSelects([1]);
      setSelectValues({});
      fetchMovies();
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAddActorSelects = () => {
    setActorSelects((prevSelects) => [...prevSelects, prevSelects.length + 1]);
  };

  const handleActorsSelect = (
    event: SelectChangeEvent<string>,
    index: number
  ) => {
    const actorId = event.target.value as string;

    setSelectValues((prevValues) => ({
      ...prevValues,
      [index.toString()]: actorId as string,
    }));
  };

  return (
    <>
      <PresentationContent title="Add Movie" />

      <MovieTable movies={movies} />

      <MovieForm
        handleSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
        handleAddActorSelects={handleAddActorSelects}
        handleActorsSelect={handleActorsSelect}
        selectValues={selectValues}
        actorSelects={actorSelects}
        actors={actors}
        title={title}
      />

      <BackButton />
    </>
  );
};

export default AddMovieContainer;
