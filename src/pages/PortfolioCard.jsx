import { FiHeart, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const PortfolioCard = ({ item }) => {
    return (
        <motion.div
            whileHover={{ y: -12 }}
            transition={{ duration: 0.3 }}
            className="group bg-[#202327] rounded-2xl p-6
      shadow-[10px_10px_25px_#1b1d20,-10px_-10px_25px_#2b2e34]"
        >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover duration-500 group-hover:scale-110"
                />
            </div>

            {/* Category & Likes */}
            <div className="flex justify-between items-center mt-6">
                <span className="uppercase text-xs tracking-[2px] text-[#ff014f] font-semibold">
                    {item.category}
                </span>

                <div className="flex items-center gap-2 text-gray-400">
                    <FiHeart />
                    <span>{item.likes}</span>
                </div>
            </div>

            {/* Title */}
            <div className="flex justify-between items-start mt-5">
                <h2 className="text-white text-2xl font-semibold leading-9 group-hover:text-[#ff014f] duration-300">
                    {item.title}
                </h2>

                <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-0 group-hover:opacity-100 duration-300 mt-2 text-white hover:text-[#ff014f]"
                >
                    <FiExternalLink size={20} />
                </a>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;