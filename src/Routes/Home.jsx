import React from 'react'

const Home = () => {
  return (
    <>
      <Hero/>
      <section className='bg-gradient-to-b from-[#F9F8F8] via-[#F4F1EE] to-blue-200 pt-1'>
        <Scrollerbar/>
        <Features/>
        <Benefits/>
        <Review/>
        <Pricing/>
        <Community/>
        <Footer/>
      </section>
    </>
  )
}

export default Home
