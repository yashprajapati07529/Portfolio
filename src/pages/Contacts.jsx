import React from 'react'
import ContactCard from "../components/ContactCard";

const Contacts = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-[#212428] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[3px] text-[#ff014f] text-sm font-semibold">
            Contact
          </p>

          <h2 className="text-6xl font-bold mt-3">
            Contact With Me
          </h2>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left Card */}

          <div className="lg:col-span-2">
            <ContactCard />
          </div>

          {/* Contact Form */}

          <div
            className="
            lg:col-span-3
            bg-[#1f2226]
            p-10
            rounded-2xl
            shadow-[10px_10px_25px_#1b1d20,-10px_-10px_25px_#262a2f]
            "
          >

            {/* Name & Phone */}

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="text-sm text-gray-400 uppercase">
                  Your Name
                </label>

                <input
                  type="text"
                  className="w-full mt-2 bg-[#191b1e] border border-[#2e3238] rounded-lg px-4 py-4 outline-none focus:border-[#ff014f]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 uppercase">
                  Phone Number
                </label>

                <input
                  type="text"
                  className="w-full mt-2 bg-[#191b1e] border border-[#2e3238] rounded-lg px-4 py-4 outline-none focus:border-[#ff014f]"
                />
              </div>

            </div>

            {/* Email */}

            <div className="mt-6">

              <label className="text-sm text-gray-400 uppercase">
                Email
              </label>

              <input
                type="email"
                className="w-full mt-2 bg-[#191b1e] border border-[#2e3238] rounded-lg px-4 py-4 outline-none focus:border-[#ff014f]"
              />

            </div>

            {/* Subject */}

            <div className="mt-6">

              <label className="text-sm text-gray-400 uppercase">
                Subject
              </label>

              <input
                type="text"
                className="w-full mt-2 bg-[#191b1e] border border-[#2e3238] rounded-lg px-4 py-4 outline-none focus:border-[#ff014f]"
              />

            </div>

            {/* Message */}

            <div className="mt-6">

              <label className="text-sm text-gray-400 uppercase">
                Your Message
              </label>

              <textarea
                rows="7"
                className="w-full mt-2 bg-[#191b1e] border border-[#2e3238] rounded-lg px-4 py-4 outline-none resize-none focus:border-[#ff014f]"
              ></textarea>

            </div>

            {/* Button */}

            <button
              className="
              mt-8
              w-full
              py-4
              rounded-lg
              bg-[#1b1d20]
              shadow-[5px_5px_15px_#1b1d20,-5px_-5px_15px_#262a2f]
              hover:bg-[#ff014f]
              duration-300
              font-semibold
              tracking-wider
              "
            >
              SEND MESSAGE
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contacts