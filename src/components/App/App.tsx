import React from "react";
import { ThemeProvider } from "@mui/styles";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import AboutPageButton from "../../components/AboutPageButton";
import HomePageButton from "../HomePageButton";
import NavBar from "../../components/NavBar";
import { Route, Routes, Link, Navigate } from "react-router-dom";

import "../../index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Link to="/">
          <HomePageButton />
        </Link>

        <Link to="/about">
          <AboutPageButton />
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
