import './App.css'

import {BrowserRouter,Router,Route, Routes} from 'react-router-dom'

import Home from './Routes/Home'
import RouteBlog from './Routes/RouteBlog'
import RouteContactUs from './Routes/RouteContactUs'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<RouteBlog/>} />
        <Route path="/contactus" element={<RouteContactUs/>} />
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
