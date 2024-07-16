import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  
  const [toggle,setToggle]=useState(false)
  const [scroll,setScroll]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      let h=window.scrollY;
      if(h>70){
        setScroll(true)
      }
      else{
        setScroll(false)
      }
    })
  },[])
  return (
    <>
    <div className='navbar'>
        <Link to='/' className='logo'>
      CSE2
    </Link>
    <div className={`navlinks ${toggle?'activelinks':''}`}>
      <NavLink to='/' className={(e)=>{
        return e.isActive?'link activenav':'link'
      }}>
      <p  >Home</p></NavLink>
      <NavLink to='/about' className={(e)=>{
        return e.isActive?'link activenav':'link'
      }}>
      <p >About</p></NavLink>
      <NavLink to='/news' className={(e)=>{
        return e.isActive?'link activenav':'link'
      }}>
      <p>News</p></NavLink>
      <NavLink to='/classmates' className={(e)=>{
        return e.isActive?'link activenav':'link'
      }}>
      <p>Classmates</p></NavLink>
      <NavLink to='/contact-us' className={(e)=>{
        return e.isActive?'link activenav':'link'
      }}>
      <p >Contact Us</p></NavLink>
    </div>
    <div className="toggle" onClick={()=>{
      setToggle(!toggle)
    }}>
      {!toggle?<FaBarsStaggered className='bars'/>:<RxCrossCircled className='cross'/>}
    </div>
    </div>
    <div className={`cover ${scroll?'display':''}`}>
      
    </div>
    </>
  )
}

export default Navbar
