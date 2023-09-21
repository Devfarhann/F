import React from 'react'
import Gojo from './gojo left.jpg';
function About() {
  return (
    <>
     <div className="about_container" >
        <div className="background_image">
            <h1>About Us</h1>
        </div>
        <div className="text_image">
            <div className="about_text">
                <p>TCS is an independent, Dutch company, based at Schiphol Airport.<br/> 
                   The team behind the name is experienced and seasoned with a has<br/>
                   well-known and trustworthy reputation in handling bride grom we<br/>
                   TCS is an independent, Dutch company, based at Schiphol Airport.<br/>
                   time-critical shipments from any pick-up address kolkata bb bazar<br/>
                   TCS is an independent, Dutch company, based at Schiphol Airport.<br/>
                   time-critical shipments from any pick-up address kolkata bb bazar<br/>
                   well-known and trustworthy reputation in handling bride grom we<br/>
                   TCS is an independent, Dutch company, based at Schiphol Airport.<br/>
                   time-critical shipments from any pick-up address kolkata bb bazar<br/>
                   to any delivery address in the world any delivery company address.</p>
            </div>
            <div className="about_image">
               <img id="one" src={Gojo} alt="gojo"/>
            </div>
        </div>
     </div>
    </>
  )
}

export default About
