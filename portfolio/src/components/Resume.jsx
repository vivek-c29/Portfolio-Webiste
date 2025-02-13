import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Resume() {
    return (
        <div className='h-[100vh] p-4 flex flex-col items-center justify-center bg-[#04152d] text-white'>
            <div className='w-[55%] md:2-120 hover:opacity-70 flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.4s]'>
                <img src='\assets\resume.jpeg' alt='Resume IMG' className='rounded-full w-60 h-60 object-cover'></img>
                <h1 className='text-center mt-4 mb-4 text-gray-300'>&#11044; &#11044; &#11044; &#11044;</h1>
            </div>
            <div className='w-auto pl-6 pr-6 mt-12 rounded-xl mb-32 bg-[#4b5ecaf7] pt-4 pb-4  hover:delay-150 hover:ease-in-out bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.4s]'>
                <Link to="https://drive.google.com/file/d/1B7oashAJQlKpMNFMNF-nPVtged0we9Ax/view?usp=drive_link">

                    <button className='font-[Candara] font-bold text-[#ffffffe2] flex flex-row items-center gap-4 hover:cursor-pointer'>
                        <FaFileAlt className="text-[#e3e8f0c9] text-4xl" />
                        <p className='text-3xl '>Resume</p>
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Resume