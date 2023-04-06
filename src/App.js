import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
// import { createBrowserHistory as createHistory } from "history";
import Home from "./Home";
import Details from "./Details";

function App() {
  // const history = createHistory();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        {/* <div className="image-header">
          <h1>Gallery Image Filtering</h1>
        </div>
        <button type="submit">Previous</button>
        <button type="submit">Next</button> */}
      </Routes>
    </div>
  );
}

export default App;
