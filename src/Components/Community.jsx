import React from 'react'
import youtubeImg from '../assets/youtube_img.avif'
import twitterImg from '../assets/twitter_img.avif'

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
  return (
      <div className='mx-[5%] xl:mx-[15%] mt-[10%]'>
    <div className='text-center'>
        <h5 className="text-md text-gray-500 font-bold">COMMUNITY</h5>
        <h2 className="text-3xl xl:text-6xl text-center font-semibold px-[10%] mt-5">Stay in the loop</h2>
    </div>
    <div className='grid gap-10 md:grid-cols-2 mt-10'>
        {tabs.map((data,i)=>(
            <div key={i} className='bg-[#F2F7FC] p-4 rounded-3xl relative'>
                <img src={data.icon} alt="social media icon" className='py-5 w-20 h-28' />
                {/* <img className='text-5xl py-5' src={data.icon}/> */}
                <h2 className='text-2xl font-bold py-3'>{data.title}</h2>
                <p className='pb-4 text-gray-600'>{data.text}</p>
                <button className='font-bold border-2 rounded-full w-full md:w-fit px-4 py-2'>{data.btntxt}</button>
                <span className='font-bold text-gray-500 absolute top-10 right-6'>{data.users}</span>
            </div>
        ))}
    </div>
    
    </div>
  )
}

export default Community
