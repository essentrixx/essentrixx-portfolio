import { CONTACT } from "../constants/index.js";
import { motion } from "framer-motion";

function Contact() {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h2 className="my-10 text-center text-4xl">Get in <span className="text-neutral-500">Touch</span></h2>
            <div className="text-center tracking-tight">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <a href={`mail:to:${CONTACT.email}`} className="border-b">{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact;