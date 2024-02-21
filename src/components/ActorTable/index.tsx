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
import { Actor } from "../../models/actor";
// Hooks

interface IActorTable {
  actors?: Actor[];
}

const ActorTable = ({ actors }: IActorTable) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {actors?.map((actor) => (
            <TableRow key={actor.actorId}>
              <TableCell>{actor.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActorTable;
