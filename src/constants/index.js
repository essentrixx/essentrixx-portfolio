import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";

export const HERO_CONTENT = `I'm a passionate full stack developer with a strong interest in building reliable and scalable web applications. I've been actively seeking to apply my skills and gain hands-on experience with both front end and back end technologies through self learning and building projects. On the front end, I use React.js to create smooth and interactive user interfaces. On the back end, I work with Node.js, along with databases like MySQL and MongoDB. I enjoy solving problems creatively and proactively, and I’m always curious about new technologies as a lifelong learner.`

export const ABOUT_TEXT = `I'm driven by a genuine passion for learning and growth. I thrive in collaborative environments where I can contribute to a team, learn from experienced developers, and tackle real-world challenges. I enjoy solving problems creatively and proactively to deliver quality solutions. As a lifelong learner, I'm naturally curious about new technologies and adapt quickly to new tools, frameworks, and workflows. Outside of coding, I stay active by exploring new technologies and participating in developer communities and tech webinars to stay updated with industry trends.`

export const EXPERIENCES = [
    {
        year: "2025 - Present",
        role: "Aspiring Full Stack Developer",
        description: `Currently focusing on React.js and backend technologies to become a well rounded full stack developer through consistent learning and hands-on practice.`,
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python"],
    },
    {
        year: "2024 - 2025",
        role: "Aspiring Backend Developer",
        description: `Focused on learning backend development with Node.js and Express.js. Gaining practical experience with MongoDB, MySQL, designing RESTful APIs, and implementing JWT-based authentication.`,
        technologies: ["Javascript", "ES6", "Node.js", "Express.js", "MongoDB", "MySQL", "Linux"],
    },
    {
        year: "Nov 2023 - 2024",
        role: "Beginner in web development",
        description: `Practiced by building small web applications using HTML, CSS, and vanilla JavaScript to strengthen core web development skills.`,
        technologies: ["HTML", "CSS", "Javascript"],
    },
];

export const PROJECTS = [
    {
        title: "Portfolio Website",
        image: project1,
        description: "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Tailwind"],
    },
    {
        title: "Task Manager Application",
        image: project2,
        description: "A task manager application for performing CRUD operations and building RESTful APIs with JWT-based authentication.",
        technologies: ["Javascript", "Node.js", "Express.js", "MongoDB", "HBS", "JWT"],
    },
    {
        title: "Chef Claude - Recipe Application",
        image: project3,
        description: "Built a simple recipe app to explore state handling, form input, and AI-powered recipe suggestions based on user input.",
        technologies: ["HTML", "CSS", "React"],
    },
    {
        title: "Real Time Chat Application",
        image: project4,
        description: "Built and deployed a real time chat app with private rooms using Socket.IO, enabling real-time communication through simple room-based messaging.",
        technologies: ["HTML", "CSS", "Node.js", "WebSocket", "Socket.IO"],
        liveDemo: "https://essentrixx-chat-app.onrender.com"
    },
    {
        title: "Assembly Endgame",
        image: project5,
        description: "Built and deployed a fun assemble endgame project using React.js, showcasing component-based architecture, state management with hooks, and responsive design.",
        technologies: ["HTML", "CSS", "React"],
        liveDemo: "https://assembly-endgame-blqj.onrender.com"
    },
];

export const CONTACT = {
    address: "PA place, Lak Hok, Mueang Pathumthani, Pathumthani 12000",
    phoneNo: "+959 690715015 ",
    email: "ampmakhan77@gmail.com",
};
