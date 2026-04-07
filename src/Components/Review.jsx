import React from 'react'
import reviewMainImage from "../assets/user_review.avif";
import reviewimg from "../assets/review_1.avif";
import { motion } from "framer-motion";

const Review = () => {
     const reviews = [
    {
      text: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
      img: reviewimg,
      name: "Sergio Walker",
      desgination: "Agency Owner",
    },
    {
      text: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
      img: reviewimg,
      name: "Sergio Walker",
      desgination: "Agency Owner",
    },
    {
      text: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
      img: reviewimg,
      name: "Sergio Walker",
      desgination: "Agency Owner",
    },
  ];

  return (
      <div className="mt-[10%] mx-[5%] xl:mx-[15%]">
        <h2 className="text-xl xl:text-6xl text-center font-medium mx-[10%]">
          "Dreelio is by far the best agency tool I have ever used"
        </h2>
        <div className="text-center mt-10">
          <div>
            <div className="mx-auto w-[70px] h-[70px] overflow-hidden rounded-full">
              <img
                src={reviewMainImage}
                alt="user image"
                className="w-[100%] rounded-full"
              />
            </div>

            <div className="text-center">
              <h1 className="font-bold">Martha Punla</h1>
              <p className="text-gray-500">VP Marketing, Meta</p>
            </div>
          </div>

          <div className="relative overflow-hidden mt-10">
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: "50",
                direction: "linear",
                repeat: Infinity,
              }}
              className={"flex gap-5 w-[2500px]"}
            >
              {[...reviews,...reviews].map((data, index) => (
                <div key={index} className="rounded-2xl bg-white p-4">
                  <p>"{data.text}"</p>
                  <div className="flex items-center gap-5 mt-8">
                    <img
                      src={data.img}
                      alt="review image"
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <div>
                      <p className="font-bold text-gray-800">{data.name}</p>
                      <p className="text-gray-600">{data.desgination}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </div>
  )
}

export default Review
