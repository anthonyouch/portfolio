import React from 'react'
import {github, linkedin} from '../assets/'

const Navbar = () => {
  return (
    <nav className="px-8 fixed left-0 z-40 w-full bg-transparent text-gray-500">
      <div className="w-full h-20 flex justify-center items-center gap-4">
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