import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Person = ({id,name}) => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div className='person' data-aos='zoom-in'>
      <div className="image">
      <img src={`https://intranet.rguktn.ac.in/SMS/usrphotos/user/${id}.jpg`} alt="" />
      </div>
      <div className="details">
      <h6>{name}</h6>
      <p>{id}</p>
      </div>
    </div>
  )
}

export default Person
