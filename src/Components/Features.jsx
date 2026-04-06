import React, { useRef } from 'react'
import featuresimgone from '../assets/Freatures_img_one.avif'
import {motion, useScroll, useTransform} from 'framer-motion'
import {FaChartLine, FaDollarSign, FaFileInvoice, FaList, FaRegClock,FaShapes,FaTasks } from 'react-icons/fa'
import { FaRegFilePdf } from 'react-icons/fa6'

const Features = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start end','center center']
    })

    const y = useTransform(scrollYProgress,[0,1],[0,100])

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
        image:featuresimgone,
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
        <div
        key={index} 
        id="features" 
        className='flex m-10 gap-10 flex-wrap xl:flex-nowrap xl:mx-[15%]'>
        <div 
        ref={ref}
        className={`p-[15%] xl:p-[5%] overflow-hidden bg-gradient-to-b from-blue-200 to-orange-50 rounded-2xl ${index==0?"order-2 xl:order-1":"order-2 xl:order-2"} w-full xl:w-1/2`}>
            <motion.img
            style={{y}}
            src={data.image}
            className='w-full'
            >
            </motion.img>
        </div>
        <div className={`relative py-4 w-full xl:w-1/2 ${index==0?"order-1 xl:order-2":"order-1 xl:order-1"}`}>
            <h4 className='text-md xl:text-lg text-gray-500 font-bold'>{data.title}</h4>
            <h1 className='font-semibold text-4xl xl:text-6xl py-2'>{data.heading}</h1>
            <p className='text-xl pb-4'><strong>{data.subheading}</strong>{data.desc}</p>
            <button className='bg-black text-white font-bold px-6 py-3 rounded-full'>Try Dreelio free</button>
            <div className=' mt-2 xl:absolute bottom-0'>
                <div className='flex flex-wrap'>
                    {data.buttons.map((data,index)=>(
                        <div key={index} className='border border-gray-300 rounded-full flex items-center justify-center gap-2 p-3 m-2 w-[45%]'>
                            {data.icon}{data.title}
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
        
    </div>
    ))}
    </>
  )
}

export default Features;
