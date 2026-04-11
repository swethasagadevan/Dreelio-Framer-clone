import React, { useState } from 'react'
import reviewMainImage from "../assets/user_review.avif";
import { motion } from "framer-motion";
import ScrollingBar from './Common/ScrollingBar';
import reviewimg1 from "../assets/review_1.avif";
import reviewimg2 from "../assets/review_2.avif";
import reviewimg3 from "../assets/review_3.avif";
import ButtonScrollBar from './Common/ButtonScrollBar';

const Review = () => {
  const reviews = [
    {
      text: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
      img: reviewimg1,
      name: "Sergio Walker",
      desgination: "Agency Owner",
    },
    {
      text: "Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed.",
      img: reviewimg2,
      name: "Amos Chen",
      desgination: "Art Director, Pentagram",
    },
    {
      text: "We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro.",
      img: reviewimg3,
      name: "Leah Daniel",
      desgination: "Design ops Lead, teamwork",
    },
    {
      text: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
      img: reviewimg1,
      name: "Sergio Walker",
      desgination: "Agency Owner",
    },
    {
      text: "Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed.",
      img: reviewimg2,
      name: "Amos Chen",
      desgination: "Art Director, Pentagram",
    },
    
  ]
  return (
      <motion.div 
      initial={{opacity:0,y:80}}
      whileInView={{opacity:1,y:0}}
      transition={{ease:[0.25, 0.1, 0.25, 1],duration:1.5}}
      viewport={{once:true}}
      className="mt-16 container p-4 max-w-6xl mx-auto">
        <h2 className="text-xl xl:text-6xl text-center font-medium">
          "Dreelio is by far the best
        </h2>
        <h2 className="text-xl xl:text-6xl text-center font-medium">
          agency tool I have ever used"
        </h2>
        <div className="text-center mt-10">
          <div>
            <div className="mx-auto w-[70px] h-[70px] overflow-hidden rounded-full">
              <img
                src={reviewMainImage}
                alt="user image"
                className="w-[100%] rounded-full object-fit"
              />
            </div>

            <div className="text-center">
              <h1 className="font-bold">Martha Punla</h1>
              <p className="text-gray-500">VP Marketing, Meta</p>
            </div>
          </div>
          <div className='hidden md:block'>
            <ScrollingBar reviews={reviews} />
          </div>
          <div className='md:hidden'>
            <ButtonScrollBar reviews={reviews}/>
          </div>
          
        </div>
      </motion.div>
  )
}

export default Review
