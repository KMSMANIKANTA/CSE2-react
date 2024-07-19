import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Heading.css'
const Heading = ({title,spantitle}) => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <h2 className='heading' data-aos='zoom-in'>{title} <span>{spantitle}</span></h2>
  )
}
export default Heading
