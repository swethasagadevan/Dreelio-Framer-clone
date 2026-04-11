import React from 'react'
import { motion } from "framer-motion";

const ScrollingBar = (reviews) => {
  return (
    <div className="relative overflow-hidden mt-10 p-2">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 200,
                ease: "linear",
                repeat: Infinity,
              }}
              className={"flex w-max"}
            >
              {[...reviews.reviews,...reviews.reviews].map((data, index) => (
                <div key={index} className="rounded-2xl text-left bg-white py-4 px-3 mr-5 w-[350px]">
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
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#F2F0EF] via-[#F2F0EF] to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#F2F0EF] via-[#F2F0EF] to-transparent z-10" />
          </div>
  )
}

export default ScrollingBar
