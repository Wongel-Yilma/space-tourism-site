import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
          <Route path="/" exact component={Home} />
          <Route path="/destination" exact component={Destination} />
          <Route path="/crew" exact component={Crew} />
          <Route path="/Technology" exact component={Technology} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
