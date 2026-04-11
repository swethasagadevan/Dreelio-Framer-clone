import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import featureimg from '../assets/feature.avif'

const Scrollerbar = () => {

    const ref = useRef()

    const { scrollYProgress } =useScroll({
      target:ref,
      offset:["start 80%","center center"]
    })

    const scale =useTransform(scrollYProgress,[0,0.7],[1.5,1])

    const startupList = ["Milano","luminous","Theo","Amsterdam","Savannah","Theo","Amsterdam","Savannah"]
  return (
    <>
    <motion.div 
    initial={{opacity:0,y:80}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:1,ease:[0.25, 0.1, 0.25, 1]}}
    className='relative overflow-hidden text-center my-10 container mx-auto max-w-6xl p-4'> 
      <p>Trusted by 7,000+ top startups, freelancers and studios</p>
      {/* <div className="relative overflow-hidden"> */}
  <div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-white via-white to-transparent z-10" />
  <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-white via-white to-transparent z-10" />

      <motion.div
        animate={{x:["0%","-100%"]}}
        transition={{
            duration:"90",
            ease:"linear",
            repeat:Infinity
        }}
        className={' flex gap-10 container my-2'}
      >
        {[...startupList,...startupList].map((data,index)=>(
            <span key={index} className='text-2xl font-extrabold text-gray-500'>{data}</span>
        ))}
      </motion.div>


    </motion.div>
    <motion.div
    initial={{opacity:0,y:80}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:1.5,ease:[0.25, 0.1, 0.25, 1]}}
    className='container relative text-center p-4 max-w-6xl mx-auto mt-10' >
        <p className='text-sm lg:text-base text-gray-500 font-bold py-4'>SEAMLESS ACROSS DEVICES</p>
        <h2 className='font-bold text-2xl lg:text-5xl py-2'>Work from anywhere,</h2>
        <h2 className='font-bold text-2xl lg:text-5xl pb-4'>stay in sync</h2>
        <div  ref={ref}  style={{perspective:1000}} className='container overflow-hidden mt-4 border max-h-lvh rounded-3xl'>
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

        <div className='bg-white/30 backdrop-blur absolute left-1/2 xl:left-1/2 -translate-x-1/2 xl:-translate-x-1/2 bottom-10 rounded-full grid grid-cols-2 gap-4 p-2'>
        <motion.button
                        initial="rest"
                        whileHover="hover"
                        className='bg-black text-white px-6 py-4 rounded-full font-semibold'
                        >
                          <div className='relative overflow-hidden leading-none'>
                            <motion.span 
                            variants={{rest:{y:0},hover:{y:"-100%"}}}
                            transition={{duration:0.1,ease:"easeOut"}}
                            className='block'
                            >Mobile App</motion.span>
                            <motion.span
                            variants={{rest:{y:"100%"},hover:{y:0}}}
                            transition={{duration:0.1,ease:"easeOut"}}
                            className='absolute inset-0 block'
                            >Moblie App</motion.span>
                          </div>
                        </motion.button>
                        <motion.button
                                        initial="rest"
                                        whileHover="hover"
                                        className='bg-white/40 text-white px-6 py-4 rounded-full font-semibold'
                                        >
                                          <div className='relative overflow-hidden leading-none'>
                                            <motion.span 
                                            variants={{rest:{y:0},hover:{y:"-100%"}}}
                                            transition={{duration:0.1,ease:"easeOut"}}
                                            className='block'
                                            >Web App</motion.span>
                                            <motion.span
                                            variants={{rest:{y:"100%"},hover:{y:0}}}
                                            transition={{duration:0.1,ease:"easeOut"}}
                                            className='absolute inset-0 block'
                                            >Web App</motion.span>
                                          </div>
                                        </motion.button>
        </div>

    </motion.div>
    </>
  )
}

export default Scrollerbar
