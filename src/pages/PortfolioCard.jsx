import { FiHeart, FiExternalLink } from "react-icons/fi";

export default function PortfolioCard({ item }) {
    return (
        <div
            className="
      group
      bg-[#202327]
      rounded-2xl
      p-6
      shadow-[10px_10px_20px_#1b1d20,-10px_-10px_20px_#2b2e34]
      hover:-translate-y-4
      duration-500
      "
        >
            <div className="overflow-hidden rounded-xl">

                <img
                    src={item.image}
                    alt=""
                    className="w-full h-56 object-cover group-hover:scale-110 duration-500"
                />

            </div>

            <div className="flex justify-between mt-6">

                <span className="uppercase text-xs tracking-widest text-[#ff014f]">
                    {item.category}
                </span>

                <div className="flex items-center gap-1 text-gray-400">

                    <FiHeart size={14} />

                    {item.likes}

                </div>

            </div>

            <div className="flex justify-between mt-5">

                <h2
                    className="
          text-white
          text-3xl
          font-semibold
          leading-10
          group-hover:text-[#ff014f]
          duration-300
          "
                >
                    {item.title}
                </h2>

                <FiExternalLink
                    className="
          text-white
          opacity-0
          group-hover:opacity-100
          duration-300
          mt-2
          "
                />

            </div>

        </div>
    );
}
