import React from 'react';
// import dataanalytics2 from '' 
function About() {
  return (
    <div className='h-auto bg-[#04152d] w-full rounded-sm shadow-md pt-20 md:pt-24 px-8 pb-20 flex items-center'>
      <div className='w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6'>
        {/* Text Section */}
        <div className='w-full md:w-3/5 flex flex-col items-start'>
          <h2 className='text-white text-3xl md:text-4xl font-bold pb-4'>About Me</h2>
          <h2 className='text-[1.5rem] md:text-[2rem] text-[#ff6a3d] font-bold pb-4'>Data Science and Machine Learning</h2>
          <ol className='list-none pl-2 space-y-4'>
            <li
              className='text-lg md:text-xl text-white hover:text-gray-400 hover:duration-150 hover:ease-linear before:content-["•"] before:mr-2 before:text-[#f4db7d]'
            >
              Hi, I'm Vivek Chauhan, a second-year student, Currently pursuing a B.Tech degree in Computer Science and Engineering (Data Science) at SVKM Dwarkadas J. Sanghvi College of Engineering, I am deeply passionate about transforming raw data into actionable insights. My academic journey is driven by a fascination for numbers and an eagerness to explore how machines learn and adapt through data.
            </li>
            <li
              className='text-lg md:text-xl text-white hover:text-gray-400 hover:duration-150 hover:ease-linear before:content-["•"] before:mr-2 before:text-[#f4db7d]'
            >
              I am dedicated to mastering the principles of data analytics, data science and machine learning, with the goal of solving real-world problems and enabling informed decision-making. My learning spans across key areas such as statistical analysis, machine learning algorithms, data visualization, and Python programming, providing me with a strong foundation in data science and analytics.
            </li>
            <li
              className='text-lg md:text-xl text-white hover:text-gray-400 hover:duration-150 hover:ease-linear before:content-["•"] before:mr-2 before:text-[#f4db7d]'
            >
              With a commitment to continuous growth, my aspiration is to become a skilled Data Scientist and Machine Learning Engineer, leveraging data-driven techniques to drive innovation and efficiency across industries.
            </li>
          </ol>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-2/5 flex justify-center '>
          <img src='/assets/dataanalytics2.jpg' className='w-60 md:w-80 h-60 md:h-80 md:rounded-lg rounded-full object-cover hover:opacity-70 hover:cursor-pointer md:pt-12' alt='Data Analytics' />
        </div>
      </div>
    </div>
  );
}

export default About;
