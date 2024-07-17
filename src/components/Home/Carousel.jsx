import React, { useEffect } from 'react'
import class1 from '../../assets/class1.jpg'
import class2 from '../../assets/class2.jpg'
import class3 from '../../assets/class3.jpg'
import class4 from '../../assets/class4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Carousel = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return(<>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-aos='zoom-in'>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={class1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={class2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={class3} className="d-block w-100" alt="..."/>
    </div>
    
    <div className="carousel-item">
      <img src={class4} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousel
