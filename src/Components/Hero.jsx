import React, { useRef } from "react";
import profileimage from "../assets/Hero_img.avif";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  //for text typing effect

  const textArray = [
    "Run your freelance", "business like a pro",
    "All-in-one platform for managing clients, projects, and payments without the chaos. From first contract to final invoice, we’ve got your back."
  ]

  // for hero image effect
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], ["35deg", "0deg"]); // tilt - [scrollspeed,startvaluetoend]
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]); //zoom in
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]); //move up

  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    transition={{staggerChildren:0.25,delayChildren:0.02}}
    className=" bg-gradient-to-b from-blue-200 to-orange-100 px-[10%] xl:px-[20%] pt-[20%] xl:pt-[10%] text-center">
        {textArray.map((line,i)=>(
          <motion.div
            key={i}
            variants={{
              hidden:{opacity:0},visible:{opacity:1}
            }}
            className={`${i==2?'sm:text-l lg:text-xl px-[10%] text-gray-500 my-5':'font-bold text-4xl md:text-5xl xl:text-7xl'}`}
          >
            {line}
          </motion.div>
        ))}

  
      <div className="grid gap-5 md:flex md:justify-center ">

        <motion.button
                initial="rest"
                whileHover="hover"
                className='bg-black text-white border px-6 py-4 rounded-full font-bold'
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

        <motion.button
                initial="rest"
                whileHover="hover"
                className='bg-white/20 border-sky-50 px-6 py-4 rounded-full font-bold'
                >
                  <div className='relative overflow-hidden leading-none'>
                    <motion.span 
                    variants={{rest:{y:0},hover:{y:"-100%"}}}
                    transition={{duration:0.1,ease:"easeOut"}}
                    className='block'
                    >See features</motion.span>
                    <motion.span
                    variants={{rest:{y:"100%"},hover:{y:0}}}
                    transition={{duration:0.1,ease:"easeOut"}}
                    className='absolute inset-0 block'
                    >See features</motion.span>
                  </div>
                </motion.button>

      </div>
      
      <div
        ref={ref}
        className="h-[200px] sm:h-[300px] lg:h-[400px] mt-3 overflow-hidden relative"
        style={{ perspective: 1000 }}
      >
        <motion.img
          src={profileimage}
          alt="profile image"
          style={{ rotateX, scale, y }}
          className="m-auto w-[100%]"
        ></motion.img>
      </div>
      </motion.div>
  );
};

export default Hero;
