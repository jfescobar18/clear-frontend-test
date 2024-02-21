// React
import React from "react";
// Libs
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// Pages
// Components and Containers
// Types and Interfaces
import { Actor } from "../../models/actor";
// Hooks

interface IMovieForm {
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
  handleTitleChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  handleAddActorSelects: React.MouseEventHandler<HTMLButtonElement>;
  handleActorsSelect: React.ReactEventHandler<HTMLDivElement>;
  actorSelects: number[];
  actors: Actor[];
  title: string;
}

const MovieForm = ({
  handleSubmit,
  handleTitleChange,
  handleAddActorSelects,
  handleActorsSelect,
  actorSelects,
  actors,
  title,
}: IMovieForm) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: "40px auto",
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={handleTitleChange}
          style={{ marginBottom: "16px" }}
        />

        <div>
          {actorSelects.map((select, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id={`select-label-${index}`}>{`Actor ${
                  index + 1
                }`}</InputLabel>
                <Select
                  label={`Select ${index + 1}`}
                  labelId={`select-label-${index}`}
                  onSelect={handleActorsSelect}
                >
                  {actors.map((actor) => {
                    return (
                      <MenuItem value={actor.actorId}>{actor.name}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          ))}

          <Button
            variant="outlined"
            color="info"
            onClick={handleAddActorSelects}
            style={{ margin: "0 auto 20px" }}
          >
            Attach actor
          </Button>
        </div>

        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </>
  );
};

export default MovieForm;
