import React from 'react'

function Home() {
  return (
    <div className='bg-[#04152d] rounded-sm shadow-md flex flex-row items-center pt-32 md:pt-24 pl-12 md:pl-20 lg:pl-20 h-auto pb-40 w-full '>
      <div className='w-1/2 md:w-3/5 md:pl-16 h-auto'>
        <p className='md:text-start  text-6xl md:text-8xl text-white font-extrabold font-[Candara]'>Hi, I'm <br></br><span className='text-[#ff6a3d]'>Vivek Chauhan</span></p>
        <p className='pt-4 md:pt-10 text-white text-xl md:text-3xl font-bold'>I'm an <u className='decoration-customUnderline decoration-4 underline'>Aspiring Data Scientist</u> | <u className='decoration-customUnderline decoration-4 underline'>Machine Learning Enthusiast</u> | <u className='decoration-customUnderline decoration-4 underline'>Crafting Insights from Data</u>.<br></br>I am a Data Science student passionate about transforming data into actionable solutions using Machine Learning and AI. </p>
      </div>
      
      <img src='/assets/norm.jpg'  className='w-[30%] mt-16 lg:mt-[4rem] md:mt-24 rounded-full h-[30%] hover:ease-in-out hover:opacity-70 hover:cursor-pointer' alt='Picture'></img>
      
      {/* <img src='src\assets\high(crop-2).JPG'  className='w-[30%] rounded-full h-[30%]' alt='Picture'></img> */}
    </div>
  )
}

export default Home