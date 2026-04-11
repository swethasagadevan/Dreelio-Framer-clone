import React, { useRef } from "react";
import profileimage from "../assets/Hero_img.avif";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import cloudRightImg from '../assets/clouds_right.avif'
import cloudLeftImg from '../assets/clouds_left.avif'

const Hero = () => {
  //for text typing effect

  const textArray = [
    "Run your freelance business like a pro",
    "All-in-one platform for managing clients, projects, and payments without the chaos. From first contract to final invoice, we’ve got your back.",
  ];

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
    <div className=" bg-gradient-to-b from-blue-200 via-blue-200 to-orange-100 relative overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: "true" }}
        transition={{ staggerChildren: 0.03, delayChildren: 0.1 }}
        className="container p-4 pt-16 lg:pt-36 text-center mx-auto max-w-3xl overflow-hidden"
        // className="pt-[20%] lg:pt-[15%] xl:pt-[10%] text-center"
      >
        {textArray.map((line, i) => (
          <div key={i} className="p-4">
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
                      ease: "easeOut",
                    },
                  },
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

        <div className="grid gap-5 md:flex md:justify-center">
          <motion.button
            initial="rest"
            whileHover="hover"
            className="bg-black text-white border px-6 py-4 rounded-full font-bold"
          >
            <div className="relative overflow-hidden leading-none">
              <motion.span
                variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="block"
              >
                Try Dreelio free
              </motion.span>
              <motion.span
                variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="absolute inset-0 block"
              >
                Try Dreelio free
              </motion.span>
            </div>
          </motion.button>

          <motion.button
            initial="rest"
            whileHover="hover"
            className="bg-white/20 border-sky-50 px-6 py-4 rounded-full font-bold"
          >
            <div className="relative overflow-hidden leading-none">
              <motion.span
                variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="block"
              >
                See features
              </motion.span>
              <motion.span
                variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="absolute inset-0 block"
              >
                See features
              </motion.span>
            </div>
          </motion.button>
        </div>     
      </motion.div>
      <motion.img
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          transition={{duration:1.5,ease:[0.25, 0.1, 0.25, 1]}}
          src={cloudRightImg}
          className="absolute top-[20%] left-[85%] max-w-lg"
          >
          </motion.img>
          <motion.img
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          transition={{duration:1.5,ease:[0.25, 0.1, 0.25, 1]}}
          src={cloudLeftImg}
          className="absolute top-[20%] right-[85%] max-w-lg"
          >
          </motion.img>
      <div
        ref={ref}
        className="container p-4 max-w-5xl h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] mx-auto overflow-hidden "
        style={{ perspective: 1000 }}
      >
        <motion.img
          src={profileimage}
          alt="Dashboard image"
          style={{ rotateX, scale, y }}
          className="w-fit h-fit object-cover"
        ></motion.img>
      </div>
    </div>
  );
};

export default Hero;
