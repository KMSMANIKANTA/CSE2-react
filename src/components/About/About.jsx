import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import rgukt from '../../assets/rgukt.mp4'
import manoj from '../../assets/manoj.jpg'
import keerthana from '../../assets/keerthana.jpg'
import divya from '../../assets/divya.jpg'
import manikanta from '../../assets/manikanta.jpg'
import ashwanth from '../../assets/ashwanth.jpg'
import archana from '../../assets/archana.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
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
      <div className="about-details">
        <h4 className='heading'>OUR CR'S</h4>
        <div className="cr">
          <div className="card">
            <img src={manoj} alt="" />
            <div className="desc">
              <h6>G.Manoj Kumar</h6>
              <p>E1-Sem1</p>
            </div>
          </div>
          <div className="card">
            <img src={keerthana} alt="" />
            <div className="desc">
              <h6>G.Keerthana</h6>
              <p>E1-Sem1</p>
            </div>
          </div>
          
          <div className="card">
            <img src={divya} alt="" />
            <div className="desc">
              <h6>T.Divya</h6>
              <p>E1-Sem2</p>
            </div>
          </div>
          
          <div className="card">
            <img src={manikanta} alt="" />
            <div className="desc">
              <h6>K.M.S.Manikanta</h6>
              <p>E1-Sem2</p>
            </div>
          </div>
          
          <div className="card">
            <img src={ashwanth} alt="" />
            <div className="desc">
              <h6>K.Ashwanth</h6>
              <p>E2-Sem1</p>
            </div>
          </div>
          <div className="card">
            <img src={archana} alt="" />
            <div className="desc">
              <h6>B.Archana</h6>
              <p>E2-Sem1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About