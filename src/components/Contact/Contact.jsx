import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'
import { useState } from 'react'
import Heading from '../Heading/Heading'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
   const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "b8ee23bc-3e7a-437d-bb78-ad37e5380130");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <Navbar/>
      <Heading title={"Contact"} spantitle={"us"} />
      <div className="contact">
        <form onSubmit={onSubmit} data-aos='zoom-in'>
        <input type="text" name="name" placeholder='name' required/>
        <input type="email" name="email" placeholder='Enter your email' required/>
        <textarea name="message"  required className='message' rows='5' columns='10' placeholder='Enter your message'></textarea>
        <button type="submit">Submit Form</button>
      <span>{result}</span>
      </form>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.680217585421!2d80.82252730671084!3d16.791825752539456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675e529e71b73%3A0x9bc6344d9d3a6ce7!2sA2%20BLOCK%2CIIIT%20NUZVID!5e0!3m2!1sen!2sin!4v1721375272818!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-aos='fade-up' className='map'
        />
      </div>
    </>
  )
}

export default Contact
