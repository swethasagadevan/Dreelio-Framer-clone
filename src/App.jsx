import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Scrollerbar from './Components/Scrollerbar'
import Footer from './Components/Footer'
import Features from './Components/Features'
import {BrowserRouter,Router,Route} from 'react-router-dom'
import Benefits from './Components/Benefits'
import Review from './Components/Review'
import Pricing from './Components/Pricing'
import Community from './Components/Community'

function App() {
  return (
    <>
      <Navbar/>
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

export default App
