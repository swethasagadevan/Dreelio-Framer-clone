import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Blog from '../Components/Blog'
import Community from '../Components/Community'

const RouteBlog = () => {
  return (
    <>
      <Navbar/>
      <div className='bg-gradient-to-b from-blue-200 via-orange-100 to-blue-200 pt-[1%]'>
        <Blog/>
        <Footer/>  
        </div>
    </>
  )
}

export default RouteBlog
