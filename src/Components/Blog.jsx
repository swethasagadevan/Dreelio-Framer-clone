import React, { useRef } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
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

  return (
    <div id="blog" className="mx-[5%] xl:mx-[15%] mt-[10%]">
      <div className="text-center">
        <span className="text-xs text-gray-500 font-bold bg-white rounded-full p-2">BLOG</span>
        <h2 className="text-3xl xl:text-6xl text-center font-semibold px-[10%] mt-10">
          Ideas to level-up your freelance game
        </h2>
      </div>

      <motion.div
        whileHover="hover"
        className="md:grid grid-cols-2 bg-[#F5F9FC] gap-5 p-2 rounded-3xl border border-red-400 mt-10"
      >
        <div className="overflow-hidden rounded-3xl">
          <motion.img
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 },
            }}
            transition={{ duration: 0.9, ease: easeInOut }}
            src={blogMainImg}
            className=" h-full w-full object-cover rounded-3xl"
          ></motion.img>
        </div>
        <div className="py-8 px-6">
          <button className="py-1 px-2 bg-[#614A44] rounded-full text-white font-bold">
            MUST READ
          </button>
          <h4 className="font-bold text-3xl mt-7">How to start a 100k</h4>
          <h4 className="font-bold text-3xl mb-5">creative agency in 2025</h4>
          <p className="text-gray-500 text-lg">
            Learn how to kickstart your journey into agency ownership with our
            comprehensive guide.
          </p>
          <div className="flex items-center justify-between mt-40">
            <div className="flex items-center gap-5">
              <div className="rounded-full w-[60px] h-[60px] overflow-hidden">
                <img src={blogMainprofileImg} alt="" className="" />
              </div>
              <div>
                <p className="font-bold ">Dhyna Phils</p>
                <p className="text-gray-500">Head of Marketing</p>
              </div>
            </div>
            <div>
              <button className="bg-[#C9502E] text-white px-2 py-1 rounded-full font-bold text-sm">
                FEATURED
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-10 xl:grid grid-cols-3 gap-5">
        {blogFratures.map((data, i) => (
          <motion.div key={i} whileHover="hover">
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

            <div className="flex justify-between items-center py-2 gap-5">
              <h3 className="font-semibold text-xl text-gray-800">
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
      </div>
    </div>
  );
};

export default Blog;
