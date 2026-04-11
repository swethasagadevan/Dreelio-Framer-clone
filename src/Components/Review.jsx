import React from 'react'
import reviewMainImage from "../assets/user_review.avif";
import reviewimg1 from "../assets/review_1.avif";
import reviewimg2 from "../assets/review_2.avif";
import reviewimg3 from "../assets/review_3.avif";
import { motion } from "framer-motion";

const Review = () => {
     const reviews = [
    {
      text: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
      img: reviewimg1,
      name: "Sergio Walker",
      desgination: "Agency Owner",
    },
    {
      text: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
      img: reviewimg2,
      name: "Jane Jay",
      desgination: "Project Manager, Google",
    },
    {
      text: "Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed.",
      img: reviewimg3,
      name: "Amos Chen",
      desgination: "Art Director, Pentagram",
    },
    {
      text: "We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro.",
      img: reviewimg1,
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
      text: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
      img: reviewimg2,
      name: "Jane Jay",
      desgination: "Project Manager, Google",
    },
    {
      text: "Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed.",
      img: reviewimg3,
      name: "Amos Chen",
      desgination: "Art Director, Pentagram",
    },
    {
      text: "We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro.",
      img: reviewimg1,
      name: "Leah Daniel",
      desgination: "Design ops Lead, teamwork",
    },
  ]

  return (
      <motion.div 
      initial={{opacity:0,y:80}}
      whileInView={{opacity:1,y:0}}
      transition={{ease:[0.25, 0.1, 0.25, 1],duration:1}}
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

          <div className="relative overflow-hidden mt-10 p-2">
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: "200",
                direction: "linear",
                repeat: Infinity,
              }}
              className={"flex w-max"}
            >
              {[...reviews,...reviews].map((data, index) => (
                <div key={index} className="rounded-2xl text-left bg-white py-8 px-3 mr-5 w-[350px]">
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
        </div>
      </motion.div>
  )
}

export default Review
