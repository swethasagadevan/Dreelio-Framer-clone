import React, { useEffect, useState } from 'react'
import { motion} from 'framer-motion'
import { FaBars,FaLeaf } from 'react-icons/fa'
import {FaX } from 'react-icons/fa6'
import { HashLink } from 'react-router-hash-link'
import ButtonFlip from './ButtonFlip'

const Navbar = () => {

    const [scrolled,setScrolled] = useState(false);
    const navLinks =[{name:'Features',link:"/#features"},
    {name:'Benefits',link:"/#benefits"},
    {name:'Pricing',link:"/#pricing"},
    {name:'Blog',link:"/blog"},
    {name:'Contact Us',link:"/contactus"},
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
      setMenuBar(prev=>!prev)
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
        className={`fixed top-1 left-0 right-0 z-50 mx-[auto]`}
    >

    <div 
    className={`flex justify-between items-center px-2 py-4 rounded-full
      ${scrolled ? " shadow-lg backdrop-blur bg-white/60" : "bg-transparent"}`}>
      <h1 
      className="sm:text-lg lg:text-xl font-bold flex gap-2 items-center"
      
      ><FaLeaf/> <HashLink smooth to="/" >Dreelio</HashLink> </h1>
      
      <div className="hidden xl:flex items-center gap-2 sm:text-sm lg:text-lg">
        {navLinks.map((data,index)=>(
            <HashLink smooth to={data.link} key={index} className='hover:bg-white/30 rounded-full py-1 px-4' >{data.name}</HashLink>
        ))}
      </div>
        <motion.button
        initial="rest"
        whileHover="hover"
        className='bg-black text-white px-6 py-4 rounded-full font-bold hidden xl:inline-block sm:text-sm lg:text-lg'
        >
          <div className='relative overflow-hidden leading-none'>
            <motion.span 
            variants={{rest:{y:0},hover:{y:"-100%"}}}
            transition={{duration:0.1,ease:"easeOut"}}
            className='block'
            >Try Dreelio free</motion.span>
            <motion.span
            variants={{rest:{y:"100%"},hover:{y:0}}}
            transition={{duration:0.1,ease:"easeOut"}}
            className='absolute inset-0 block'
            >Try Dreelio free</motion.span>
          </div>
        </motion.button>

      <div className='xl:hidden px-2' >
         {menuBar?<FaX onClick={()=>handleMenuBar()}/>: <FaBars onClick={()=>handleMenuBar()}/>}
        </div>
        
    </div>
    {menuBar && <div className='relative text-center flex flex-col w-full shadow-lg backdrop-blur bg-white/60 rounded-3xl p-5 gap-5 mt-3'>
      {navLinks.map((data,i)=>(
        <HashLink smooth to={data.link} key={i} onClick={()=>handleMenuBar()}>{data.name}</HashLink>
      ))}
      {/* <button className='bg-black text-white py-2 rounded-full '>Try Dreelio free</button> */}
      <motion.button
        initial="rest"
        whileHover="hover"
        className='bg-black text-white px-6 py-4 rounded-full'
        >
          <div className='relative overflow-hidden leading-none'>
            <motion.span 
            variants={{rest:{y:0},hover:{y:"-100%"}}}
            transition={{duration:0.1,ease:"easeOut"}}
            className='block'
            >Try Dreelio free</motion.span>
            <motion.span
            variants={{rest:{y:"100%"},hover:{y:0}}}
            transition={{duration:0.1,ease:"easeOut"}}
            className='absolute inset-0 block'
            >Try Dreelio free</motion.span>
          </div>
        </motion.button>
      
    </div>}
    
    </motion.nav>
    
    </>
  )
}

export default Navbar
