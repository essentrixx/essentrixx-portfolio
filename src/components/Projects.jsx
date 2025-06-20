import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";

function Projects() {
    return (
        <div className="border border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <img
                                src={project.image}
                                className="mb-6 rounded"
                                width={150}
                                height={150}
                                alt={project.title}
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1}}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>

                            {project.technologies.map((technology, index) => (
                                <span
                                    key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                >
                                    {technology}
                                </span>
                            ))}

                            {project.liveDemo && (
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500"
                                >
                                    Live Demo
                                </a>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;