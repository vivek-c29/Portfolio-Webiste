import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const handleMenu = () => {
        setMenu(!menu)
    }

    const [menu, setMenu] = useState(false)
    return (
        <header>
            <div className='w-full h-[6rem] shadow-lg bg-[#04152d] flex items-center justify-between md:justify-around lg:justify-around relative'>
                <div className='px-2 ml-4'>
                    <div className='border-[2px] mb-2  rounded-md w-28 border-white'></div>
                    <img className='w-28  h-[2.75rem]' src='/assets/pf2.jpeg' alt='logo'>
                    </img>
                    <div className='border-[2px] mt-2 rounded-md w-28 border-white'></div>
                </div>
                <div className='hidden md:flex '>
                    <ul className=' justify-end flex gap-2 px-2 md:gap-6 text-xl lg:gap-6 text-[#9daaf2] font-bold font-[Georgia]'>

                        <li >
                            <NavLink to='/home' className={({ isActive }) => `cursor-pointer hover:ease-in hover:duration-150 hover:text-gray-400 ${isActive ? "text-gray-400" : "text-[#9daaf2]"}`}>
                                Home
                            </NavLink>
                        </li>

                        <li >
                            <NavLink to='/about' className={({ isActive }) => `cursor-pointer hover:ease-in hover:duration-150 hover:text-gray-400 ${isActive ? "text-gray-400" : "text-[#9daaf2]"}`}>
                                About
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/skills' className={({ isActive }) => ` cursor-pointer hover:ease-in hover:duration-150 hover:text-gray-400 ${isActive ? "text-gray-400" : "text-[#9daaf2]"}`}>
                                Skills
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/resume' className={({ isActive }) => `cursor-pointer hover:ease-in hover:duration-150 hover:text-gray-400 ${isActive ? "text-gray-400" : "text-[#9daaf2]"}`}>
                                Resume
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/contact' className={({ isActive }) => `cursor-pointer hover:ease-in hover:duration-150 hover:text-gray-400 ${isActive ? "text-gray-400" : "text-[#9daaf2]"}`}>
                                Contact
                            </NavLink>
                        </li>


                    </ul>
                </div>
                <div className='md:hidden lg:hidden'>
                    <FiAlignJustify className='w-8 h-8 mr-4 text-white cursor-pointer duration-100' onClick={handleMenu} />
                </div>
            </div>
            {menu && (
                <div className="bg-[#1a2238] absolute flex right-2 top-[6rem] flex-col items-center w-36 h-auto justify-end py-4 md:hidden rounded-md">
                    <ul className="flex flex-col  justify-end w-auto gap-2 font-[Georgia]">
                        <li >
                            <NavLink to='/home' className={({ isActive }) => `cursor-pointer hover:ease-in hover:duration-150 hover:text-gray-400 ${isActive ? "text-gray-400" : "text-[#9daaf2]"}`}>
                                Home
                            </NavLink>
                        </li>

                        <li >
                            <NavLink to='/about' className={({ isActive }) => `cursor-pointer hover:ease-in hover:duration-150 hover:text-gray-400 ${isActive ? "text-gray-400" : "text-[#9daaf2]"}`}>
                                About
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/skills' className={({ isActive }) => `cursor-pointer hover:ease-in hover:duration-150 hover:text-gray-400 ${isActive ? "text-gray-400" : "text-[#9daaf2]"}`}>
                                Skills
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/resume' className={({ isActive }) => `cursor-pointer hover:ease-in hover:duration-150 hover:text-gray-400 ${isActive ? "text-gray-400" : "text-[#9daaf2]"}`}>
                                Resume
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/contact' className={({ isActive }) => `cursor-pointer hover:ease-in hover:duration-150 hover:text-gray-400 ${isActive ? "text-gray-400" : "text-[#9daaf2]"}`}>
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header