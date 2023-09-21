import "./App.css";
import React from 'react';
import Navbar from "./components/NavBar";
import About from "./components/About";
import Service from "./components/Service";
import ContactUs from "./components/ContactUs";
// import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      
      <About/>
      <Service/>
      <ContactUs/>
    </>
  );
}

export default App;
