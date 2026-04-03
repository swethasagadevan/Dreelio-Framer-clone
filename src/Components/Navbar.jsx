import React from 'react'
import {motion} from 'framer-motion'
import { FaBars,FaLeaf } from 'react-icons/fa'

const Navbar = () => {

  const navLinks =[{name:'Features',link:"#"},
    {name:'Benefits',link:"#"},
    {name:'Pricing',link:"#"},
    {name:'Blog',link:"#"},
    {name:'Contact Us',link:"#"},
  ];

  return (
    <div className='flex justify-center w-full fixed z-50 mt-4'>
      {/* <nav className='flex justify-evenly items-center gap-40'> */}
      <motion.nav
      initial={{y:1}}
      animate={{y:2}}
      transition={{duration:0.5}}
      className={'flex gap-40 items-center border p-4 rounded-full bg-white bg-opacity-50 backdrop-blur-md'}       
>
    <h2 className='font-bold text-xl flex items-center gap-1'><FaLeaf/> Dreelio</h2>
  <div className='flex gap-8 text-x'>
  {navLinks.map((data,index)=>(
    <a key={index} href={data.link}>{data.name}</a>
  ))}
  </div>
  <button className='bg-black text-white font-bold border rounded-full p-2'>Try Dreelio free</button>
      </motion.nav>
{/* </nav> */}
    </div>
  )
}

export default Navbar
