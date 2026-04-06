import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import featureimg from '../assets/feature.avif'

const Scrollerbar = () => {

    const ref = useRef()

    const { scrollYProgress } =useScroll({
      target:ref,
      offset:["start 80%","center center"]
    })

    const scale =useTransform(scrollYProgress,[0,1],[1.3,1])

    const startupList = ["Milano","luminous","Theo","Amsterdam","Savannah"]
  return (
    <>
    <div className='relative overflow-hidden text-center m-[10%]'> 
      <p>Trusted by 7,000+ top startups, freelancers and studios</p>
      {/* <div className="relative overflow-hidden"> */}
  <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
  <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        animate={{x:["0%","-100%"]}}
        transition={{
            ease:'linear',
            duration:20,
            repeat:Infinity
        }}
        className={'flex gap-10 mx-[20%] my-2'}
      >
        {[...startupList,...startupList].map((data,index)=>(
            <span key={index} className='text-2xl font-extrabold text-gray-500'>{data}</span>
        ))}
      </motion.div>


    </div>
    <div className='relative text-center' >
        <span className='text-l text-gray-500 font-bold'>SEAMLESS ACROSS DEVICES</span>
        <h2 className='font-bold text-5xl py-2'>Work from anywhere,</h2>
        <h2 className='font-bold text-5xl'>stay in sync</h2>
        <div ref={ref}  style={{perspective:1000}} className='overflow-hidden w-[65%] mt-4 mx-auto border rounded-3xl'>
        <motion.img
        src={featureimg}
        alt="work feature image"
        className=''
        style={{
          scale
        }}  
        >
        </motion.img>
        </div>

        <div className='bg-white/30 backdrop-blur absolute left-1/2 -translate-x-1/2 bottom-10 rounded-full flex justify-evenly gap-4 p-2'>
          <button className=' rounded-full bg-black text-white py-3 px-6 font-bold'>Mobile App</button>
          <button className=' rounded-full bg-white/5 backdrop-blur text-white py-3 px-6 font-bold'>Web App</button>
        </div>

    </div>
    </>
  )
}

export default Scrollerbar
