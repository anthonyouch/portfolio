import React from 'react'
import {github, linkedin} from '../assets/'

const Navbar = () => {
  return (
    <nav className="top-5 absolute left-0 z-40 w-full bg-transparent">
      
      <div className="w-full h-25 flex justify-center items-center gap-8">
          <a href="https://github.com/anthonyouch" target="_blank" rel="noreferrer">
            <img src={github} alt="github" className="w-8 h-8 opacity-80 color-filter"/>
          </a>
          <a href="https://www.linkedin.com/in/anthonyouch" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" className="w-8 h-8 opacity-80 color-filter"/>
          </a>
      </div>
      
    </nav>
  )
}

export default Navbar