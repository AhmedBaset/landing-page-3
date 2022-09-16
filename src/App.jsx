import React from 'react'
import About from './Components/About'
import Features from './Components/Features'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import Plans from './Components/Plans'
import TryIt from './Components/TryIt'
import Team from "./Components/Team"
import Footer from './Components/Footer'
import Quotation from './Components/Quotation'

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Features />
      <TryIt />
      <Plans />
      <Team />
      <Quotation />
      <Footer />
    </div>
  )
}

export default App
