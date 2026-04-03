import React, { useEffect, useState } from 'react'
import {easeIn, motion} from 'framer-motion'
import { FaBars,FaLeaf } from 'react-icons/fa'

const Navbar = () => {
    const [scrolled,setScrolled] = useState(false);
    const navLinks =[{name:'Features',link:"#"},
    {name:'Benefits',link:"#"},
    {name:'Pricing',link:"#"},
    {name:'Blog',link:"#"},
    {name:'Contact Us',link:"#"},
  ];

  useEffect(()=>{
    const handleScroll = ()=>{
        setScrolled(window.scrollY>50)
    };
    console.log(handleScroll())
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <motion.nav
        initial={false}
        animate={{
            width:scrolled?"60%":"100%",
            borderRadius:scrolled?"50px":"0px",
        }}
        transition={{duration:0.5,ease:"easeInOut"}}
        className={`fixed top-1 left-0 right-0 z-50 
        ${scrolled ? "mx-auto shadow-lg backdrop-blur bg-white/70" : "bg-transparent"}
      `}
    >
    <div className='flex items-center justify-evenly gap-10 px-2 py-4'>
      <h1 className="text-xl font-bold flex gap-2 items-center"><FaLeaf/> Dreelio</h1>
      <div className="flex gap-6 text-l">
        {navLinks.map((data,index)=>(
            <a href={data.link} key={index}>{data.name}</a>
        ))}
      </div>
      <button className="bg-black font-bold text-white px-4 py-2 rounded-full">
          Try Dreelio free
        </button>
    </div>
    </motion.nav>
  )
}

export default Navbar
