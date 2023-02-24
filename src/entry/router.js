import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function RouterConfig() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default RouterConfig;
