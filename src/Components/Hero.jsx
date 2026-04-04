import React, { useRef } from 'react'
import profileimage from '../assets/Hero_img.avif'
import {motion, useScroll, useTransform} from 'framer-motion'

const Hero = () => {

  const ref =useRef(null)

  const {scrollYProgress} =useScroll(
    {
      target:ref,
      offset:["start end","center center"]
    }
  )

  const rotateX = useTransform(scrollYProgress,[0,1],["25deg","0deg"]) // tilt - [scrollspeed,startvaluetoend]
  const scale =useTransform(scrollYProgress,[0,1],[0.8,1]) //zoom in
  const y =useTransform(scrollYProgress,[0,1],[100,0]) //move up

  return (
    <div className=' bg-gradient-to-b from-blue-200 to-orange-100 w-screen h-full'>
        <div className='px-10 pt-32 sm:mx-[10%] lg:mx-[20%] text-center'>
            <h3 className='font-bold sm:text-5xl lg:text-7xl'>Run your freelance business like a pro</h3>
        </div>
      
      <div className='p-5 sm:text-xl lg:text-2xl text-gray-500 text-center sm:mx-[10%] lg:mx-[20%]'>
        <h5>All-in-one platform for managing clients, projects, and payments without the chaos. From first contract to final invoice, we’ve got your back.</h5>
      </div>
        <div className='flex gap-5 justify-center items-center'>
            <button className='bg-black text-white border rounded-full p-2 font-bold'>Try Dreelio free</button>
            <button className='bg-transparent border-sky-100 rounded-full p-2 font-bold'>See features</button>
        </div>
        <div  ref={ref} className='h-[400px] mt-5 overflow-hidden' style={{perspective:1000}}>
          <motion.img 
        src={profileimage} alt="profile image"  
        style={{rotateX,scale,y}}
        className='m-auto w-[50%]' 
        >
        </motion.img> 
        </div>
        
    </div>
  )
}

export default Hero
