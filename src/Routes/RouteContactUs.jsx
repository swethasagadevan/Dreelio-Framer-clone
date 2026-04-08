import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Community from '../Components/Community'
import Review from '../Components/Review'

const RouteContactUs = () => {
  return (
      <>
      <Navbar/>
       <div className='bg-gradient-to-b from-blue-200 via-orange-100 to-blue-200 pt-[1%]'>
        <Community/>
        <Review/>
        <Footer/>
       </div>
      
      </>
  )
}

export default RouteContactUs
