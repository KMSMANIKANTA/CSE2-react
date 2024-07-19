import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import data from '../data'
import './Classmates.css'
import Person from './Person'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import Heading from '../Heading/Heading'

const Classmates = () => {
  const [people,setPeople]=useState(data);
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  
  return (
    <>
      <Navbar/>
      <Heading title={"Our"} spantitle={"Classmates"}/>
      <div className="classmates">
        {people.map((person)=>{
          return <Person id={person.id} name={person.name} />
        })}
      </div>
      <div className="updown">
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
