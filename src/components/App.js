import React from "react";
import { Route, Routes,  } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
  
 <div>
     <NavBar />
     <Routes>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/actors" component={Actors} />
        <Route component={Home} />
        </Routes>
  </div>
  );
  
}

export default App;
