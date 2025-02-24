import React from 'react'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Projects2 from './sections/Projects2'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Projects />
      <Projects2 />
    </main>
  )
}

export default App