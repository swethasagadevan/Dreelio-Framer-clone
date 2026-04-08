import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Community from '../Components/Community'
import Review from '../Components/Review'
import ContactUs from '../Components/ContactUs'

const RouteContactUs = () => {
  return (
      <>
      <Navbar/>
      <ContactUs/>
       <div className='bg-gradient-to-b from-white via-[#F2F0EF] to-blue-200 pt-[1%]'>
        <Community/>
        <Review/>
        <Footer/>
       </div>
      
      </>
  )
}

export default RouteContactUs
