import React, { useRef } from "react";
import profileimage from "../assets/Hero_img.avif";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  //for text typing effect

  const textArray = [
    "Run your freelance business like a pro",
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
    <div className="bg-gradient-to-b from-blue-200 via-blue-200 to-orange-100">
    <motion.div 
  initial="hidden"
  animate="visible"
  viewport={{once:"true"}}
  transition={{ staggerChildren: 0.03, delayChildren: 0.1 }}
  className="md:px-[10%] xl:px-[15%] pt-[25%] lg:pt-[10%] text-center"
>
  {textArray.map((line, i) => (
    <div key={i} className={`my-3 xl:mx-[10%] xl:my-5 ${i==1 ?'px-[7%]':''}`}>
      
      {line.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut"
              }
            }
          }}
          className={`inline-block  ${
            i == 1
              ? "sm:text-l lg:text-xl mr-1 text-gray-500"
              : "font-semibold mr-[0.2em] text-4xl md:text-6xl xl:text-7xl"
          }`}
        >
          {word}
        </motion.span>
      ))}

    </div>
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
    
      </motion.div>
      <div
        ref={ref}
        className="h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] mt-10 overflow-hidden relative mx-[10%]"
        style={{ perspective: 1000 }}
      >
        <motion.img
          src={profileimage}
          alt="profile image"
          style={{ rotateX, scale, y }}
          className="w-fit h-fit object-contain"
        ></motion.img>
      </div>
      </div>
  );
};

export default Hero;
