import React from 'react'
import { motion } from 'framer-motion'

const ContactUs = () => {
  return (
    <div className='bg-gradient-to-b from-blue-200 via-blue-100 to-orange-100 p-4 pt-[5%]'>
    <div className='text-center p-4'>
        <span className="text-xs text-gray-500 font-bold bg-white rounded-full p-2">CONTACT US</span>
        <h2 className="text-3xl lg:text-7xl text-center font-semibold px-[10%] my-5">Let's connect</h2>
        <p className='text-gray-500 text-base lg:text-lg'>Have questions about Dreelio? Contact us </p>
        <p className='text-gray-500 text-base lg:text-lg'>and we’ll be happy to help.</p>
    </div>

        <form action="" className=' bg-[#ECF0F5] p-6 rounded-3xl container w-fit mx-auto'>
            <div className='md:grid md:grid-cols-2 gap-5'>
                <div className='mb-4'>
                    <label htmlFor="name" className='my-2'>Name</label>
                    <input type="text" placeholder='Eg. Jane Smith' className='w-full rounded-xl p-2 my-2'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className='my-2'>Email</label>
                    <input type="text" placeholder='jane@framer.com' className='w-full rounded-xl p-2 my-2'/>
                </div>
            </div>
            <label htmlFor="message" className='my-2'>Message</label>
            <textarea name="mesg" id="msg" className='w-full h-24 rounded-xl p-2 mb-4 my-2' placeholder='Enter your message...'></textarea>
            <label htmlFor="customer" className='my-2'>Are you an existing customer?</label>
            <select name="custopt" id="custopt" defaultValue="" className='text-gray-600 w-full rounded-xl p-2 mb-5 my-2'>
                <option disabled value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <div className='mb-5 mt-4'>
                <motion.button
                initial="rest"
                whileHover="hover"
                className='bg-black text-white border px-6 py-4 rounded-full font-bold w-full'
                >
                  <div className='relative overflow-hidden leading-none'>
                    <motion.span 
                    variants={{rest:{y:0},hover:{y:"-100%"}}}
                    transition={{duration:0.1,ease:"easeOut"}}
                    className='block'
                    >Send a message</motion.span>
                    <motion.span
                    variants={{rest:{y:"100%"},hover:{y:0}}}
                    transition={{duration:0.1,ease:"easeOut"}}
                    className='absolute inset-0 block'
                    >Send a message</motion.span>
                  </div>
                </motion.button>
            </div>
        </form>
    </div>
      
  )
}

export default ContactUs
