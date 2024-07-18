import React from 'react'
import './Memories.css'
import Navbar from '../Navbar/Navbar'
const Memories = () => {
  return (
    <>
    <Navbar/>
      <div className='memories'>
        <div className="photos">
      <h1>Event's Photos</h1>
      <h4>E1-Sem2</h4>
      <p><a href="https://photos.app.goo.gl/cRC6U2TmXaPpfoTq8">Event-1</a></p>
      <p><a href="https://photos.app.goo.gl/WPeKJ9dz9Aoutfg3A">Event-2</a></p>
      <p><a href="https://photos.app.goo.gl/AQfEswvgZNn8KL3v5">Event-3</a></p>
      </div>
      <div className="news">
      <h4>Daily News</h4>
      <p><a href="#">Go to News</a></p>
      </div>
    </div>
    </>

  )
}

export default Memories
