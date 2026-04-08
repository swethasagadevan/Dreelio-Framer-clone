import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Scrollerbar from '../Components/Scrollerbar'
import Footer from '../Components/Footer'
import Features from '../Components/Features'
import Benefits from '../Components/Benefits'
import Review from '../Components/Review'
import Pricing from '../Components/Pricing'
import Community from '../Components/Community'
import Blog from '../Components/Blog'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <section className='bg-gradient-to-b from-white via-[#F4F1EE] to-blue-200 pt-1'>
        <Scrollerbar/>
        <Features/>
        <Benefits/>
        <Review/>
        <Pricing/>
        <Blog/>
        <Community/>
        <Footer/>
      </section>
    </>
  )
}

export default Home
