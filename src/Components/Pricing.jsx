import React, { useState } from 'react'
import blogimg1 from '../assets/blog_img_1.svg'
import { FaCheck } from 'react-icons/fa6'

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

  return (
    <div className='mx-[5%] xl:mx-[15%] mt-[10%]'>
    <div className='text-center'>
        <h5 className="text-md text-gray-500 font-bold">PRICING</h5>
        <h2 className="text-3xl xl:text-6xl text-center font-semibold px-[10%] mt-10">Simple plans</h2>
        <h2 className="text-3xl xl:text-6xl text-center font-semibold px-[10%]">for serious work</h2>
    </div>
    <div className='grid grid-cols-1 xl:grid-cols-3 mt-10 gap-5 text-xl items-end'>
      {plansList.map((data,index)=>(
        <div key={index} className={`rounded-3xl p-10 ${index==1?'bg-gradient-to-b from-blue-200 via-blue-200 to-orange-100 border-4 border-blue-400':'bg-white'}`}>
        {(index==1) && <div className='mb-4 bg-[#F3F0ED] p-2 rounded-full'>
          <button className={`w-1/2 py-2 rounded-full ${billing=="annual"?'bg-white':'bg-transparent border-2'}`}
                onClick={handleAnnuallybtn}>
                  Annually
          </button>
          <button onClick={handleMonthlybtn}
           className={`w-1/2 py-2 rounded-full ${billing=="monthly"?'bg-white':'bg-transparent border2'}`}>
            Monthly
            </button>
        </div>}
        <h5 className='text-gray-500 font-bold py-2'>{data.type}</h5>
        <h3 className='font-bold text-4xl pb-2'>
          {index==1?data.amount[billing] || data.amount.monthly :data.amount.monthly}
          </h3>
        <h6 className='text-gray-500 py-2'>{data.listheader}</h6>
        <ul className='flex flex-col gap-5 py-2'>
          {data.list.map((data,index)=>(
            <li key={index} className='flex items-center gap-3 text-gray-600'><FaCheck/>{data}</li>
          ))}
          
        </ul>
        <div className='w-full'>
          <button 
          className={`w-full ${index==1?'bg-black text-white':'bg-[#F4F1EE]'} font-medium rounded-full mt-5 px-14 py-3`}>
            {data.buttonName}
            </button>
        </div>
        
        </div>
      ))}
    </div>
    </div>
  )
}

export default Pricing
