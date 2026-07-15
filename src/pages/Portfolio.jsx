import React, { useState } from "react";
import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

import project1 from "../assets/project1.jfif";
import project2 from "../assets/project2.jfif";
import project3 from "../assets/project3.jfif";
import project4 from "../assets/project4.jfif";
import project5 from "../assets/project5.jfif";
import project6 from "../assets/project6.jfif";



const Portfolio = () => {
  const [active, setActive] = useState("All Project");

  const buttons = [
    "All Project",
    "React",
    "JavaScript",
    "HTML/CSS",
    "Dashboard",
    "Video",
  ];

  const portfolioData = [
    {
      id: 1,
      image: project1,
      category: "React",
      title: "E-Commerce Website",
      likes: 210,
      link: "#",
    },
    {
      id: 2,
      image: project2,
      category: "React",
      title: "Food Delivery Website",
      likes: 185,
      link: "#",
    },
    {
      id: 3,
      image: project3,
      category: "React",
      title: "Online Learning Platform",
      likes: 170,
      link: "#",
    },
    {
      id: 4,
      image: project4,
      category: "Dashboard",
      title: "Admin Dashboard",
      likes: 160,
      link: "#",
    },
    {
      id: 5,
      image: project5,
      category: "HTML/CSS",
      title: "Restaurant Website",
      likes: 140,
      link: "#",
    },
    {
      id: 6,
      image: project6,
      category: "JavaScript",
      title: "Weather App",
      likes: 125,
      link: "#",
    },
  ];

  const filteredProjects =
    active === "All Project"
      ? portfolioData
      : portfolioData.filter((item) => item.category === active);

  return (
    <section className="bg-[#212428] py-24" id="portfolio">
      <div className="max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center uppercase tracking-[4px] text-[#ff014f] text-sm font-semibold">
            Visit My Portfolio And Keep Your Feedback
          </p>

          <h2 className="text-center text-white text-5xl font-bold mt-4">
            My Portfolio
          </h2>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-14">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setActive(btn)}
              className={`px-7 py-3 rounded-lg transition-all duration-300
              ${active === btn
                  ? "bg-[#1f2226] text-[#ff014f]"
                  : "bg-[#1f2226] text-white hover:text-[#ff014f]"
                }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
          {filteredProjects.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;