import React from 'react'
import { motion } from 'framer-motion'
import BlogCard from "../components/BlogCard";
import Girl from "../assets/girl.jpg";
import Girl1 from "../assets/girl1.jpg"
import Gitl2 from "../assets/girl2.jpg"


const Blog = () => {
  return (
    <section id="blog" className="pt-24 bg-[#212428] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        id="home"
        className=' item-center bg-[#212428] flex flex-col'>
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <p className="uppercase tracking-[3px] text-[#ff014f] text-sm font-semibold">
              Visit My Blog And Keep Your Feedback
            </p>

            <h2 className="text-6xl font-bold mt-4">
              My Blog
            </h2>

          </div>

          {/* Cards */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

            <BlogCard
              image={Girl}
              category="QUOTE"
              time="4 min read"
              title="The Easiest Way to Become a Successful Writer and Authors."
            />

            <BlogCard
              image={Girl1}
              category="TECHNICIAN"
              time="4 min read"
              title="The Quickest Way to Deliver Your Message? Make It Visual."
            />

            <BlogCard
              image={Gitl2}
              category="DEVELOPMENT"
              time="4 min read"
              title="Why We Don't Have Technical Interviews for Technical Roles."
            />

          </div>

        </div>
        <div className="w-320 h-[2px] bg-black my-8 flex mx-auto mt-20"></div>
      </motion.div>
    </section>
  );
}

export default Blog