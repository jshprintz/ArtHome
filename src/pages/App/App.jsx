import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

// Remove this when fully converted to SC
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
