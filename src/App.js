import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Select from "./Select";
import "./App.css";

import Crud from "./Crud";
import Tsearch from "./Tsearch";

import Ant from "./Ant";
import Boot from "./Boot";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Select />
        <Routes>
          <Route path="/Ant" element={<Ant />} />
          <Route path="/Boot" element={<Boot />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/Tsearch" element={<Tsearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
