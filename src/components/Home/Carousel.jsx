import React from 'react'
import class1 from '../../assets/class1.jpg'
import class2 from '../../assets/class2.jpg'
import class3 from '../../assets/class3.jpg'
import class4 from '../../assets/class4.jpg'
const Carousel = () => {
  return(<>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={class1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={class2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={class3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousel
