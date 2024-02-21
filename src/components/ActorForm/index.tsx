// React
import React from "react";
// Libs
// Pages
// Components and Containers
// Types and Interfaces
import { Button, TextField } from "@mui/material";
// Hooks

interface IActorForm {
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
  handleNameChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  name: string;
}

const ActorForm = ({ handleSubmit, handleNameChange, name }: IActorForm) => {
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
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          style={{ marginBottom: "16px" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </>
  );
};

export default ActorForm;
