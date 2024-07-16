import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import rgukt from '../../assets/rgukt.mp4'
const About = () => {
  return (
    <>
      <Navbar/>
      <div className="about">
        <div className="image">
          <video src={rgukt} controls  loop autoplay></video>
        </div>
        <div className="text">
          <h4>Welcome to the official webpage of CSE Section 2 at RGUKT Nuzvid College!</h4>
          <p>We are a dedicated group of Computer Science and Engineering students at Rajiv Gandhi University of Knowledge Technologies (RGUKT), Nuzvid, Andhra Pradesh. Our section is known for its vibrant community, innovative spirit, and commitment to excellence in the field of computer science.</p>
          <p>Beyond academics, CSE Section 2 is a hub of activity and creativity. We participate in various coding competitions, hackathons, seminars, and workshops that enrich our learning experience and prepare us for future careers in technology. 
            </p>
          </div>
      </div>
    </>
  )
}

export default About