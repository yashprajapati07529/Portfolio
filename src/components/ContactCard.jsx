import ContactImage from "../assets/contact.png";

import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const ContactCard = () => {
    return (
        <div
            className="
      bg-[#1f2226]
      p-8
      rounded-2xl
      shadow-[10px_10px_25px_#1b1d20,-10px_-10px_25px_#262a2f]
      hover:-translate-y-2
      duration-500
      "
        >
            {/* Image */}

            <div className="overflow-hidden rounded-xl">

                <img
                    src={ContactImage}
                    alt="contact"
                    className="
          w-full
          h-72
          object-cover
          rounded-xl
          hover:scale-105
          duration-500
          "
                />

            </div>

            {/* Name */}

            <h2 className="text-4xl font-bold mt-8">
                Yash Prajapati
            </h2>

            <p className="text-gray-400 mt-2">
                Full Stack Web Developer
            </p>

            {/* Description */}

            <p className="text-[#c4cfde] leading-8 mt-6">
                I am available for freelance work and full-time opportunities.
                Feel free to contact me if you have any project or collaboration in mind.
            </p>

            {/* Contact Info */}

            <div className="mt-8 space-y-3">

                <p className="text-[#c4cfde]">
                    <span className="font-semibold text-white">
                        Phone :
                    </span>{" "}
                    +91 8780005274
                </p>

                <p className="text-[#c4cfde]">
                    <span className="font-semibold text-white">
                        Email :
                    </span>{" "}
                    yashprajapati07529@gmail.com
                </p>

            </div>

            <h4 className="mt-10 uppercase tracking-widest text-gray-400 text-sm">
                Find With Me
            </h4>

            <div className="flex gap-5 mt-6">
                <a
                    href="https://www.facebook.com/share/1GiyxFPi4q/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#212428] rounded-lg hover:bg-[#ff014f] duration-300"
                >
                    <FaFacebookF className="text-2xl text-white" />
                </a>
                <a
                    href="https://www.linkedin.com/in/yash-prajapati-8169643b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#212428] rounded-lg hover:bg-[#ff014f] duration-300"
                >
                    <FaLinkedinIn className="text-2xl text-white" />
                </a>

                <a
                    href="#"
                    className="p-4 bg-[#212428] rounded-lg hover:bg-[#ff014f] duration-300"
                >
                    <FaTwitter className="text-2xl text-white" />
                </a>
            </div>
        </div>
    );
};

export default ContactCard;