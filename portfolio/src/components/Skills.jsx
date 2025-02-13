import React from 'react'

function Skills() {
    return (
        <section className='w-full h-full bg-[#04152d] pb-28 rounded-sm shadow-md'>
            <div className='p-4 pt-16 flex flex-col md:flex-row md:items-start flex-wrap justify-between items-center'>
                <div className='w-full h-full md:h-full  flex flex-wrap'>
                    <div className='w-72 h-72 ml-12 flex flex-col justify-center  items-center mt-20'>
                        <img src='\assets\html.jpeg' alt='HTML' className='rounded-full pt-4  w-auto h-auto aspect-square object-center hover:opacity-70 hover:shadow-md hover:ease-linear hover:cursor-pointer'></img>
                        <p className='pt-4 font-[Candara] text-2xl text-gray-300 font-bold shadow-md'>HTML</p>
                    </div>
                    <div className='w-72 h-72 ml-12 flex flex-col justify-center  items-center mt-20'>
                        <img src='\assets\css.jpeg' alt='CSS' className='rounded-full pt-4  w-auto h-auto aspect-square object-center hover:opacity-70 hover:shadow-md hover:ease-linear hover:cursor-pointer'></img>
                        <p className='pt-4 font-[Candara] text-2xl text-gray-300 font-bold shadow-md'>CSS</p>
                    </div>
                    <div className='w-72 h-72 ml-12 flex flex-col justify-center  items-center mt-20'>
                        <img src='\assets\js.jpeg' alt='JS' className='rounded-full pt-4  w-auto h-auto aspect-square object-center hover:opacity-70 hover:shadow-md hover:ease-linear hover:cursor-pointer'></img>
                        <p className='pt-4 font-[Candara] text-2xl text-gray-300 font-bold shadow-md'>JS</p>
                    </div>
                    <div className='w-72 h-72 ml-12 flex flex-col justify-center  items-center mt-20'>
                        <img src='\assets\c-lang.jpeg' alt='C' className='rounded-full pt-4 w-auto h-auto aspect-square object-center hover:opacity-70 hover:shadow-md hover:ease-linear hover:cursor-pointer'></img>
                        <p className='pt-4 font-[Candara] text-2xl text-gray-300 font-bold shadow-md'>C</p>
                    </div>
                    <div className='w-72 h-72 ml-12 flex flex-col justify-center  items-center mt-20'>
                        <img src='\assets\java.jpeg' alt='JAVA' className='rounded-full pt-4  w-auto h-auto aspect-square object-center hover:opacity-70 hover:shadow-md hover:ease-linear hover:cursor-pointer'></img>
                        <p className='pt-4 font-[Candara] text-2xl text-gray-300 font-bold shadow-md'>JAVA</p>
                    </div>
                    <div className='w-72 h-72 ml-12 flex flex-col justify-center  items-center mt-20'>
                        <img src='\assets\python.jpeg' alt='Python' className='rounded-full pt-4 w-auto h-auto aspect-square object-center hover:opacity-70 hover:shadow-md hover:ease-linear hover:cursor-pointer'></img>
                        <p className='pt-4 font-[Candara] text-2xl text-gray-300 font-bold shadow-md'>PYTHON</p>
                    </div>
                    <div className='w-72 h-72 ml-12 flex flex-col justify-center  items-center mt-20'>
                        <img src='\assets\sql.jpeg' alt='SQL' className='rounded-full pt-4 w-auto h-auto aspect-square object-center hover:opacity-70 hover:shadow-md hover:ease-linear hover:cursor-pointer'></img>
                        <p className='pt-4 font-[Candara] text-2xl text-gray-300 font-bold shadow-md'>SQL</p>
                    </div>

                    <div className='flex flex-col pt-16 md:mt-12 justify-between'>
                        <ol className='flex flex-col font-[Candara] gap-2 text-white'>
                            <li className='flex flex-row items-center rounded-[20px] mb-4 p-4 bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.4s] hover:cursor-pointer'>
                                <img src='\assets\fda.jpeg' alt='Fundamentals of DA' className='rounded-full h-32 w-32 '></img>
                                <div className='ml-4 mt-4'>
                                    <h2 className='text-2xl font-bold'><u className='decoration-customUnderline decoration-4 underline'>Fundamentals of Data Analysis</u></h2>
                                    <p className='text-xl font-normal mt-1'>Proficient in Fundamentals of Data Analysis, including data visualization, descriptive statistics, data preprocessing, and feature engineering.</p>
                                </div>
                            </li>
                            <li className='flex flex-row items-center rounded-[20px] mb-4 p-4 bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.4s] hover:cursor-pointer'>
                                <img src='\assets\ml.jpeg' alt='Machine Learning' className='rounded-full h-32 w-32 '></img>
                                <div className='ml-4 mt-4'>
                                    <h2 className='text-2xl font-bold'><u className='decoration-customUnderline decoration-4 underline'>Machine Learning</u></h2>
                                    <p className='text-xl font-normal mt-1'>Proficient in Machine Learning fundamentals, including exploratory data analysis (EDA), model building, and evaluation.</p>
                                </div>
                            </li>
                            <li className='flex flex-row items-center rounded-[20px] mb-4 p-4 bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.4s] hover:cursor-pointer'>
                                <img src='\assets\mis.jpeg' alt='Mathematics for IS' className='rounded-full h-32 w-32 '></img>
                                <div className='ml-4 mt-4'>
                                    <h2 className='text-2xl font-bold'><u className='decoration-customUnderline decoration-4 underline'>Mathematics For Intelligent Systems</u></h2>
                                    <p className='text-xl font-normal mt-1'>Strong foundation in Mathematics for Intelligent Systems, including Probability, Linear Algebra, and Calculus</p>
                                </div>
                            </li>

                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills