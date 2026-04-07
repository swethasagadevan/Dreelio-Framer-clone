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
          variants={{
            hidden:{opacity:0},visible:{opacity:1}
          }}
        className="bg-black text-white border rounded-full py-2 px-4 font-bold">
          Try Dreelio free
        </motion.button>
        <motion.button 
          variants={{
            hidden:{opacity:0},visible:{opacity:1}
          }}
        className="bg-transparent border-sky-100 rounded-full py-2 px-4 font-bold">
          See features
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
