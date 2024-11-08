import React from 'react'
import Navbar from './Components/Navbar'
import Info from './Components/Info'
import Products from './Components/Products'
import Marques from './Components/Marques'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Info />
      <Marques />
      <Products />
      <Cards />
      <Footer />
    </div>
  )
}

export default App