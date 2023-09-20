import React from "react";
import "./index.css";
import Home from "./routes/Home";
// import About from "./routes/About";
import Project from "./routes/Project";
// import Contact from "./routes/Contact";
import Login from "./routes/Login";

import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<Project />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Provider>
    </>
  );
}

export default App;
