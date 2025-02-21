import React from 'react'
import StarsCanvas from '../components/Stars'
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section className="w-full h-screen bg-black">
        <StarsCanvas />
        <div className="absolute top-1/5 sm:text-2xl text-xl w-full flex justify-center">
          <p>SOFTWARE DEVELOPER</p>
        </div>
        <div className="absolute flex justify-center items-center w-full h-full align-">
          <div id="text-behind">ANTHONY<br /><span className="bottomText">OUCH</span></div>
          <div id="text-behind-blur">ANTHONY<br /><span className="bottomText">OUCH</span></div>
          <div id="text-front">ANTHONY<br /><span className="bottomText">OUCH</span></div>
        </div>
    </section>
  )
}

export default Hero