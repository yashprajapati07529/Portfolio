const ResumeCard = ({
    title,
    subTitle,
    result,
    des,
}) => {
    return (
        <div className="relative pl-12 border-l border-[#2b2f34] mb-12">

            <span className="absolute left-[-7px] top-8 w-3 h-3 rounded-full bg-[#212428] border-4 border-[#ff014f]"></span>

            <div className="bg-[#1f2226] rounded-xl p-8 shadow-[10px_10px_20px_#1a1c20,-10px_-10px_20px_#262a2f] hover:-translate-y-2 duration-500">

                <div className="flex justify-between items-center">

                    <div>
                        <h2 className="text-2xl font-semibold">
                            {title}
                        </h2>

                        <p className="text-gray-400 text-sm mt-2">
                            {subTitle}
                        </p>
                    </div>

                    <span className="bg-[#2b2f34] text-[#ff014f] px-4 py-2 rounded-md text-sm">
                        {result}
                    </span>

                </div>

                <hr className="my-6 border-[#333]" />

                <p className="text-[#c4cfde] leading-8">
                    {des}
                </p>

            </div>

        </div>
    );
};

export default ResumeCard;