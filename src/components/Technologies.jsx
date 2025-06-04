import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb, SiMysql } from "react-icons/si";
import { FaLinux, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: (i) => ({
        y: [-10 * (i + 1), 0],
        opacity: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            type: "spring",
            stiffness: 300,
        },
    }),
};

function Technologies() {
    const icons = [
        { Icon: FaHtml5, className: "hover:text-orange-500" },
        { Icon: FaCss3Alt, className: "hover:text-blue-500" },
        { Icon: FaJsSquare, className: "hover:text-yellow-400" },
        { Icon: FaBootstrap, className: "hover:text-purple-600" },
        { Icon: SiTailwindcss, className: "hover:text-cyan-400" },
        { Icon: FaReact, className: "text-cyan-400 hover:animate-spin" },
        { Icon: FaNodeJs, className: "text-green-500" },
        { Icon: SiExpress, className: "hover:text-white" },
        { Icon: SiMysql, className: "hover:text-blue-400" },
        { Icon: SiMongodb, className: "text-green-500" },
        { Icon: FaPython, className: "hover:text-yellow-300" },
        { Icon: FaLinux, className: "hover:text-white" },
    ];

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                Tech <span className="text-neutral-500">Stack</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center">
                <motion.div
                    className="flex flex-wrap justify-center gap-8 text-5xl text-cyan-300"
                    initial="hidden"
                    whileInView="visible"
                >
                    {icons.map(({ Icon, className }, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={iconVariants}
                            className={`transition-transform hover:scale-110 ${className}`}
                        >
                            <Icon />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Technologies;
