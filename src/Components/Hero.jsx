import React from 'react'
import profileimage from '../assets/Hero_img.avif'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className=' bg-gradient-to-b from-blue-200 to-orange-100 w-screen h-full'>
        <div className='px-10 pt-40 mx-[20%] text-center'>
            <h3 className='font-semibold text-7xl'>Run your freelance business like a pro</h3>
        </div>
      
      <div className='p-10 text-2xl text-gray-500 text-center mx-[25%]'>
        <h5>All-in-one platform for managing clients, projects, and payments without the chaos. From first contract to final invoice, we’ve got your back.</h5>
      </div>
        <div className='flex gap-5 justify-center items-center'>
            <button className='bg-black text-white border rounded-full p-2 font-bold'>Try Dreelio free</button>
            <button className='bg-transparent border-sky-100 rounded-full p-2 font-bold'>See features</button>
        </div>
        <motion.div
            initial={{rotateX:180 ,scale:0.5}}
            animate={{rotateX:0,scale:1}}
            transition={{duration:5}}
            className={'m-10 '}
        >
            <img src={profileimage} alt="profile image" width='50%' height='50%' className='m-auto' />
        </motion.div> 
    </div>
  )
}

export default Hero
