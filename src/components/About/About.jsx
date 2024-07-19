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
import Heading from '../Heading/Heading'
import 'aos/dist/aos.css'
const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000,offset:200})
  })
  return (
    <>
      <Navbar/>
      <Heading title={"About"} spantitle={"Us"}/>
      <div className="about">
        <div className="image" data-aos='zoom-in'>
          <video src={rgukt} controls  loop autoplay></video>
        </div>
        <div className="text" data-aos='zoom-out'>
          <h4>Welcome to the official webpage of CSE Section 2 at RGUKT Nuzvid College!</h4>
          <p>We are a dedicated group of Computer Science and Engineering students at Rajiv Gandhi University of Knowledge Technologies (RGUKT), Nuzvid, Andhra Pradesh. Our section is known for its vibrant community, innovative spirit, and commitment to excellence in the field of computer science.</p>
          <p>Beyond academics, CSE Section 2 is a hub of activity and creativity. We participate in various coding competitions, hackathons, seminars, and workshops that enrich our learning experience and prepare us for future careers in technology. 
            </p>
          </div>
      </div>
      <div className="about-details">
        <h4 className='heading'>OUR CR'S</h4>
        <div className="cr">
          <div className="card" data-aos='zoom-in'>
            <img src={manoj} alt="" />
            <div className="desc">
              <h6>G.Manoj Kumar</h6>
              <p>E1-Sem1</p>
            </div>
          </div>
          <div className="card" data-aos='zoom-in' data-aos-delay='200'>
            <img src={keerthana} alt="" />
            <div className="desc">
              <h6>G.Keerthana</h6>
              <p>E1-Sem1</p>
            </div>
          </div>
          
          <div className="card" data-aos='zoom-in' data-aos-delay='300'>
            <img src={divya} alt="" />
            <div className="desc">
              <h6>T.Divya</h6>
              <p>E1-Sem2</p>
            </div>
          </div>
          
          <div className="card" data-aos='zoom-in' data-aos-delay='400'>
            <img src={manikanta} alt="" />
            <div className="desc">
              <h6>K.M.S.Manikanta</h6>
              <p>E1-Sem2</p>
            </div>
          </div>
          
          <div className="card" data-aos='zoom-in' data-aos-delay='500'>
            <img src={ashwanth} alt="" />
            <div className="desc">
              <h6>K.Ashwanth</h6>
              <p>E2-Sem1</p>
            </div>
          </div>
          <div className="card" data-aos='zoom-in' data-aos-delay='600'>
            <img src={archana} alt="" />
            <div className="desc">
              <h6>B.Archana</h6>
              <p>E2-Sem1</p>
            </div>
          </div>
        </div>
        <h2 className='end'>Thanks for visiting...</h2>

      </div>
    </>
  )
}

export default About