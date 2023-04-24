import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

// Remove this when fully converted to SC
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
