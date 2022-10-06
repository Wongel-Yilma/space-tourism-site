import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Crew from "./Crew";
import Destination from "./Destination";
import Technology from "./Technology";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/Technology" element={<Technology />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
