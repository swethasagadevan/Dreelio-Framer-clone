import React from 'react'
import youtubeImg from '../assets/youtube_img.avif'
import twitterImg from '../assets/twitter_img.avif'
import { motion } from 'framer-motion'

const Community = () => {
    const tabs =[{
        icon:twitterImg,
        title:"X/Twitter",
        text:"Stay updated on new features and discover how others are using Dreelio.",
        btntxt:"Follow us",
        users:"15.2K FOLLOWERS"
    },{
        icon:youtubeImg,
        title:"YouTube",
        text:"Tips, tutorials, and in-depth feature guides to inspire and enhance your Dreelio workflow.",
        btntxt:"Subcribe",
        users:"32K FOLLOWERS"
    }]

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
      <div className='mx-[5%] xl:mx-[15%] mt-[10%]'>
    <motion.div 
    initial={{opacity:0,y:80}}
      whileInView={{opacity:1,y:0}}
      transition={{ease:[0.25, 0.1, 0.25, 1],duration:1}}
      viewport={{once:true}}
    className='text-center'>
        <h5 className="text-md text-gray-500 font-bold">COMMUNITY</h5>
        <h2 className="text-3xl xl:text-6xl text-center font-semibold px-[10%] mt-5">Stay in the loop</h2>
    </motion.div>
    <motion.div
    variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{once:true}}
    className='grid gap-10 md:grid-cols-2 mt-10'>
        {tabs.map((data,i)=>(
            <motion.div
            variants={itemVariants}
            key={i} className='bg-[#F2F7FC] p-4 rounded-3xl relative'>
                <img src={data.icon} alt="social media icon" className='py-5 w-20 h-28' />
                {/* <img className='text-5xl py-5' src={data.icon}/> */}
                <h2 className='text-2xl font-semibold py-3'>{data.title}</h2>
                <p className='pb-4 text-gray-600'>{data.text}</p>
                
                <motion.button
                            initial="rest"
                            whileHover="hover"
                            className=' px-6 py-4 font-semibold border-2 rounded-full w-full md:w-fit'
                            >
                              <div className='relative overflow-hidden leading-none'>
                                <motion.span 
                                variants={{rest:{y:0},hover:{y:"-100%"}}}
                                transition={{duration:0.1,ease:"easeOut"}}
                                className='block'
                                >{data.btntxt}</motion.span>
                                <motion.span
                                variants={{rest:{y:"100%"},hover:{y:0}}}
                                transition={{duration:0.1,ease:"easeOut"}}
                                className='absolute inset-0 block'
                                >{data.btntxt}</motion.span>
                              </div>
                            </motion.button>
                <span className='font-semibold text-gray-500 absolute top-10 right-6'>{data.users}</span>
            </motion.div>
        ))}
    </motion.div>
    
    </div>
  )
}

export default Community
