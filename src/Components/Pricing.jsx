import React, { useState } from 'react'
import blogimg1 from '../assets/blog_img_1.svg'
import { FaCheck } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Pricing = () => {
  const [billing,setBilling]=useState("monthly")

  const plansList =[{
    type:"Dreelio Basic",
    amount:{monthly:"Free"},
    listheader:"For solo use with light needs.",
    list:["Unlimited projects","Unlimited clients","Time tracking","CRM","iOS & Andriod app"],
    buttonName:"Try Freelio free"
  },{
    type:"Dreelio Premium",
    amount:{annual:"$189/mo",monthly:"$87/mo"},
    listheader:"For pro use with light needs.",
    list:["Everything in Basic","Invoices & payments","Expense tracking","Income tracking","Scheduling"],
    buttonName:"Get Started"
  },{
    type:"Dreelio Enterpise",
    amount:{monthly:"Flexible"},
    listheader:"For team use with light needs.",
    list:["Everything in Premium","Custom data import","Advanced onboarding","Hubspot integration","Timesheets"],
    buttonName:"Contact sales"
  }]

  const handleAnnuallybtn=()=>{
      setBilling("annual")
  }
  const handleMonthlybtn=()=>{
      setBilling("monthly")
  }

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
    <div id="pricing" className='mx-[5%] xl:mx-[15%] mt-[10%]'>
    <motion.div
    initial={{opacity:0,y:80}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1,ease:[0.25, 0.1, 0.25, 1]}}
    viewport={{once:true}}
  className='text-center'>
        <h5 className="text-md text-gray-500 font-bold">PRICING</h5>
        <h2 className="text-3xl xl:text-6xl text-center font-semibold px-[10%] mt-5">Simple plans</h2>
        <h2 className="text-3xl xl:text-6xl text-center font-semibold px-[10%]">for serious work</h2>
    </motion.div>

    <motion.div
    variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{once:true}} 
    className='grid grid-cols-1 xl:grid-cols-3 mt-10 gap-5 text-xl items-end'>
      {plansList.map((data,index)=>(
        <motion.div 
        variants={itemVariants}
        key={index} className={`rounded-3xl p-10 ${index==1?'bg-gradient-to-b from-blue-200 via-blue-200 to-orange-100 border-4 border-blue-400':'bg-white'}`}>
        {(index==1) && <div className='mb-4 bg-[#F3F0ED] p-1 rounded-full'>
          <button className={`text-base w-1/2 py-2 font-bold rounded-full ${billing=="annual"?'bg-white':'bg-transparent border-2'}`}
                onClick={handleAnnuallybtn}>
                  Annually
          </button>
          <button onClick={handleMonthlybtn}
           className={`text-base w-1/2 py-2 font-bold rounded-full ${billing=="monthly"?'bg-white':'bg-transparent border2'}`}>
            Monthly
            </button>
        </div>}
        <h5 className='text-gray-500 font-medium py-2'>{data.type}</h5>
        <h3 className='font-semibold text-2xl xl:text-4xl pb-2'>
          {index==1?data.amount[billing] || data.amount.monthly :data.amount.monthly}
          </h3>
        <h6 className='text-gray-500 text-base xl:text-lg py-2'>{data.listheader}</h6>
        <ul className='flex flex-col gap-5 py-2'>
          {data.list.map((data,index)=>(
            <li key={index} className='flex text-base xl:text-lg items-center gap-3 text-gray-600'><FaCheck/>{data}</li>
          ))}
          
        </ul>
        <div className='w-full'>
            <motion.button
                initial="rest"
                whileHover="hover"
                className={`w-full ${index==1?'bg-black text-white':'bg-[#F4F1EE]'} font-semibold text-base rounded-full mt-5 px-14 py-3`}
                >
                  <div className='relative overflow-hidden leading-none'>
                    <motion.span 
                    variants={{rest:{y:0},hover:{y:"-100%"}}}
                    transition={{duration:0.1,ease:"easeOut"}}
                    className='block'
                    >{data.buttonName}</motion.span>
                    <motion.span
                    variants={{rest:{y:"100%"},hover:{y:0}}}
                    transition={{duration:0.1,ease:"easeOut"}}
                    className='absolute inset-0 block'
                    >{data.buttonName}</motion.span>
                  </div>
                </motion.button>
        </div>
        
        </motion.div>
      ))}
    </motion.div>

    <div className='text-center mt-10'>
      <p className=' text-gray-500'>Trusted by 7,000+ top startups, freelancers and studios</p>
    </div>
    </div>
  )
}

export default Pricing
