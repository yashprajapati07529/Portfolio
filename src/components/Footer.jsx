import React from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaHeart,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1f2226] border-t border-[#2b2f35]">
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Logo / Name */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white">
                            Yash <span className="text-[#ff014f]">Kumar</span>
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Frontend Developer • React Developer
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5">

                        <a
                            href="https://github.com/yashprajapati07529"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-xl bg-[#212428] flex items-center justify-center text-gray-300 hover:bg-[#ff014f] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/yash-prajapati-8169643b4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-xl bg-[#212428] flex items-center justify-center text-gray-300 hover:bg-[#ff014f] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <FaLinkedinIn size={20} />
                        </a>

                        <a
                            href="https://instagram.com/yashprajapati07529"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-xl bg-[#212428] flex items-center justify-center text-gray-300 hover:bg-[#ff014f] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <FaInstagram size={20} />
                        </a>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#2b2f35] my-8"></div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">

                    <p>
                        © {new Date().getFullYear()}{" "}
                        <span className="text-white font-medium">
                            Yash Kumar
                        </span>
                        . All Rights Reserved.
                    </p>

                    <p className="flex items-center gap-2">
                        Made with
                        <FaHeart className="text-[#ff014f] animate-pulse" />
                        using React & Tailwind CSS
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;