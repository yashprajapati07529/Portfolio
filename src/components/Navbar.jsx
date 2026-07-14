import { useState } from "react";
import { nav } from 'framer-motion/client'
import React from 'react'
import Logo from '../assets/yash-logo.png'
import CustomHook from "../Hooks/CustomHook";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { scrolled } = CustomHook();

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-500 ${scrolled
                ? "bg-[#212428]/80 backdrop-blur-md shadow-lg"
                : "bg-transparent"
                }`}
        >
            {/* // <nav className='fixed w-full z-50 bg-dark backdrop-blur-sm py-4 shadow-lg'> */}
            <div className='container mx-auto flex items-center justify-between px-4'>
                <div className='logo flex items-center justify-between  '>
                    <img src={Logo} alt="Logo" className="w-15 h-15 object-contain rounded-full" />
                </div>
                <div className='text-white hidden md:flex space-x-10 '>
                    <a
                        href="#home"
                        className="relative text-white/80 hover:text-[#ff014f] transition-all duration-300 group font-medium"
                    >
                        <span>HOME</span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff014f] transition-all duration-300 group-hover:w-full"></span>
                    </a>

                     <a
                        href="#features"
                        className="relative text-white/80 hover:text-[#ff014f] transition-all duration-300 group font-medium"
                    >
                        <span>FEATURES</span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff014f] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                     <a
                        href="#portfolio"
                        className="relative text-white/80 hover:text-[#ff014f] transition-all duration-300 group font-medium"
                    >
                        <span>PORTFOLIO</span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff014f] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                     <a
                        href="#resume"
                        className="relative text-white/80 hover:text-[#ff014f] transition-all duration-300 group font-medium"
                    >
                        <span>RESUME</span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff014f] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                     <a
                        href="#blog"
                        className="relative text-white/80 hover:text-[#ff014f] transition-all duration-300 group font-medium"
                    >
                        <span>BLOG</span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff014f] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                     <a
                        href="#contact"
                        className="relative text-white/80 hover:text-[#ff014f] transition-all duration-300 group font-medium"
                    >
                        <span>CONTACT</span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff014f] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>

                {/* mobile menu */}
                <div className='md:hidden'>
                    <button onClick={() => setShowMenu(!showMenu)} className='text-white focus:outline-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {
                showMenu && (

                    <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 px-4'>
                        <a onClick={() => setShowMenu(!showMenu)} href="/" className='relative text-white/80 hover:text-primary transition-colors duration-300 group font-medium'>
                            <span>HOME</span>
                        </a>
                        <a onClick={() => setShowMenu(!showMenu)} href="/Features" className='relative text-white/80 hover:text-primary transition-colors duration-300 group font-medium'>
                            <span>FEATURES</span>
                        </a>
                        <a onClick={() => setShowMenu(!showMenu)} href="/Portfolio" className='relative text-white/80 hover:text-primary transition-colors duration-300 group font-medium'>
                            <span>PORTFOLIO</span>
                        </a>
                        <a onClick={() => setShowMenu(!showMenu)} href="/Resume" className='relative text-white/80 hover:text-primary transition-colors duration-300 group font-medium'>
                            <span>RESUME</span>
                        </a>
                        <a onClick={() => setShowMenu(!showMenu)} href="/Blog" className='relative text-white/80 hover:text-primary transition-colors duration-300 group font-medium'>
                            <span>BLOG</span>
                        </a>
                        <a onClick={() => setShowMenu(!showMenu)} href="/Contact" className='relative text-white/80 hover:text-primary transition-colors duration-300 group font-medium'>
                            <span>CONTACT</span>
                        </a>
                    </div>

                )
            }
        </nav >
    )
}

export default Navbar