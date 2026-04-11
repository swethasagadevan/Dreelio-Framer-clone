import React from "react";
import { FaXTwitter,FaLinkedin,FaLeaf } from "react-icons/fa6";
import { motion } from "framer-motion";
import cloudRightImg from '../assets/clouds_right.avif'
import cloudLeftImg from '../assets/clouds_left.avif'

const Footer = () => {
  const footer_pages_link = [
    { tag: "Home", link: "#" },
    { tag: "Features", link: "#" },
    { tag: "Pricing", link: "#" },
    { tag: "Blog", link: "#" },
  ];
  const footer_information_link = [
    { tag: "Contact", link: "#" },
    { tag: "Privacy", link: "#" },
    { tag: "Terms of use", link: "#" },
    { tag: "404", link: "#" },
  ];
  return (
    
    <div className="pb-10 text-md relative overflow-hidden p-4 mx-auto">
     <motion.div 
     initial={{opacity:0,y:80}}
      whileInView={{opacity:1,y:0}}
      transition={{ease:[0.25, 0.1, 0.25, 1],duration:1}}
      viewport={{once:true}}
     className='text-center my-16 container p-4'>
        <h2 className="text-2xl xl:text-5xl text-center font-semibold my-3">Ready to get started</h2>
        <h5 className="text-base text-gray-500 mb-5">Download Dreelio for free. No credit card required.</h5>
        
        <motion.button
                            initial="rest"
                            whileHover="hover"
                            className='bg-black text-white px-6 py-4 rounded-full font-semibold w-full md:w-fit'
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
    </motion.div> 
    <div className="border rounded-3xl bg-white bg-opacity-30 container max-w-5xl mx-auto p-4 ">
      <div className="grid md:grid-cols-2 gap-10 justify-between pb-10 md:pb-20">
        <div>
          <h2 className="font-bold text-xl flex items-center gap-2 flex-wrap">
            <FaLeaf /> Dreelio
          </h2>
          <p className="text-gray-600 py-2 md:pr-36">
            Your favourite business management software. Built for early startup
            founders.
          </p>
          <div className="flex gap-3">
            <FaLinkedin className="bg-black text-white p-2 text-4xl border rounded-full"/> 
            <FaXTwitter className="bg-black text-white p-2 text-4xl border rounded-full"/>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10"> 
          <div className="flex flex-col gap-5">
            <h4 className="font-bold">PAGES</h4>
          {footer_pages_link.map((data,index) => (
            <a href={data.link} key={index} className="text-gray-600">{data.tag}</a>
          ))}
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold">INFORMATION</h4>
          {footer_information_link.map((data,index) => (
            <a href={data.link} key={index} className="text-gray-600">{data.tag}</a>
          ))}
          </div>
        </div>
      </div>

      <div className="text-center md:flex flex-wrap justify-between border-t-2 border-gray-300 mt-4 pt-4">
        <p className="text-gray-600">© 2025 Dreelio. Created by <strong>Leon Chike</strong></p>
        <p className="text-gray-600">Built in <strong>Framer</strong></p>
      </div>
    </div>

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
    </div>
  );
};

export default Footer;
