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
        
        <div className="absolute bottom-1/8 w-full flex justify-center items-center">
          <a href="">
            <div className="w-[24px] h-[40px] rounded-3xl border-2 border-white opacity-70 flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-1 h-2 rounded-full bg-white absolute top-[25%]"
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero