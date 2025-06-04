import { CONTACT } from "../constants/index.js";

function Contact() {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h2 className="my-10 text-center text-4xl">Get in <span className="text-neutral-500">Touch</span></h2>
            <div className="text-center tracking-tight">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href="#" className="border-b-1">{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact;