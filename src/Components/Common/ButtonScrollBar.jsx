import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import {FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRightArrowLeft, FaCircleArrowRight, FaRegCircleRight} from 'react-icons/fa6'

const ButtonScrollBar = (reviews) => {
    console.log(reviews.reviews)
    const [active,setActive]= useState(0)

    const prev =()=>{
        if (active>0){
            setActive(prev=>prev-1)
        }
    }
    const next =()=>{
        if (active<reviews.reviews.length-1){
            setActive(prev=>prev+1)
        }
    }
  return (
        <div className='relative container p-4 mx-auto'>
            <div className='overflow-hidden'>
<motion.div 
animate={{
            x: -active * (300 + 16),
          }}
          transition={{ type: "spring", stiffness: 10 }}
className='flex w-max'>
          {[...reviews.reviews,...reviews.reviews].map((data, index) => (
                <div key={index} className="rounded-2xl text-left bg-white py-4 px-2 mr-5 w-[300px]">
                  <p>"{data.text}"</p>
                  <div className="flex items-center gap-5 mt-8">
                    <img
                      src={data.img}
                      alt="review image"
                      className="w-[50px] h-[50px] rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-base text-gray-800">{data.name}</p>
                      <p className=" text-sm text-gray-600">{data.desgination}</p>
                    </div>
                  </div>
                </div>
              ))}
              </motion.div>
              </div>
            <button onClick={prev}
         hidden ={active==0}
        className='bg-gray-900/30 rounded-full w-fit p-4 text-2xl absolute left-4 top-1/2 -translate-y-1/2 -translate-x-1/2'>
           <FaAngleLeft/>
        </button>
        <button  onClick={next}
        hidden={active === reviews.reviews.length - 1}
         className='bg-gray-900/30 rounded-full w-fit p-4 absolute right-4 top-1/2 -translate-y-1/2  translate-x-1/2 text-2xl'>
           <FaAngleRight /> 
        </button>
        </div>
  )
}

export default ButtonScrollBar
