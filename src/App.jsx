import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import HeroText from './components/HeroText'
import Login from './components/Login'

function App() {
  return (
    <section className="heroIm">
      <Navbar />
      <HeroText />
      <Login />
    </section>
  )
}

export default App
