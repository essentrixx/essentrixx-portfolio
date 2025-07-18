import { EXPERIENCES } from "../constants/index.js";
import { motion } from "framer-motion";

function Experience() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Experience</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <p className="mb-2 text-sm">{experience.year}</p>
                        </motion.div>

                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity:0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">
                                {experience.role}
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>

                            {experience.technologies.map((tech, index) => (
                                <span
                                    key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;