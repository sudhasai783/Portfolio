import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,

} from "react-icons/fa6";


import powerbi from "../assets/PowerBI.png";
import Tableau from "../assets/Tableau.png";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import TicTacToe from "../assets/Tic_Tac_Toe.png";
import ToDo from "../assets/ToDo.png";
import DigitalClock from "../assets/DigitalClock.png";
import StopWatch from "../assets/StopWatch.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";


// import {
//   RiPythonLine,
//   RiJavascriptLine,
//   RiCplusplusLine,
//   // RiCLine,
// } from "react-icons/ri";
import { SiPowerbi, SiTableau, SiMysql, SiR, SiDatabricks } from "react-icons/si";
import { FaGit, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { IoLogoReact } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io5";
// import { DiExpressjs } from "react-icons/di";
import { TbBrandDocker } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
// import { BsMicrosoftAzure } from "react-icons/bs";
import { SiMicrosoftazure } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Sai Sudha Pidugu",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Amazon Prime Titles Data Analysis -Power BI",
    description:
      "I analyzed and visualized data from Kaggle using Power BI to provide insights through interactive dashboards.",
    image: powerbi,
    githubLink: "https://app.powerbi.com/groups/me/reports/0b33b7a6-4a9b-4aaa-99eb-abc30da5f439/700de9736a259c823083?experience=power-bi",
  },
  {
    id: 2,
    name: "British Airways Customer Review Analysis Dashboard-Tableau",
    description:
      "In this project, I analyzed and visualized British Airways customer reviews using two datasets to create an interactive dashboard that provided insights into customer satisfaction, review distribution, and sentiment analysis.",
    image:Tableau,
    githubLink: "https://public.tableau.com/app/profile/sai.sudha.pidugu/viz/Book1_17241304280340/Dashboard1",
  },
  {
    id: 3,
    name: "Excel Dashboard",
    description:
      "In the Bike Buyers Data Analysis Project, I performed data cleaning, created interactive visualizations, and developed a comprehensive dashboard to provide actionable insights into bike buyer behavior.",
    image: projectImage3,
    githubLink: "https://github.com/sudhasai783/Excel-Dashboard",
  },
  {
    id: 4,
    name: "Disney Plus Content Analysis and Visualization Project",
    description:
      "In the Disney Plus Content Analysis Project, I performed exploratory data analysis (EDA), cleaned and visualized key trends in ratings, durations, genres, release years, and geographic content diversity, providing actionable insights into the platform's content strategy.",
    image: projectImage4,
    githubLink: "https://github.com/sudhasai783/Disney-plus-EDA-using-python",
  },
  {
    id: 5,
    name: "Tic Tac Toe Game",
    description:
      "Developed an interactive Tic Tac Toe game using HTML, CSS, and JavaScript",
    image: TicTacToe,
    githubLink: "https://sudhasai783.github.io/Tic_Tac_Toe_Game/",
  },
  {
    id: 6,
    name: "Interactive To-Do List App with React",
    description:
      "I developed a React-based To-Do List App with features for adding, deleting, and reorganizing tasks, demonstrating proficiency in state management, UI design, and deployment on GitHub Pages.",
    image: ToDo,
    githubLink: "https://sudhasai783.github.io/To-Do/",
  },
  {
    id: 7,
    name: "React Digital Clock App",
    description:
      "I developed a React-based Digital Clock App that displays real-time 12-hour format updates with AM/PM, showcasing my skills in building interactive, user-friendly applications and deploying them on GitHub Pages.",
    image: DigitalClock,
    githubLink: "https://sudhasai783.github.io/Digital-Clock--React-App/",
  },
  {
    id: 8,
    name: "React Stopwatch App",
    description:
      "I created a Stopwatch App using React with real-time start, stop, and reset features, leveraging useState, useEffect, and useRef for precise time tracking and deploying it on GitHub Pages.",
    image: StopWatch,
    githubLink: "https://sudhasai783.github.io/Stop-watch-React-App/",
  },
];

export const BIO = [
  "I studied Computer Science at the University of Cincinnati, where I am currently pursuing a Master of Engineering with a focus on business intelligence, data storytelling, and data warehousing, maintaining a 4.0 GPA. Following my education, I have honed my craft and expertise in data analytics, machine learning, and full-stack development.",
  "In 2024, driven by a passion for integrating technology and innovative solutions, I expanded my skill set into full-stack development, leveraging my experience from my internship at Cognizant. There, I gained hands-on experience with technologies such as JavaScript, React, and other modern frameworks, which laid the foundation for my ability to build scalable and user-friendly applications.",
  "As a multi-disciplinary data engineer, I bring a wealth of skills and expertise to my work. From my deep understanding of SQL, Power BI, and machine learning to my proficiency in full-stack development with JavaScript and React, I possess a versatile skill set that enables me to craft impactful, data-driven solutions. My experience at LTIMindtree further enriched my ability to implement machine learning algorithms, design interactive dashboards, and build end-to-end MLOps pipelines—creating real-time, data-driven insights that help organizations make informed decisions.",
  "Whether developing full-stack applications, implementing machine learning models, or designing data visualization solutions, I am passionate about using technology to create innovative, user-centric experiences that drive business success.",
];



export const SKILLS = [
  {
    icon: <FaPython className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "Python",
    experience: "2+ years",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1+ year",
  },
  // {
  //   icon: <RiCplusplusLine className="text-4xl text-blue-600 lg:text-5xl" />,
  //   name: "C++",
  //   experience: "1+ year",
  // },
  // {
  //   icon: <RiCLine className="text-4xl text-blue-600 lg:text-5xl" />,
  //   name: "C",
  //   experience: "1+ year",
  // },
  {
    icon: <SiPowerbi className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "Power BI",
    experience: "1+ year",
  },
  {
    icon: <SiTableau className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Tableau",
    experience: "1+ year",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "MySQL",
    experience: "1.5+ years",
  },
  {
    icon: <SiR className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "R",
    experience: "1+ year",
  },
  {
    icon: <SiDatabricks className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Databricks",
    experience: "6 months",
  },
  {
    icon: <FaGit className="text-4xl text-gray-700 lg:text-5xl" />,
    name: "Git",
    experience: "2+ years",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
    experience: "1+ year",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CSS",
    experience: "1+ year",
  },
  // {
  //   icon: <IoLogoReact className="text-4xl text-cyan-400 lg:text-5xl" />,
  //   name: "React",
  //   experience: "2+ years",
  // },
  {
    icon: <IoLogoNodejs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1.5+ years",
  },
  // {
  //   icon: <DiExpressjs className="text-4xl text-gray-700 lg:text-5xl" />,
  //   name: "Express.js",
  //   experience: "1+ year",
  // },
  {
    icon: <TbBrandDocker className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Docker",
    experience: "6 months",
  },
  {
    icon: <SiKubernetes className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Kubernetes",
    experience: "6 months",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ year",
  },
  {
    icon: <SiPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <SiMicrosoftazure className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Microsoft Azure",
    experience: "6 months",
  },
  {
    icon: <FaAws className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "AWS",
    experience: "6 months",
  },

  {
    icon: <SiMicrosoftexcel className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Microsoft Excel",
    experience: "6 months",
  },

  
];


export const EXPERIENCES = [
  {
    title: "Senior Data Engineer",
    company: "LTIMindtree",
    duration: "Jun 2022 - Jul 2023",
    description: [
    "• Implemented cutting-edge machine learning algorithms resulting in a 20% increase in cross-selling opportunities and improvement in customer satisfaction.",
    "• Leveraged customer profiles and historical data to tailor recommendations, leading to a 30% rise in user engagement and 25% growth in revenue generation.",
    "• Proficiently utilized SQL for efficient data manipulation and management, handling datasets of over 100 GB in size.",
    "• Architected end-to-end MLOps pipelines on Microsoft Azure, reducing model deployment time by 60% and enhancing scalability.",
    "• Designed and implemented interactive data dashboards using Power BI, enabling stakeholders to monitor real-time performance and increasing data-driven decision-making efficiency by 40%.",
    "• Demonstrated strong problem-solving abilities and effective communication skills while collaborating with diverse teams, ensuring alignment on project objectives.",
    "• Actively contributed to cross-functional initiatives, fostering a collaborative and solution-oriented environment."
   ],
    technologies: ["SQL", "Power BI", "Python", "Azure", "Machine Learning"],
  },
  {
    title: "Programmer Analyst Trainee",
    company: "Cognizant",
    duration: "Jan 2022 - Jun 2022",
    description: 
      "• Developed full-stack solutions using Java and JavaScript, contributing to software development projects that enhanced system efficiency.\n" +
      "• Worked collaboratively with cross-functional teams to deliver high-quality software solutions, improving user experience and operational efficiency.",
    technologies: ["Java", "JavaScript", "React", "Node.js", "Git", "MongoDB", "PostgreSQL"],
  },
];



export const EDUCATION = [
  {
    degree: "Master of Engineering in Computer Science",
    institution: "University of Cincinnati, Cincinnati, Ohio, USA",
    duration: " 2023 -  2025",
    description:
      "Pursuing a Master of Engineering with a focus on Computer Science. Currently maintaining a 4.0 GPA. Areas of study include business intelligence, data storytelling, and data warehousing.",
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Chaitanya Bharathi Institute of Technology, Hyderabad, Telangana, India",
    duration: " 2018 -  2022",
    description:
      "Graduated with a Bachelor of Engineering in Information Technology. Gained knowledge in software development, database management, and programming languages. Actively participated in hackathons and technical workshops.",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/sudhasai783?tab=repositories",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/saisudha19072000/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
