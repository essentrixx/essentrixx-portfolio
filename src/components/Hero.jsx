import { HERO_CONTENT } from "../constants/index.js";
import profilePic from "../assets/ampmakhan.png";
import { motion } from "framer-motion";

// motion variants
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay }
    }
});

function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-4 px-4">
            <div className="flex flex-col-reverse lg:flex-row flex-wrap items-center">

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-10 text-4xl sm:text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl xl:text-7xl text-center lg:text-left"
                        >
                            Amp Ma Khan
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl text-transparent tracking-tight text-center lg:text-left"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-6 max-w-xl py-2 font-light tracking-tight text-center lg:text-left"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 mb-10 lg:mt-16">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="profilepic"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[400px] aspect-square object-cover rounded-2xl"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;
