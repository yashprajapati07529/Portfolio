import { useState } from "react";
import { motion } from 'framer-motion'
import ResumeCard from "../components/ResumeCard";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (

    <section id="resume" className="pt-24 bg-[#212428] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        id="home"
        className=' item-center bg-[#212428] flex flex-col'>
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <p className="text-[#ff014f] uppercase tracking-[3px] text-sm font-semibold">
              2 + YEARS OF LEARNING
            </p>

            <h2 className="text-5xl font-bold mt-3">
              My Resume
            </h2>
          </div>

          {/* Tabs */}

          <div className="grid md:grid-cols-4 grid-cols-2 mt-16 bg-[#1d1f23] rounded-xl overflow-hidden shadow-2xl">

            <button
              onClick={() => setActiveTab("education")}
              className={`py-6 transition ${activeTab === "education"
                ? "bg-[#1f2226] text-[#ff014f]"
                : "hover:text-[#ff014f]"
                }`}
            >
              Education
            </button>

            <button
              onClick={() => setActiveTab("skills")}
              className={`py-6 transition ${activeTab === "skills"
                ? "bg-[#1f2226] text-[#ff014f]"
                : "hover:text-[#ff014f]"
                }`}
            >
              Professional Skills
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`py-6 transition ${activeTab === "experience"
                ? "bg-[#1f2226] text-[#ff014f]"
                : "hover:text-[#ff014f]"
                }`}
            >
              Experience
            </button>

            <button
              onClick={() => setActiveTab("interview")}
              className={`py-6 transition ${activeTab === "interview"
                ? "bg-[#1f2226] text-[#ff014f]"
                : "hover:text-[#ff014f]"
                }`}
            >
              Interview
            </button>

          </div>

          {/* Education */}

          {activeTab === "education" && (
            <div className="grid lg:grid-cols-2 gap-16 mt-20">

              <div>

                <p className="text-[#ff014f] text-sm">
                  2022 - 2026
                </p>

                <h2 className="text-4xl font-bold mb-10">
                  Education Quality
                </h2>

                <ResumeCard
                  title="Full Stack Web Development"
                  subTitle="Red & White Multimedia Education (2025 - Present)"
                  result="A+"
                  des="Learning HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB while building real-world responsive applications."
                />

                <ResumeCard
                  title="Higher Secondary Education"
                  subTitle="Arihant Acadamy School (2024 - 2025)"
                  result="85%"
                  des="Completed higher secondary education while improving analytical thinking and problem-solving skills."
                />

                <ResumeCard
                  title="Secondary School"
                  subTitle=" Gorvement Secondary School (2022 - 2023)"
                  result="89%"
                  des="Completed secondary education with a strong interest in technology and software development."
                />

              </div>

              <div>

                <p className="text-[#ff014f] text-sm">
                  2025 - Present
                </p>

                <h2 className="text-4xl font-bold mb-10">
                  Job Experience
                </h2>

                <ResumeCard
                  title="Frontend Developer Projects"
                  subTitle="React • Tailwind CSS"
                  result="NEW"
                  des="Built responsive portfolio websites and landing pages using React and Tailwind CSS."
                />

                <ResumeCard
                  title="Backend Learning"
                  subTitle="Node.js • Express.js"
                  result="API"
                  des="Created REST APIs with authentication and CRUD operations using MongoDB."
                />

                <ResumeCard
                  title="Personal Projects"
                  subTitle="Self Practice"
                  result="LIVE"
                  des="Developing full-stack applications while continuously improving coding and UI design skills."
                />

              </div>

            </div>
          )}

        </div>
        <div className="w-320 h-[2px] bg-black my-8 flex mx-auto mt-20"></div>
      </motion.div>

    </section>
  );
};

export default Resume;