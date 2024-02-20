// React
import React from "react";
// Libs
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
// Pages
// Components and Containers
// Types and Interfaces
import { Movie } from "../../models/movie";
// Hooks

interface IMovieTable {
  movies?: Movie[];
}

const MovieTable = ({ movies }: IMovieTable) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Actors</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies?.map((movie) => (
            <TableRow key={movie.actorId}>
              <TableCell>{movie.name}</TableCell>
              <TableCell>{movie.actors.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovieTable;
