import React from "react";
import gojo from "./GOJO.png";
function Home() {
  return (
    <>
      <div className="main_container">
        <div className="primary_text">
          <h4 id="identity" style={{ textShadow: " 2px 2px 2px black" }}>
            Aspirant Developer
          </h4>
          <h1 id="name">
            Hello I'm
            <br />
            <spam>Sheikh Farhan</spam>
          </h1>
          <p>
            I am 21 year old and I was born and bought up in Kolkata. <br />
            I completed my 12th from jogamaya memorial institute and
            <br />
            bachelors degree from Mharaja manindra chandra college.
            <br />
            I am currently full stack web development course
            <br />I really like coding.
          </p>
          <a href="https://web.whatsapp.com/"><button>GET IN TOUCH</button></a>
        </div>
        <div className="primary_image">
          <img src={gojo} alt="gojo" />
        </div>
      </div>
    </>
  );
}

export default Home;
