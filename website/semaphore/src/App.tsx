import React from "react";
import "./App.css";
import MenuAppBar from "./components/MenuAppBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

// https://mui.com/material-ui/react-card/
// https://mui.com/material-ui/getting-started/templates/

function App(): JSX.Element {
  return (
    <>
      <MenuAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>Nathan is a cool cat</div>} />
        <Route path="/blog" element={<div>Nathan's got a sweet blog'</div>} />
      </Routes>
    </>
  );
}

export default App;
