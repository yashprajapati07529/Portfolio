import { FaRegClock } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const BlogCard = ({
    image,
    category,
    time,
    title,
}) => {
    return (
        <div
            className="
      bg-[#1f2226]
      rounded-2xl
      p-7
      shadow-[10px_10px_25px_#1b1d20,-10px_-10px_25px_#262a2f]
      hover:-translate-y-3
      duration-500
      group
      cursor-pointer
      "
        >
            {/* Image */}

            <div className="overflow-hidden rounded-xl">

                <img
                    src={image}
                    alt=""
                    className="
          w-full
          h-60
          object-cover
          group-hover:scale-110
          duration-500
          "
                />

            </div>

            {/* Top */}

            <div className="flex justify-between items-center mt-8">

                <h5
                    className="
          text-[#ff014f]
          uppercase
          text-sm
          tracking-wider
          font-semibold
          "
                >
                    {category}
                </h5>

                <div
                    className="
          flex
          items-center
          gap-2
          text-gray-400
          text-sm
          "
                >
                    <FaRegClock />

                    {time}
                </div>

            </div>

            {/* Title */}

            <h2
                className="
        mt-6
        text-3xl
        font-semibold
        leading-10
        text-[#c4cfde]
        group-hover:text-[#ff014f]
        duration-300
        flex
        items-start
        gap-2
        "
            >
                {title}

                <FiArrowUpRight
                    className="
          opacity-0
          translate-y-4
          group-hover:opacity-100
          group-hover:translate-y-0
          duration-300
          text-[#ff014f]
          "
                />

            </h2>

        </div>
    );
};

export default BlogCard;