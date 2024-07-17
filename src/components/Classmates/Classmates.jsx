import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import data from '../data'
import './Classmates.css'
import Person from './Person'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Classmates = () => {
  const [people,setPeople]=useState(data);
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  
  return (
    <>
      <Navbar/>
      
        <h2 className='heading' data-aos='zoom-in'>Our <span>Classmates</span></h2>
      <div className="classmates">
        {people.map((person)=>{
          return <Person id={person.id} name={person.name} />
        })}
      </div>
    </>
  )
}

export default Classmates
