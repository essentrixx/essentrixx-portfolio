import profileImg from "../assets/profileImg.jpg";
import { ABOUT_TEXT } from "../constants/index.js";
import { motion } from "framer-motion";

function About() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[400px] aspect-square object-cover rounded-2xl" src={profileImg} alt="aboutimg" />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="text-center lg:text-left max-w-xl py-2 mt-14">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;