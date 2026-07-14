import React from "react";
import { motion } from 'framer-motion'

import {
  FaBars,
  FaBookOpen,
  FaTv,
  FaCommentDots,
  FaWifi,
  FaSlack,
} from "react-icons/fa";

const data = [
  {
    icon: <FaBars />,
    title: "Business Strategy",
    desc: "I create modern and scalable web solutions for businesses with responsive designs.",
  },
  {
    icon: <FaBookOpen />,
    title: "App Development",
    desc: "Building fast and responsive applications using React and modern technologies.",
  },
  {
    icon: <FaTv />,
    title: "Business Strategy",
    desc: "Helping businesses grow with creative and user-friendly digital solutions.",
  },
  {
    icon: <FaCommentDots />,
    title: "Mobile App",
    desc: "Cross-platform mobile applications with beautiful UI and smooth performance.",
  },
  {
    icon: <FaWifi />,
    title: "SEO Optimisation",
    desc: "Improve website visibility with clean code and SEO-friendly development.",
  },
  {
    icon: <FaSlack />,
    title: "UX Consulting",
    desc: "Creating simple, attractive and intuitive user experiences for every project.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#212428] pt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        id="features"
        className="container mx-auto"
      >
        <div className=" container max-w-7xl mx-auto px-6">

          <p className="text-[#ff014f] uppercase tracking-[4px] text-sm font-semibold">
            Features
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-[#c4cfde] mt-3 mb-16">
            What I Do
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-[#202327] p-12 rounded-xl shadow-xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="text-5xl text-[#ff014f] mb-8">
                  {item.icon}
                </div>

                <h2 className="text-3xl font-semibold text-[#c4cfde] mb-5">
                  {item.title}
                </h2>

                <p className="text-[#878e99] leading-8 text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-320 h-[2px] bg-black my-8 flex mx-auto mt-20"></div>
      </motion.div>
    </section>
  );
};

export default Features;