import React, { useRef } from "react";
import blogimg1 from "../assets/blog_img_1.svg";
import list1 from "../assets/blogList1.svg";
import list2 from "../assets/blogList2.svg";
import list3 from "../assets/blogList3.svg";
import list4 from "../assets/blogList4.svg";
import list5 from "../assets/blogList5.svg";
import list6 from "../assets/blogList6.svg";
import list7 from "../assets/blogList7.svg";
import list8 from "../assets/blogList8.svg";
import { motion, useScroll, useTransform } from "framer-motion";

import { FaHandshake, FaLanguage, FaLayerGroup } from "react-icons/fa6";


const Benefits = () => {
  const ref =useRef()
   const {scrollYProgress} =useScroll({
    target:ref,
    offset: ["start end", "end start"], 
   })

   const xLeft = useTransform(scrollYProgress, [0,1.5], ["0%", "-100%"]);
   const xRight =useTransform(scrollYProgress,[0,1.5],["-150%","100%"]);

  const BenefitsList1 = [
    {
      title: "Smart, flexible, and built around your business workflow",
      img: [blogimg1],
      heading: "Personalize every detail,",
      text: "From branding and interface layout to colors and menus, so Dreelio feels like an extension of your brand.",
    },
    {
      title: "Integrates seamlessly with the tools you already use",
      img: [list1, list2, list3, list4, list5, list6, list7, list8],
      heading: "Seamless integrations.",
      text: "Plug Dreelio into the tools you love. Set up automations, sync your data, and make your systems work smarter together.",
    },
  ];

  const benefitsList2 = [
    {
      icon: <FaHandshake />,
      title: "Collaborate in realtime",
      text: "Keep every conversation in sync use comments, messages, and project chats to stay on the same page.",
    },
    {
      icon: <FaLanguage />,
      title: "Speaks your language",
      text: "Set your language, currency, time, and date preferences for a seamless experience that feels truly local.",
    },
    {
      icon: <FaLayerGroup />,
      title: "View things your way",
      text: "Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar.",
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
    <div id="benefits" className="container p-4 mt-16 max-w-6xl mx-auto">
      <motion.div 
    initial={{opacity:0,y:80}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:1,ease:[0.25, 0.1, 0.25, 1]}}
     className="text-center">
        <h5 className="text-md xl:text-lg text-gray-500 font-bold">FEATURES</h5>
        <h2 className="font-semibold text-3xl xl:text-5xl py-2">
          Built for freelancers,
        </h2>
        <h2 className="font-semibold text-3xl xl:text-5xl py-2">
          powered by simplicity
        </h2>
      </motion.div>
      <motion.div 
      variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{once:true}}
      className="grid xl:grid-cols-2 gap-5 mt-5">
        {BenefitsList1.map((data, index) => (
          <motion.div ref={ref}
            variants={itemVariants}
            viewport={{once:true}}
            key={index}
            className="bg-[#F0EAE5] p-6 rounded-2xl flex gap-5 flex-wrap flex-grow max-w-fit"
          >
            <h3 className="text-xl font-semibold py-5">{data.title}</h3>
            
            {index==1 && <><div className="overflow-hidden">
              <motion.div style={{x:xLeft}} className="flex gap-2">
                {[...data.img,...data.img].map((dataimg, index) => (
                    <img key={index} src={dataimg} />
              ))}
              </motion.div>
            </div>
            <div  className=" overflow-hidden">
              <motion.div style={{x:xRight}} 
              className="flex gap-2 ">
                {[...data.img,...data.img].map((dataimg, index) => (
                    <img key={index} src={dataimg} />
              ))}
              </motion.div>
            </div></>}

            {index==0 && <div className="mx-auto"> 
                {data.img.map((dataimg, index) => (
                    <img key={index} src={dataimg} />
              ))}
            </div>}

            <span className="text-base text-gray-500">
              <span className="font-semibold">{data.heading}</span>
              {data.text}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
      variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{once:true}}
      className="grid xl:grid-cols-3 mt-5 gap-5">
        {benefitsList2.map((data, index) => (
          <motion.div
          variants={itemVariants}
          viewport={{once:true}}
          key={index} className="bg-[#F0EAE5] flex flex-col rounded-2xl p-10 flex-grow">
            <div className="bg-white rounded-full w-fit p-2">
              <p className="text-3xl">{data.icon}</p>
            </div>
            <h2 className="font-bold text-xl my-3">{data.title}</h2>
            <p className="text-lg text-gray-600">{data.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Benefits;
