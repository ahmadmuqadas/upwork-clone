import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="container">
      <NavBar/>
      <Hero/>
    </div>
  )
}

export default App