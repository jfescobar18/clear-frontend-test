// React
import React, { FormEvent, useEffect, useState } from "react";
// Libs
import axios, { AxiosResponse } from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
// Pages
// Components and Containers
import PresentationContent from "../../components/PresentationContent";
import ActorTable from "../../components/ActorTable";
import BackButton from "../../components/BackButton";
import ActorForm from "../../components/ActorForm";
// Types and Interfaces
import { Actor } from "../../models/actor";
// Hooks

const AddActorContainer = () => {
  const [actors, setActors] = useState<Actor[]>();
  const [name, setName] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

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
      setName("");
      fetchData();
    }
  };

  const fetchData = async () => {
    const response = await axios.get("/api/Actors");
    setActors(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PresentationContent title="Add Actors" />

      <ActorTable actors={actors} />

      <ActorForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        name={name}
      />

      <BackButton />
    </>
  );
};

export default AddActorContainer;
