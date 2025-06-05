import logo from "../assets/robot.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 lg:p-8">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-14" src={logo} alt="logo"/>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://linkedin.com/in/ampmakhan" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/essentrixx" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/essentrixxe" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                </a>
                <a href="https://instagram.com/essentrixxe" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;