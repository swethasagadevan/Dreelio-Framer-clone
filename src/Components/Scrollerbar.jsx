import React from 'react'
import {motion} from 'framer-motion'

const Scrollerbar = () => {
    const startupList = ["Milano","luminous","Theo","Amsterdam","Savannah"]
  return (
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
  )
}

export default Scrollerbar
