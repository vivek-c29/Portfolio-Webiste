import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdCall, MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className='w-full h-[100vh] rounded-sm bg-[#04152d] text-[#9daaf2] flex items-center justify-center pb-32 pt-20'>
            <ol className=''>
                <li className='flex gap-2 items-center justify-start  mb-2 w-[110%] md:w-[140%] rounded-xl bg-gradient-to-tr from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.4s] p-4'>
                    <Link to='mailto:vivekchauhan4773@gmail.com' className='pl-12'>
                        <div className='flex flex-row items-center gap-4'>
                            <MdEmail className="text-6xl text-gray-300" />
                            <p className='text-xl md:text-2xl hover:text-gray-300'>vivekchauhan4773@gmail.com
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='flex gap-2 items-center  mb-2 justify-start w-[110%] md:w-[140%] rounded-xl bg-gradient-to-tr from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.4s] p-4'>
                    <Link to='tel:9022668304' className='pl-12'>
                        <div className='flex flex-row items-center gap-4'>
                            <MdCall className="text-6xl text-gray-200" />
                            <p className='text-xl md:text-2xl hover:text-gray-300'>9022668304
                            </p>
                        </div>
                    </Link>
                    
                </li>
                <li className='flex gap-2 items-center  mb-2 justify-start w-[110%] md:w-[140%] rounded-xl bg-gradient-to-tr from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.4s] p-4'>
                    <Link to='https://github.com/vivek-c29' className='pl-12'>
                        <div className='flex flex-row items-center gap-4'>
                            <FaGithub className="text-6xl hover:text-gray-400 text-gray-200" />
                            <p className='text-xl md:text-2xl hover:text-gray-300'>Github(vivek-c29)
                            </p>
                        </div>
                    </Link>
                    
                </li>
                <li className='flex gap-2 items-center  mb-2 justify-start w-[110%] md:w-[140%] rounded-xl bg-gradient-to-tr from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.4s] p-4'>
                    <Link to='https://linkedin.com/in/vivek-chauhan-b8ab22304' className='pl-12'>
                        <div className='flex flex-row items-center gap-4'>
                            <FaLinkedin className="text-6xl text-blue-500 hover:text-white" />
                            <p className='text-xl md:text-2xl hover:text-gray-300'>LinkedIn(Vivek Chauhan)
                            </p>
                        </div>
                    </Link>
                    
                </li>
                <li className='flex gap-2 items-center  mb-2 justify-start   w-[110%] md:w-[140%] rounded-xl bg-gradient-to-tr from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.4s] p-4'>
                    <Link to='https://instagram.com/_vivek._.chauhan_' className='pl-12'>
                        <div className='flex flex-row items-center gap-4'>
                            <FaInstagram className="text-6xl mt-1 text-pink-500 hover:text-white" />
                            <p className='text-xl md:text-2xl hover:text-gray-300'>Instagram
                            </p>
                        </div>
                    </Link>
                    
                </li>
            </ol>
        </div>
    )
}

export default Contact