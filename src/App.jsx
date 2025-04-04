import React from 'react'
import {CallToAction, Companies, Footer, Hero, Info, Navbar, Services, Testimonial,} from './Component/index'

const App = () => {
  return (
    <div className="h-[250vh] w-full flex flex-col items-center bg-neutral-300 text-white ">
      
        <Navbar/>
        <Hero/>
        <Companies/>
        <Services/>
        <Testimonial/>
        <CallToAction/>
        <Info/>
        <Footer/>
    </div>
  )
}

export default App