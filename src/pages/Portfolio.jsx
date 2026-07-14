import React, { useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {

  const [active, setActive] = useState("All");

  const buttons = [
    "All",
    "External Link",
    "Gallery",
    "Image",
    "Standard",
    "Video",
  ];

  return (

    <section className="bg-[#212428] py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        id="portfolio"
        className="container mx-auto"
      >
        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}

          <p className="text-center uppercase tracking-[3px] text-[#ff014f] text-sm font-semibold">
            Visit My Portfolio And Keep Your Feedback
          </p>

          <h1 className="text-center text-white text-5xl font-bold mt-4">
            My Portfolio
          </h1>

          {/* Filter Buttons */}

          <div className="flex justify-center flex-wrap gap-5 mt-14">

            {buttons.map((btn) => (

              <button
                key={btn}
                onClick={() => setActive(btn)}
                className={`px-7 py-3 rounded-lg text-sm font-semibold transition duration-300

              ${active === btn
                    ? "bg-[#1f2226] text-[#ff014f] shadow-[5px_5px_15px_#1a1c1f,-5px_-5px_15px_#2a2d32]"
                    : "bg-[#1f2226] text-white hover:text-[#ff014f] shadow-[5px_5px_15px_#1a1c1f,-5px_-5px_15px_#2a2d32]"
                  }`}
              >
                {btn}
              </button>
            ))}

          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;