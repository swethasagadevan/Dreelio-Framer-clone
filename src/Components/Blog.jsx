  import React from "react";
  import { easeInOut, motion } from "framer-motion";
  import blogMainImg from "../assets/BlogSec_1.avif";
  import blogMainprofileImg from "../assets/BlogSec_2.avif";
  import blogtabImg1 from "../assets/BlogSec_3.avif";
  import blogtabImg2 from "../assets/BlogSec_4.avif";
  import blogtabImg3 from "../assets/BlogSec_5.avif";

  const Blog = () => {
    const blogFratures = [
      {
        image: blogtabImg1,
        text: "Top 10 digital agency software",
        btntxt: "TOOLS",
      },
      {
        image: blogtabImg2,
        text: "A complete guide to project success in 2026",
        btntxt: "INSIGHT",
      },
      {
        image: blogtabImg3,
        text: "What Are Billable Hours",
        btntxt: "MANAGEMENT",
      },
    ];

      const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // delay between cards
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

    return (
      <div 
      id="blog" className="container mt-16 p-4 max-w-6xl mx-auto">
        <motion.div 
        initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{ease:[0.25, 0.1, 0.25, 1],duration:1}}
        viewport={{once:true}}
        className="text-center">
          <span className="text-xs text-gray-500 font-bold bg-white rounded-full p-2">BLOG</span>
          <h2 className="text-3xl xl:text-6xl text-center font-semibold mt-10 container max-w-2xl mx-auto">
            Ideas to level-up your freelance game
          </h2>
        </motion.div>
  <motion.div
  initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{ease:[0.25, 0.1, 0.25, 1],duration:1}}
        viewport={{once:true}}>
        <motion.div
        whileHover="hover"
          className="md:grid grid-cols-2 bg-[#F5F9FC] gap-5 p-2 rounded-3xl mt-10 mx-2"
        >
          <div className="overflow-hidden rounded-3xl">
            <motion.img
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
              }}
              transition={{ duration: 0.8, ease: easeInOut }}
              src={blogMainImg}
              className=" h-full w-full object-cover rounded-3xl"
            ></motion.img>
          </div>
          <div className="py-8 ">
            <button className="py-1 px-2 bg-[#614A44] rounded-full text-white font-bold">
              MUST READ
            </button>
            <h4 className="font-semibold text-2xl md:text-3xl xl:text-4xl mt-7">How to start a 100k creative agency in 2025</h4>
            <p className="text-gray-500 text-base md:text-lg xl:text-lg">
              Learn how to kickstart your journey into agency ownership with our
              comprehensive guide.
            </p>
            <div className="flex items-center justify-between mt-5 lg:mt-20">
              <div className="flex items-center gap-2">
                <div className="rounded-full w-[60px] h-[60px] overflow-hidden">
                  <img src={blogMainprofileImg} alt="" className="" />
                </div>
                <div>
                  <p className="font-semibold ">Dhyna Phils</p>
                  <p className="text-gray-500 text-sm">Head of Marketing</p>
                </div>
              </div>
              <div>
                <button className="bg-[#C9502E] text-white px-2 py-1 rounded-full font-bold text-xs">
                  FEATURED
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        </motion.div>


        <motion.div
        variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{once:true}}
        className="mt-10 xl:grid grid-cols-3 gap-5">
          {blogFratures.map((data, i) => (
            <motion.div 
  variants={itemVariants}
            key={i}
            className=" container"
            >
              <div className="rounded-3xl overflow-hidden h-[300px] ">
                <motion.img
                  src={data.image}
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.2 },
                  }}
                  transition={{ duration: 0.9, ease: easeInOut }}
                  className="h-full w-full object-cover"
                ></motion.img>
              </div>

              <div className="container flex justify-between items-center py-2">
                <h3 className="font-semibold text-xl text-gray-800 px-4">
                  {data.text}
                </h3>
                <div>
                  <button className={`text-white text-xs font-bold rounded-full py-1 px-3  ${i==0?'bg-blue-600':i==1?'bg-yellow-600':'bg-green-600'}`}>
                    {data.btntxt}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  export default Blog;
