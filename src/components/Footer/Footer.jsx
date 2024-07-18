import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FaNewspaper } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { TiInfo } from "react-icons/ti";

import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="icons">
        <p><Link className='icon' to='/'><IoHomeOutline/> Home</Link></p>
        <p><Link className='icon' to='/about'><TiInfo/> About</Link></p>
        <p><Link className='icon' to='/memories'><FaNewspaper/> Memories</Link></p>
        <p><Link className='icon' to='/classmates'><BsPersonSquare/> Classmates</Link></p>
        <p><Link className='icon' to='/contact-us'><FaPhoneAlt/> Contact-us</Link></p>
      </div>
      <p className='text'>&copy; copyrights reserved in the name of CSE-2 class</p>
    </div>
  )
}

export default Footer
