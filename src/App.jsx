import { useState } from 'react'
import HeaderNav from './component/HeaderNav'
import Hero from './component/Hero'
import AboutMe from './component/AboutMe'
import User from './component/User'
import Service from './component/Service'
import Work from './component/Work'
import News from './component/News'
import Newsletter from './component/Newsletter'
import Footer from './component/Footer'
import './App.css'
function App() {

  return (
    <>
    <HeaderNav/>
    <Hero/>
    <AboutMe/>
    <User/>
    <Service/>
    <Work/>
    <News/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
