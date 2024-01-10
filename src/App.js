import React from "react";
import { Home } from "./Compontes/Home";
import { NavBar } from "./Compontes/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <> 
  
    <div className="bg-slate-900">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
