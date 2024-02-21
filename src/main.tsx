// React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Libs
import { Container, Grid } from "@mui/material";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Pages
import Index from "./pages/index";
import ViewMovies from "./pages/viewMovies";
import AddMovie from "./pages/addMovie";
import AddActor from "./pages/addActor";
// Components and Containers
// Types and Interfaces
// Hooks

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container style={{ marginTop: "50px" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/movies" element={<ViewMovies />} />
            <Route path="/addmovie" element={<AddMovie />} />
            <Route path="/addactor" element={<AddActor />} />
          </Routes>
        </Router>
      </Grid>
    </Container>
    <ToastContainer />
  </React.StrictMode>
);
