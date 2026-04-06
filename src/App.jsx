import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Scrollerbar from './Components/Scrollerbar'
import Footer from './Components/Footer'
import Features from './Components/Features'
import {BrowserRouter,Router,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <section className='bg-gradient-to-b from-gray-50 via-gray-50 to-blue-200 pt-1'>
        <Scrollerbar/>
        <Features/>
        <Footer/>
      </section>
      
      
    </>
  )
}

export default App
