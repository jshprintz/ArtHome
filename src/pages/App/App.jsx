import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    return (
      <Routes>
        <Route
          path="/"
          element={<Home/>}
          />
      </Routes>
    );
  }

export default App;
