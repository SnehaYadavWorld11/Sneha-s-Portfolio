import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

import smartbridge from "./assets/company_logo/smartbridge.png";
import vitbhopaltcs from "./assets/company_logo/vitbhopaltcs.jpeg";
import mpboardd from "./assets/company_logo/mpboardd.png";

import vitbhopal from "./assets/education_logo/vitbhopal.jpeg";
import mpboard from "./assets/education_logo/mpboard.png";

import ShopEZ from "./assets/work_logo/ShopEZ.png";
import Kaarya from "./assets/work_logo/Kaarya.png";
import tictactoe from "./assets/work_logo/tictactoe.png";
import snapscout from './assets/work_logo/snapscout.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Springboot", logo: springbootLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: smartbridge,
    role: "SmartBridge Virtual Internship",
    company: "SMARTBRIDGE",
    date: "Jan 2025 - Apr 2025",
    desc: "Developed full-stack e-commerce application (ShopEZ) built using the MERN stack (MongoDB, Express, React, Node.js) as part of the Smart Bridge project. This application provides a seamless shopping experience for users, allowing them to browse, filter, and purchase products, as well as manage orders. It includes both user and admin functionalities.",
    skills: [
      "HTML",
      "Tailwind",
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    id: 1,
    img: vitbhopaltcs,
    role: "Volunteer – TCS Campus Placement Drive",
    company: "Tata Consultancy Services",
    date: "3 Days at VIT Bhopal",
    desc: "Volunteered during the TCS campus placement drive at VIT Bhopal, ensuring smooth student coordination.Directed candidates to the correct HR panels, helping streamline the interview process efficiently.",
    skills: [
      "Professionalism",
      "Teamwork & Collaboration",
      "Quick Decision-Making",
      "- Communication Skills",
    ],
  },
  {
    id: 2,
    img: mpboardd,
    role: "High-Achieving Student & District Topper",
    company: "",
    date: "Class 10 & Class 12",
    desc: "Achieved District Topper (Girls) status in Class 12, showcasing exceptional academic commitment and subject mastery.Ranked among the Top 10 District Students in Class 10, demonstrating consistent high performance and strong foundational knowledge.",
    skills: ["Self-Discipline", "strategic study habits", "Time Management", "Focus & Consistency", "Strategic Planning"],
  },
];

export const education = [
  {
    id: 0,
    img: vitbhopal,
    school: "VIT BHOPAL University",
    date: "Sept 2022 - Apr 2026*",
    grade: "9.28 CGPA",
    desc: "Currently pursuing coursework in Data Structures, Web Development, Data Base Management Syastem and Software Engineering. Actively involved in tech clubs and hands-on projects using MERN stack Maintaining strong academic performance while working on real-world applications.",
    degree: "B.Tech CSE with specialization in E-Commerce",
  },
  {
    id: 1,
    img: mpboard,
    school: "Govt. Model Higher Secondary School, Neemuch ",
    date: "Apr 2021 - March 2022",
    grade: "93.2%",
    desc: "I completed my class 12 education from Govt. Model Higher Secondary School, Neemuch, under the NCERT board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "NCERT(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: mpboard,
    school: "Govt. Higher Secondary School, ",
    date: "Apr 2019 - March 2020",
    grade: "95.6%",
    desc: "I completed my class 10 education from Govt. Higher Secondary School, Neemuch, under the NCERT board, where I studied Science with Computer.",
    degree: "NCERT(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "ShopEZ",
    description:
      "ShopEZ is a full-stack e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js) as part of the Smart Bridge project. This application provides a seamless shopping experience for users, allowing them to browse, filter, and purchase products, as well as manage orders. It includes both user and admin functionalities.",
    image: ShopEZ,
    tags: [
      "HTML",
      "Tailwind",
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github:
      "https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render",
    webapp: "https://shopez-ecommerce-deploy-to-render-1.onrender.com",
  },
  {
    id: 1,
    title: "Kaarya",
    description:
      "A minimal yet fully functional web-based To-Do list application that allows users to manage daily tasks efficiently. Built using HTML, CSS, and JavaScript with stoting data using sessionStorage, it ensures whenever we refresh our web page data not gone.",
    image: Kaarya,
    tags: ["HTML5", "CSS3", "JavaScript", "SessionStorage"],
    github: "https://github.com/SnehaYadavWorld11/TO-DO-List-App",
    webapp: "https://add-your-kaarya.netlify.app/",
  },
    {
    id: 2,
    title: "SnapScout – Image Finder",
    description:
      "SnapScout is a modern and responsive web application that allows users to search for high-quality images using the Unsplash API. Just enter a keyword and discover beautiful images with photographer info, descriptions, and more.",
    image: snapscout,
    tags: ["HTML","CSS","JAVASCRIPT"],
    github: "https://github.com/SnehaYadavWorld11/SnapScout",
    webapp: "https://snapscout.netlify.app/",
  },
  {
    id: 3,
    title: "MindOverMarks",
    description:
      "A classic Tic Tac Toe game built using HTML, CSS, and JavaScript.Challenge a friend, take turns, and see who wins!",
    image: tictactoe,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SnehaYadavWorld11/TIC-TAC-TOE",
    webapp: "https://mindovermarks-tic-tac-toe.netlify.app/",
  },

  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];
