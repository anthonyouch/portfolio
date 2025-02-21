import React from 'react'
import Hero from './sections/Hero.jsx'
import Navbar from './sections/Navbar.jsx';
import Test from './sections/Test.jsx';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Test />
    </div>
  )
}

export default App;