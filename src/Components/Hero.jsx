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

  const rotateX = useTransform(scrollYProgress, [0, 1], ["25deg", "0deg"]); // tilt - [scrollspeed,startvaluetoend]
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]); //zoom in
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]); //move up

  return (
    <>
    <motion.div 
    initial="hidden"
    animate="visible"
    transition={{staggerChildren:0.005}}
    className=" bg-gradient-to-b from-blue-200 to-orange-100 px-[20%] pt-[10%] text-center">
        {textArray[0].split("").map((char,i)=>(
          <motion.span
            key={i}
            variants={{
              hidden:{opacity:0},visible:{opacity:1}
            }}
            className="font-bold sm:text-5xl lg:text-7xl"
          >
            {char}
          </motion.span>
        ))}
        <div className="sm:text-l lg:text-xl px-[10%] text-gray-500 my-5">
        {textArray[1].split("").map((char,i)=>(
          <motion.span
          key={i}
          variants={{
            hidden:{opacity:0},visible:{opacity:1}
          }}
          >
            {char}
          </motion.span>
        ))}

      </div>
  
      <div className="flex gap-5 justify-center items-center">
        <motion.button 
          variants={{
            hidden:{opacity:0},visible:{opacity:1}
          }}
        className="bg-black text-white border rounded-full p-2 font-bold">
          Try Dreelio free
        </motion.button>
        <motion.button 
          variants={{
            hidden:{opacity:0},visible:{opacity:1}
          }}
        className="bg-transparent border-sky-100 rounded-full p-2 font-bold">
          See features
        </motion.button>
      </div>
      
      <div
        ref={ref}
        className="h-[400px] mt-3 overflow-hidden relative"
        style={{ perspective: 1000 }}
      >
        <motion.img
          src={profileimage}
          alt="profile image"
          style={{ rotateX, scale, y }}
          className="m-auto w-[90%]"
        ></motion.img>
      </div>
      </motion.div>
   </>
  );
};

export default Hero;
