// ============================================================
// 👤 APNI SAARI INFO YAHAN EDIT KAREIN
// Ye ek hi file hai jahan se poori website ka content aata hai.
// ============================================================

export const profile = {
  name: "Umer",
  firstName: "Umer",
  // Hero mein type hone wale roles (typing animation)
  roles: [
    "Full-Stack Developer",
    "Next.js Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
  ],
  tagline:
    "I craft fast, beautiful and scalable web experiences — turning ideas into products people love to use.",
  location: "Pakistan",
  email: "umersaeed15991@gmail.com",
  phone: "+92 300 7323288",
  resumeUrl: "/CV.pdf", // public/ folder mein rakhi hui CV
  avatar: "/umer-pic.jpeg", // public/ folder mein apni photo rakh dein (optional)

  socials: {
    github: "https://github.com/umersaeed15991-del",
    linkedin: "https://www.linkedin.com/in/umer-saeed-4a80a824b",
    instagram: "https://www.instagram.com/m__umer_saeed/",
  },

  about: {
    intro:
      "I'm a passionate full-stack developer with a strong focus on building modern web applications. I love working with React, Next.js and Node.js, and I care deeply about clean code, great design and smooth user experiences.",
    highlights: [
      "Building end-to-end products from design to deployment",
      "Strong eye for detail, motion and micro-interactions",
      "Always learning — currently exploring AI-powered apps",
    ],
  },

  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "5+", label: "Projects Completed" },
    { value: "5+", label: "Happy Clients" },
    { value: "10+", label: "Technologies" },
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React / Next.js", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js / Express", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 75 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git / GitHub", level: 90 },
        { name: "Adobe Photoshop", level: 70 },
        { name: "Figma", level: 78 },
        { name: "Canva", level: 88 },
      ],
    },
  ],

  // Tech strip (hero ke neeche scroll hone wali marquee)
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
    "Express",
    "Git",
    "Adobe Photoshop",
    "Figma",
    "Vercel",
  ],

  experience: [
    {
      role: "Full-Stack Developer",
      company: "arham.intel.ai",
      period: "2025 — Present",
      description:
        "Building and maintaining production web applications with Next.js and Node.js. Leading UI development and improving performance across the stack.",
      tags: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      role: "Frontend Developer",
      company: "Vizocare",
      period: "2025-2026",
      description:
        "Developed responsive, pixel-perfect interfaces from Figma designs. Collaborated with backend teams to integrate REST APIs.",
      tags: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      role: "Web Development Intern",
      company: "Techxen Solutions",
      period: "July 2025 — Sep 2025",
      description:
        "Started my professional journey building landing pages and small business websites, learning modern development workflows.",
      tags: ["HTML/CSS", "JavaScript"],
    },
  ],

  education: [
    {
      degree: "BS Software Engineering",
      institute: "National textile University FSD",
      period: "2022 — 2026",
      description: "Focused on software engineering, web technologies and databases.",
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institute: "Divisional Public School & College",
      period: "2019 — 2021",
      description: "Completed with distinction in mathematics and physics.",
    },
  ],

  // Project pics: public/projects/ folder mein pic rakh kar niche "image" mein
  // uska path likh dein, e.g. image: "/projects/medcomfy.png"
  // Agar image khali ("") ho to card par gradient placeholder dikhta hai.
  projects: [
    {
      title: "MedComfy",
      description:
        "MedComfyAI is a full-stack healthcare web application that streamlines patient-doctor interactions through an intuitive interface and AI-powered assistance. It offers features such as appointment management, secure authentication, and responsive design. Built using Next.js, Node.js, and MongoDB, it delivers a fast and scalable user experience.",
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "https://medcomfyai.com/",
      image: "/projects/medcomfyAI.png",
    },
    {
      title: "Vizocom",
      description:
        "Vizocom is a modern and responsive business website developed to showcase company services and information through a clean, user-friendly interface. The website features a professional layout, smooth navigation, and a mobile-friendly design for an enhanced user experience. It was built using HTML5, CSS3, and JavaScript, following modern web development practices.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "https://www.vizocom.com/",
      image: "/projects/vizocom.png",
    },
    {
      title: "CityFix",
      description:
        "CityFix is a full-stack AI-powered mobile application developed to streamline civic issue reporting and grievance management. It features AI-based complaint categorization, real-time status tracking, emergency SOS services, and an intelligent chatbot for user assistance. The application was built using Flutter, Node.js, Express.js, and MongoDB.",
      tags: ["Flutter", "Node.js", "MongoDB"],
      link: "",
      image: "/projects/cityfix.png",
    },
  ],

  // Certificates: pics public/certificates/ folder mein hain.
  // Title/issuer/year apne hisaab se edit kar lein.
  certificates: [
    {
      title: "Web Development (Full-Stack)",
      issuer: "NAVTTC",
      year: "2025",
      image: "/certificates/NAVTTC.jpeg",
    },
    {
      title: "HTML5 — Structuring the Web",
      issuer: "Certification Course",
      year: "2026",
      image: "/certificates/HTML5.jpeg",
    },
  ],
};

export type Profile = typeof profile;
