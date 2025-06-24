import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreateCV from "./pages/CreateCV";

const App = () => {
  return (
    <div data-theme="cupcake">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateCV />} />
      </Routes>
    </div>
  );
};

export default App;
