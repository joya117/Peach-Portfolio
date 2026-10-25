/* ════════════════════════════════════════════════════════════
   Everything you see on the site lives here. Edit freely.
   Colours & fonts: top of src/styles/global.css
   Photos: public/img (faces = round avatars, photos = polaroids & photo stack,
   stickers = cut-out frames with a white sticker border)
   ════════════════════════════════════════════════════════════ */

export const profile = {
  name: "Joya",
  full: "Joya",
  role: "Full-Stack Developer & UI/UX Enthusiast",
  location: "Thapar Institute of Engineering and Technology",
  email: "jlohera004@gmail.com",
  intro:
    "B.E. Computer Engineering student at Thapar Institute of Engineering and Technology. Crafting robust web applications and immersive, animation-rich front-end experiences with modern JavaScript, React, and GSAP.",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resume: "", // optional: 'resume.pdf' in /public, WITHOUT your phone number
  avatar: "img/faces/smile.jpg",
  heroImage: "img/photos/portrait-smile.jpg",
};

// quick stats under your intro
export const heroCounts = [
  { value: "React", label: "Frontend" },
  { value: "GSAP", label: "Animations" },
  { value: "MERN", label: "Stack" },
];

export const about = {
  // a fanned stack of photos: click it to shuffle through your roles
  photos: [
    "img/photos/portrait-tilt.jpg",
    "img/photos/portrait-profile.jpg",
    "img/photos/portrait-smile.jpg",
    "img/photos/portrait-laptop.jpg",
  ],
  // one role per photo, shown under it (click the stack to cycle)
  roles: [
    "Full-Stack Developer",
    "UI/UX Designer",
    "GSAP Animator",
    "React Engineer",
  ],
  paragraphs: [
    "I am a Computer Engineering student at the prestigious Thapar Institute of Engineering and Technology, specializing in Full Stack Development. With a foundation built across hands-on web internships and rigorous creative design training, I bridge the gap between heavy engineering logic and fluid visual aesthetics.",
    "Whether it's building scalable MERN stack architectures or crafting buttery-smooth scroll animations with GSAP, I love building applications that feel alive, performant, and delightful to use.",
  ],
  stats: [
    { value: "MERN", label: "Full Stack · End-to-end" },
    { value: "GSAP", label: "Scroll animations & timelines" },
    { value: "Figma", label: "UI/UX Design & Prototyping" },
    { value: "B.E.", label: "Computer Engineering · Thapar" },
  ],
};

/* visual: 'gauge' | 'heatmap' | 'outfit' (illustrated art), or add image: 'img/...' */

/* visual: 'gauge' | 'heatmap' | 'outfit' | 'image' */
export const projects = [
  {
    title: "CampusSync",
    tag: "Full-Stack Hub",
    visual: "gauge",
    text: "A responsive full-stack platform built with React.js, Node.js, and MongoDB to streamline student scheduling, notes sharing, and campus event tracking with secure JWT authentication.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    color: "#FFE5D9",
  },
  {
    title: "Lustre Studio",
    tag: "Creative Fashion · React",
    visual: "image",
    text: "A visually immersive fashion studio website built with React, GSAP, Framer Motion, and Locomotive Scroll, featuring smooth scrolling, cinematic transitions, responsive layouts, and interactive product showcases.",
    tech: [
      "React.js",
      "GSAP",
      "Framer Motion",
      "Locomotive Scroll",
      "Styled Components",
    ],
    color: "#F5EDE6",
  },
  {
    title: "Bank Transaction System",
    tag: "Full-Stack Development",
    visual: "gauge",
    text: "A full-stack banking application designed to manage account balances, deposits, withdrawals, fund transfers, and transaction history using Node.js, Express.js, MongoDB, and Mongoose.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    color: "#E4E9FF",
  },
];

export const journey = [
  {
    year: "2020-2023",
    title: "Diploma in Computer Science & Engineering",
    org: "Govt Polytechnic College for Girls",
    text: "Built core technical foundations in computer science, programming fundamentals, and problem-solving logic.",
    photo: "img/photos/portrait-profile.jpg",
    note: "building foundations!",
  },
  {
    year: "2023 - 2026",
    title: "B.E. Computer Engineering",
    org: "Thapar Institute of Engineering and Technology",
    text: "Completed B.E. in Computer Engineering with a Full Stack Development elective, specializing in modern web architectures.",
    photo: "img/photos/portrait-smile.jpg",
    note: "graduating soon!",
  },
  {
    year: "Jan - Jun 2026",
    title: "Web Developer Intern",
    org: "INCLINATION IT INNOVATION PVT. LTD.",
    text: "Designed and deployed responsive web applications using React and Node.js, bridging code with visual aesthetics.",
    photo: "img/photos/portrait-laptop.jpg",
    note: "hands-on dev work!",
  },
];
export const skills = [
  // Frontend
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  // Animation & UI
  "GSAP",
  "ScrollTrigger",
  "Figma",
  "Prototyping",
  "Canva",
  "Inkscape",
  // Backend & Databases
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "REST APIs",
  // Tools
  "Git",
  "GitHub",
  "VS Code",
];

// Milestones scoreboard. brand = icon key from src/lib/brands.js
// value counts up, bar fills to value / goal
export const scoreboard = [
  {
    brand: "leetcode",
    label: "LeetCode",
    note: "problems solved",
    value: 200,
    suffix: "+",
    goal: 300,
  },
  {
    brand: "github",
    label: "GitHub",
    note: "repositories",
    value: 15,
    suffix: "+",
    goal: 25,
  },
  {
    brand: "mongodb",
    label: "MongoDB",
    note: "projects built",
    value: 5,
    suffix: "+",
    goal: 10,
  },
  {
    brand: "hackerrank",
    label: "HackerRank",
    note: "stars earned",
    value: 10,
    suffix: "★",
    goal: 20,
  },
];

// [title, issuer, brand icon key from src/lib/brands.js]
export const certifications = [
  ["React Developer Certification", "Meta", "github"],
  ["JavaScript Algorithms", "freeCodeCamp", "github"],
  ["GSAP Animation", "GreenSock", "github"],
  ["MongoDB Basics", "MongoDB University", "mongodb"],
  ["Figma UI Design", "Figma", "github"],
  ["Node.js & Express", "Udemy", "github"],
  ["Responsive Web Design", "freeCodeCamp", "github"],
  ["Git & GitHub", "GitHub", "github"],
];

// cut-out frames used by the hero (she turns to look at your cursor)
export const lookFrames = { from: 0, to: 28 };
export const contactSticker = "img/stickers/lg/f239.webp";
