import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Carousel from './Carousel'
import Footer from '../Footer/Footer'
import 'aos/dist/aos.css'
import Aos from 'aos'
const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <>
    <Navbar/>
    <div className="home">
      <div className="left" >
        <Carousel />
      </div>
      <div className='right-container'>
      <div className="right" data-aos='fade-left' >
        <div className="content"> 
                 Introducing the most cracking coders <span> #CSE-2</span> buddies . Overloaded with craziness and a bit of intelligence we guys are so elegant and sophisticated . And are very excited for our next engineering funny things that are making the priceless memories with great progress over time .
          </div>
          <div className="by">
          - With Love 
            #CSE2
          </div>
      </div>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Home
