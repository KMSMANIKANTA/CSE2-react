import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import data from '../data'
import './Classmates.css'
import Person from './Person'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

const Classmates = () => {
  const [people,setPeople]=useState(data);
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  
  return (
    <>
      <Navbar/>
        <h2 className='heading' data-aos='zoom-in' id='top'>Our <span>Classmates</span></h2>
      <div className="classmates">
        {people.map((person)=>{
          return <Person id={person.id} name={person.name} />
        })}
      </div>
      <div className="icons">
        <a href="#down">
        <FaArrowCircleDown className='down'/>
        </a>
        <a href="#top">
        <FaArrowCircleUp className='up'/>
        </a>
      </div>
      <h2 className='end' id='down'>Thanks for visiting...</h2>
      
    </>
  )
}

export default Classmates
