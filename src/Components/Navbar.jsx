import React, { useEffect, useState } from 'react'
import {easeIn, motion} from 'framer-motion'
import { FaBars,FaLeaf } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import { FaCross, FaX } from 'react-icons/fa6'

const Navbar = () => {
  //const navigate = useNavigate()

    const [scrolled,setScrolled] = useState(false);
    const navLinks =[{name:'Features',link:"#features"},
    {name:'Benefits',link:"#benefits"},
    {name:'Pricing',link:"#"},
    {name:'Blog',link:"#"},
    {name:'Contact Us',link:"#"},
  ];

  const [menuBar,setMenuBar]=useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
        if(window.innerWidth<1024){
          setScrolled(true)
        }
        else{
          setScrolled(window.scrollY>50)
          setMenuBar(false)
        }
    };


    window.addEventListener("scroll",handleScroll);
    window.addEventListener("resize",handleScroll)

    return ()=>{
      window.removeEventListener("scroll",handleScroll)
      window.removeEventListener("resize",handleScroll)
    }
  },[])

  const handleMenuBar = ()=>{
      setMenuBar(true)
  }
  const handleMenuClose = ()=>{
      setMenuBar(false)
  }

  
  return (
    <>
    <motion.nav
        initial={true}
        animate={{
            width:scrolled?"60%":"70%",
            borderRadius:scrolled?"50px":"0px",
        }}
        transition={{duration:0.5,ease:"easeInOut"}}
        className={`fixed top-1 left-0 right-0 z-50 mx-[auto] `}
    >

    <div 
    className={`flex justify-between items-center px-2 py-4 rounded-full
      ${scrolled ? " shadow-lg backdrop-blur bg-white/60" : "bg-transparent"}`}>
      <h1 
      className="sm:text-lg lg:text-xl font-bold flex gap-2 items-center"
      
      ><FaLeaf/> Dreelio</h1>
      
      <div className="hidden xl:flex items-center gap-6 sm:text-sm lg:text-lg">
        {navLinks.map((data,index)=>(
            <a href={data.link} key={index}>{data.name}</a>
        ))}
      </div>
      <button className="bg-black font-bold text-white px-4 py-2 rounded-full hidden xl:inline-block sm:text-sm lg:text-lg">
          Try Dreelio free
      </button>
      <div className='xl:hidden px-2 m' >
         {menuBar?<FaX onClick={()=>handleMenuClose()}/>: <FaBars onClick={()=>handleMenuBar()}/>}
        </div>
        
    </div>
    {menuBar && <div className='relative text-center flex flex-col w-full shadow-lg backdrop-blur bg-white/60 rounded-3xl p-5 gap-5 mt-3'>
      {navLinks.map((data,i)=>(
        <a href={data.link} key={i}>{data.name}</a>
      ))}
      <button className='bg-black text-white py-2 rounded-full '>Try Dreelio free</button>
      
    </div>}
    
    </motion.nav>
    
    </>
  )
}

export default Navbar
