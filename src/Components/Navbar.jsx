import React, { useEffect, useState } from 'react'
import {easeIn, motion} from 'framer-motion'
import { FaBars,FaLeaf } from 'react-icons/fa'

const Navbar = () => {
    const [scrolled,setScrolled] = useState(false);
    const navLinks =[{name:'Features',link:"#features"},
    {name:'Benefits',link:"#"},
    {name:'Pricing',link:"#"},
    {name:'Blog',link:"#"},
    {name:'Contact Us',link:"#"},
  ];

  useEffect(()=>{
    const handleScroll = ()=>{
        if(window.innerWidth<1024){
          setScrolled(true)
        }
        else{
          setScrolled(window.scrollY>50)
        }
    };


    window.addEventListener("scroll",handleScroll);
    window.addEventListener("resize",handleScroll)

    return ()=>{
      window.removeEventListener("scroll",handleScroll)
      window.removeEventListener("resize",handleScroll)
    }
  },[])

  return (
    <motion.nav
        initial={true}
        animate={{
            width:scrolled?"60%":"90%",
            borderRadius:scrolled?"50px":"0px",
        }}
        transition={{duration:0.5,ease:"easeInOut"}}
        className={`fixed top-1 left-0 right-0 z-50 mx-auto 
        ${scrolled ? " shadow-lg backdrop-blur bg-white/70" : "bg-transparent"}
      `}
    >
    <div className='flex items-center justify-between xl:justify-around px-2 py-4'>
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
      <div className='xl:hidden px-2 m'>
          <FaBars/>
        </div>
        
    </div>
    
    </motion.nav>
  )
}

export default Navbar
