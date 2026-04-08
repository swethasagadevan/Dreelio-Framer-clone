import React from 'react'
import { motion } from 'framer-motion'

const ContactUs = () => {
  return (
    <div className='bg-gradient-to-b from-blue-200 via-blue-100 to-orange-100 pt-[10%] px-[5%] pb-[5%] xl:px-[20%]'>
    <div className='text-center'>
        <h5 className="text-md text-gray-500 font-bold">CONTACT US</h5>
        <h2 className="text-5xl xl:text-7xl text-center font-semibold px-[10%] my-5">Let's connect</h2>
        <p className='text-gray-500 text-lg'>Have questions about Dreelio? Contact us </p>
        <p className='text-gray-500 text-lg'>and we’ll be happy to help.</p>
    </div>

    <div className='xl:mx-[15%] mt-[5%] bg-[#ECF0F5] p-10 rounded-3xl'>
        <form action="">
            <div className='xl:grid xl:grid-cols-2 gap-5'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Eg. Jane Smith' className='w-full rounded-xl p-3 mb-5'/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='jane@framer.com'className='w-full rounded-xl p-3'/>
                </div>
            </div>
            <label htmlFor="message">Message</label>
            <textarea name="mesg" id="msg" className='w-full h-24 rounded-xl p-3 mb-5' placeholder='Enter your message...'></textarea>
            <label htmlFor="customer">Are you an existing customer?</label>
            <select name="custopt" id="custopt" defaultValue="" className='text-gray-600 w-full rounded-xl p-3 mb-5'>
                <option disabled value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <div className='mb-5'>
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
                    >Try Dreelio free</motion.span>
                    <motion.span
                    variants={{rest:{y:"100%"},hover:{y:0}}}
                    transition={{duration:0.1,ease:"easeOut"}}
                    className='absolute inset-0 block'
                    >Try Dreelio free</motion.span>
                  </div>
                </motion.button>
            </div>
        </form>
    </div>
      
    </div>
  )
}

export default ContactUs
