import React from "react";
import logo from "./Unicorn_logo.jpg";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import ContactUs from "./ContactUs";
function NavBar() {
  return (
    <>
    <Router>
      <div className="container">
        <div className="left">
          <div className="img">
            <img src={logo} alt="logo" />
          </div>
          <div className="text">Farhan.</div>
        </div>
        <div className="right">
          <div id="lis">
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </div>
          <div id="lis">
            <Link
              to={"/about"}
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
          </div>
          <div id="lis">
            <Link
              to={"/service"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Services
            </Link>
          </div>
          <div id="lis">
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  );
}

export default NavBar;
