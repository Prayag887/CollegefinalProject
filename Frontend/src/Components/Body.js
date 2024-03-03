import React from 'react'
import stars from"../assets/stars.png"
import moon from '../assets/moon.png'
import mountain_front from '../assets/mountains_front.png'
import mountain_back from '../assets/mountains_behind.png'
import cloud1 from '../assets/cloud1.jpg'
import cloud2 from '../assets/cloud2.png'
import '../css/main.css'
const Body = () => {
  return (
    <>
   <section className="animation_moon">
        <img src={stars} className="stars" alt='stars'/>
        <img src={moon} className="moon" alt='moon'/>
        <img src={mountain_back} className="mountains_behind" alt='backmountain'/>
        <img src={cloud2} className="cloud2" alt='cloud2' />
        <img src={cloud1} className="cloud1" alt='cloud1' />
        <img src={mountain_front} className="mountains_front"alt='mount1'/>
    </section>
    </>
  )
}

export default Body