import React, { useRef } from 'react'
import featuresimgone from '../assets/Freatures_img_one.avif'
import featuresimgtwo from '../assets/Freatures_img_two.avif'
import {motion, useScroll, useTransform} from 'framer-motion'
import {FaChartLine, FaDollarSign, FaFileInvoice, FaList, FaRegClock,FaShapes,FaTasks } from 'react-icons/fa'
import { FaRegFilePdf } from 'react-icons/fa6'

const Features = () => {

    const featureList = [{
        image:featuresimgone,
        title:"PROJECT MANAGEMENT",
        heading:"Keep every project moving forward",
        subheading:"Plan, assign, and deliver your work",
        desc:"- all in one place. With smart task tracking, deadlines, and real-time progress, you stay organized and clients stay confident.",
        buttons:[
            {icon:<FaTasks/>,title:"Tasks"},
            {icon:<FaRegClock/>,title:"Time tracking"},
            {icon:<FaList/>,title:"Timesheets"},
            {icon:<FaRegFilePdf/>,title:"Reports"},
        ]
    },
    {
        image:featuresimgtwo,
        title:"FINANCIAL MANAGEMENT",
        heading:"Track income, get paid, stress less",
        subheading:"Create branded invoices,",
        desc:" log expenses, and keep tabs on your earnings. Whether you bill hourly or per project, everything’s automated and tax-friendly.",
        buttons:[
            {icon:<FaFileInvoice/>,title:"Invoicing"},
            {icon:<FaDollarSign/>,title:"Budgets"},
            {icon:<FaChartLine/>,title:"Forecasting"},
            {icon:<FaShapes/>,title:"Invoicing"},
        ]
    }
]
  return (
    
    <>
    {featureList.map((data,index)=>(
        <motion.div
        key={index} 
        id="features" 
        initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true,margin:"-150px"}}
        transition={{duration: 1,ease: [0.25, 0.1, 0.25, 1]}}
        className='container p-4 flex gap-10 flex-wrap xl:flex-nowrap mt-16 max-w-6xl mx-auto'>
        <div 
        className={`py-10 px-28 overflow-hidden bg-gradient-to-b from-blue-200 via-blue-200 to-[#F0E2D7] rounded-2xl ${index==0?"order-2 xl:order-1":"order-2 xl:order-2"} xl:w-1/2`}>
            <motion.img
            initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true,margin:"-150px"}}
        transition={{duration: 1,ease: [0.25, 0.1, 0.25, 1]}}
            src={data.image}
            className=''
            >
            </motion.img>
        </div>
        <div className={`relative m-2 w-full xl:w-1/2 ${index==0?"order-1 xl:order-2":"order-1 xl:order-1"}`}>
            <h4 className='md:text-sm lg:text-lg text-gray-500 font-bold'>{data.title}</h4>
            <h1 className='font-semibold text-xl lg:text-4xl py-3'>{data.heading}</h1>
            <p className='text-md lg:text-xl pb-4 text-gray-700'><strong>{data.subheading}</strong>{data.desc}</p>
            <motion.button
                            initial="rest"
                            whileHover="hover"
                            className='bg-black text-white px-6 py-4 rounded-full font-bold mb-4'
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

            <div className='mt-4 xl:absolute bottom-0 left-0 right-0'>
                <div className='grid grid-cols-2 p-2'>
                    {data.buttons.map((data,index)=>(
                        <div key={index} className='border border-gray-300 rounded-full px-4 py-2 m-1 flex items-center gap-2'>
                            {data.icon}{data.title}
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
        
    </motion.div>
    ))}
    </>
  )
}

export default Features;
