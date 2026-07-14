import React from 'react'
import { motion } from 'framer-motion'
import Banner from '../assets/yash.png'
import TypeWriter from './Typewriter'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-[#212428] pt-24 ">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                id="home"
                className=' item-center bg-[#212428] flex flex-col'>
                <div className='container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center h-full gap-30 md:gap-20'>
                    <div className='md:w-1/2  mb-10 md:mb-0'>
                        <p className="text-[#f4f5f6] uppercase tracking-[4px] text-sm font-semibold mb-5">
                           WELCOME TO MY PORTFOLIO
                        </p>
                        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Hi, I'm <span className='text-primary'>Yash Kumar</span></h1>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            <TypeWriter />
                        </h2>
                        <p className='text-lg md:text-xl text-white/80 mb-8'>
                            I am a passionate Full Stack Web Developer with a strong interest in building modern, responsive, and user-friendly web applications.
                        </p>
                        <div>
                            <p className='mb-5'>Find With me</p>
                            <div className='flex gap-4 mt-2'>
                                <a href="https://github.com/yashprajapati07529" target="_blank" rel="noopener noreferrer" className='py-3 px-3 bg-dark rounded-sm  transition-colors duration-300 shadow-lg shadow-white/20'>
                                    <FaGithub className='text-3xl text-white hover:text-primary transition-colors duration-300 cursor-pointer' />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='py-3 px-3 bg-dark rounded-sm  transition-colors duration-300 shadow-lg shadow-white/20'>
                                    <FaLinkedin className='text-3xl text-white hover:text-primary transition-colors duration-300 cursor-pointer' />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='py-3 px-3 bg-dark rounded-sm  transition-colors duration-300 shadow-lg shadow-white/20'>
                                    <FaInstagram className='text-3xl text-white hover:text-primary transition-colors duration-300 cursor-pointer' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center md:w-1/2 mt-35">
                        <div className="w-[350px] h-[420px] bg-[#1f232b] rounded-lg shadow-2xl shadow-white/20 ml-50"></div>
                        <img
                            src={Banner}
                            alt="Hero"
                            className="absolute bottom-0 w-[700px] h-[600px] object-contain ml-50"
                        />
                    </div>
                </div>
            <div className="w-320 h-[2px] bg-black my-8 flex mx-auto mt-20"></div>
            </motion.div >
        </section>
    )
}

export default Hero
