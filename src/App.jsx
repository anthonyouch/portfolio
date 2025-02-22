import React from 'react'
import Hero from './sections/Hero.jsx'
import Navbar from './sections/Navbar.jsx';
import Test from './sections/Test.jsx';
import Projects from './sections/Projects.jsx';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}

export default App;