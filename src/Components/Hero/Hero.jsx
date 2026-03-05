import vector from "../../assets/vector1.png";

const Hero = ({ inProgressCount = 0, resolvedCount = 0 }) => {
    return (
        <section className="w-full flex items-center justify-center p-4 sm:p-6 md:p-8 mt-10 sm:mt-16 md:mt-20">
            <div className="w-full container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
                    {/* In-Progress Card */}
                    <div
                        className="w-full h-48 md:h-56 lg:h-64 flex rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(147, 51, 234, 0.95), rgba(88, 28, 135, 0.95))",
                        }}
                    >
                        {/* Left Vector - Normal */}
                        <div
                            className="w-full h-full bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url(${vector})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                opacity: "0.7",
                            }}
                        ></div>

                        {/* Center Content */}
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                                In-Progress
                            </div>
                            <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-2 sm:mt-3 md:mt-4">
                                {inProgressCount}
                            </div>
                        </div>

                        {/* Right Vector - Flipped */}
                        <div
                            className="w-full h-full bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url(${vector})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                opacity: "0.7",
                                transform: "scaleX(-1)", // This flips the right side
                            }}
                        ></div>
                    </div>

                    {/* Resolved Card */}
                    <div
                        className="w-full h-48 md:h-56 lg:h-64 flex rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(34, 197, 94, 0.95), rgba(13, 148, 136, 0.95))",
                        }}
                    >
                        {/* Left Vector - Normal */}
                        <div
                            className="w-full h-full bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url(${vector})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                opacity: "0.7",
                            }}
                        ></div>

                        {/* Center Content */}
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                                Resolved
                            </div>
                            <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-2 sm:mt-3 md:mt-4">
                                {resolvedCount}
                            </div>
                        </div>

                        {/* Right Vector - Flipped */}
                        <div
                            className="w-full h-full bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url(${vector})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                opacity: "0.7",
                                transform: "scaleX(-1)", // This flips the right side
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
