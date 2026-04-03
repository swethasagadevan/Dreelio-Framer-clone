import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Scrollerbar from './Components/Scrollerbar'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <section className='bg-gradient-to-b from-orange-100 to to-blue-200'>
        <Scrollerbar/>
        <Footer/>
      </section>
      
    </>
  )
}

export default App
