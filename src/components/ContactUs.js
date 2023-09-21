import React from 'react'

import twitter from './twitter logo.png';
import linkedin from './linkedin logo.png';
import instagram from './insta.jpeg'

function ContactUs() {
  return (
    <>
      <div className="contact_container">
        <div className="background_content">
          <h1>Contact Us</h1>
        </div>
        <div className="content">
         <a href='https://www.instagram.com/_____aspirant_/'><img src={instagram} alt=""/></a>
         <a href='https://twitter.com/?lang=en-in'><img src={twitter} alt=""/></a>
         <a href='https://www.linkedin.com/feed/'><img src={linkedin} alt=""/></a>
        </div>
        <div className="footer">
        
        <p>@ We collect information about the apps, browsers, and <br />
                    devicesyou use to access Google services, <br />
                        which helps us provide features.</p>
      
        </div>
      </div>
    </>
  )
}

export default ContactUs
