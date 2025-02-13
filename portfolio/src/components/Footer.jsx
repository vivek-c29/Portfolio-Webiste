import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { MdCall, MdEmail } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='w-full bg-[#2d3748] flex flex-wrap flex-col md:flex-row px-2 md:px-4 py-2 md:py-4 h-auto pt-4'>
            <div className='w-full md:w-1/2 flex flex-col mt-6 md:mt-0 text-[#9daaf2] font-[Lucida Bright]'>
                <h2 className=' md:p-2 text-xl font-bold mb-4 ml-10'>Contact Information</h2>
                <ol className='ml-2'>
                    <li className='flex gap-2 items-center md:gap-4 mb-2'>
                        <Link to='mailto:vivekchauhan4773@gmail.com' className='text-md ml'>
                            <MdEmail className="text-2xl text-gray-300" />
                        </Link>
                        vivekchauhan4773@gmail.com
                    </li>
                    <li className='flex gap-2 items-center md:gap-4 mb-2'>
                        <Link to='tel:9022668304' className='text-md ml'>
                            <MdCall className="text-2xl text-gray-200" />
                        </Link>
                        9022668304
                    </li>
                    <li className='flex gap-2 items-center md:gap-4 mb-2'>
                        <Link to='https://github.com/vivek-c29' className='text-md ml'>
                            <FaGithub className="text-2xl hover:text-white text-gray-200" />
                        </Link>
                        Github Username(vivek-c29)
                    </li>
                    <li className='flex gap-2 items-center md:gap-4 mb-2'>
                        <Link to='https://linkedin.com/in/vivek-chauhan-b8ab22304' className='text-md ml'>
                            <FaLinkedin className="text-2xl text-blue-500 hover:text-white" />
                        </Link>
                        LinkedIn(<b>Vivek Chauhan</b>)
                    </li>
                    <li className='flex gap-2 items-center md:gap-4 mb-2'>
                        <a href='https://instagram.com/_vivek._.chauhan_' className='text-md ml'>
                            <FaInstagram className="text-2xl mt-1 text-pink-500 hover:text-white" />
                        </a>
                        Instagram
                    </li>
                </ol>
            </div>
            <div className='w-full md:w-1/2 text-[#9daaf2] font-[Lucida Bright] mt-8 md:mt-0'>
                <h2 className=' md:p-2 text-xl font-bold mb-4 ml-10'>Key Sections</h2>
                <ol className='ml-16'>
                    <li className='flex gap-2 items-center md:gap-4 mb-2 hover:underline hover:text-white hover:duration-150 hover:ease-in-out font-semibold'>
                        <NavLink to='/home' className={({ isActive }) => `cursor-pointer  ${isActive ? "text-white" : "text-[#9daaf2]"}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className='flex gap-2 text-[#9daaf2] items-center md:gap-4 mb-2 hover:underline hover:text-white hover:duration-150 hover:ease-in-out font-semibold'>
                        <NavLink to='/about' className={({ isActive }) => `cursor-pointer  ${isActive ? "text-white" : "text-[#9daaf2]"}`}>
                            About
                        </NavLink>
                    </li>
                    <li className='flex gap-2 items-center md:gap-4 mb-2 hover:underline hover:text-white hover:duration-150 hover:ease-in-out font-semibold'>
                        <NavLink to='/skills' className={({ isActive }) => `cursor-pointer  ${isActive ? "text-white" : "text-[#9daaf2]"}`}>
                            Skills
                        </NavLink>
                    </li>
                    <li className='flex gap-2 items-center md:gap-4 mb-2 hover:underline hover:text-white hover:duration-150 hover:ease-in-out font-semibold'>
                        <NavLink to='/resume' className={({ isActive }) => `cursor-pointer  ${isActive ? "text-white" : "text-[#9daaf2]"}`}>
                            Resume
                        </NavLink>
                    </li>

                </ol>
            </div>
            <div className='w-full h-auto'>
                <p className='text-center lg:text-center md:text-center text-3xl font-extrabold text-[#d1d5dbdc] px-2 py-6 hover:duration-150 mt-2 hover:text-[white] hover:ease-linear'>Passionate about Data Science and Machine Learning</p>
            </div>
            <div className='p-2 ml-4 mb-4 md:ml-2'>
                <p className='text-2xl font-[Lucida Bright] font-semibold text-[#f59f0bd9]'>
                    &copy; {new Date().getFullYear()} Vivek Chauhan. All Rights Reserved
                </p>
            </div>
        </div>

    )
}

export default Footer