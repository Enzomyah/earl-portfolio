import { Project, SkillCategory, ExperienceItem } from '../types';

export const personalInfo = {
  name: "Earl Lawrence C. Cipres",
  shortName: "Earl Lawrence Cipres",
  role: "Aspiring Frontend Developer & UI/UX Designer",
  bio: "I'm a fourth-year Information Technology student passionate about creating user-friendly digital experiences, developing web applications, and learning modern technologies.",
  aboutParagraphs: [
    "I'm an Information Technology student at the University of Nueva Caceres with an interest in frontend development, UI/UX design, and system development.",
    "Through academic projects, I have gained experience designing interfaces, building web applications, and collaborating with a team. I'm continuously improving my technical skills and exploring new technologies."
  ],
  education: {
    university: "University of Nueva Caceres",
    degree: "Bachelor of Science in Information Technology",
    duration: "2023 – 2027",
    currentYear: "4th Year",
    startYear: "2023",
    endYear: "2027",
    progressPercent: 75,
    status: "Seeking internship opportunities"
  },
  location: "Naga City, Philippines",
  availability: "Open to internships",
  socials: {
    github: "https://github.com/Enzomyah",
    githubDisplay: "github.com/Enzomyah",
    linkedin: "https://www.linkedin.com/in/earllawrence-cipres-531b73445/",
    linkedinDisplay: "linkedin.com/in/earllawrence-cipres",
    email: "earllawrencecasaiscipres@gmail.com"
  }
};

export const aboutPillars = [
  {
    icon: 'monitor',
    title: 'Frontend',
    description: 'Web interfaces & dashboards'
  },
  {
    icon: 'pen-tool',
    title: 'UI/UX Design',
    description: 'Wireframes & prototypes'
  },
  {
    icon: 'network',
    title: 'Systems',
    description: 'System development'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    number: "/01",
    title: "Programming",
    iconName: "code",
    skills: [
      { name: "JavaScript", tagColor: "bg-[#F7DF1E]/10 text-[#F7DF1E] border-[#F7DF1E]/20" },
      { name: "TypeScript", tagColor: "bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]/20" }
    ]
  },
  {
    number: "/02",
    title: "Web Development",
    iconName: "globe",
    skills: [
      { name: "HTML", tagColor: "bg-[#E34F26]/10 text-[#E34F26] border-[#E34F26]/20" },
      { name: "CSS", tagColor: "bg-[#1572B6]/10 text-[#1572B6] border-[#1572B6]/20" },
      { name: "Tailwind CSS", tagColor: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20" }
    ]
  },
  {
    number: "/03",
    title: "Mobile Development",
    iconName: "smartphone",
    skills: [
      { name: "React Native", tagColor: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20" },
      { name: "Expo", tagColor: "bg-white/10 text-white border-white/20" }
    ]
  },
  {
    number: "/04",
    title: "Design & Tools",
    iconName: "briefcase",
    skills: [
      { name: "Figma", tagColor: "bg-[#F24E1E]/10 text-[#F24E1E] border-[#F24E1E]/20" },
      { name: "Git", tagColor: "bg-[#F05032]/10 text-[#F05032] border-[#F05032]/20" },
      { name: "GitHub", tagColor: "bg-white/10 text-white border-white/20" }
    ]
  },
  {
    number: "/05",
    title: "Other Skills",
    iconName: "layers",
    skills: [
      { name: "UI/UX Design", icon: "pen-tool" },
      { name: "Wireframing", icon: "layout" },
      { name: "System Design", icon: "git-fork" },
      { name: "AI-Assisted Development", icon: "sparkles" },
      { name: "Rapid Prototyping", icon: "zap" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "supply-chain",
    title: "Supply Chain Management System",
    type: ["Capstone Project", "Web Application"],
    status: "In Development",
    isFeatured: true,
    description: "A web-based Supply Chain Management System designed for But First, Coffee, a local coffee shop franchise in Naga City, Philippines. The system aims to simplify daily business operations by bringing sales, inventory tracking, and supply requests into one centralized platform.",
    contribution: "UI/UX design and frontend development, including user interface designs, dashboard screens, and inventory monitoring interfaces.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Java", "Spring Boot", "MySQL"],
    previewType: "dashboard",
    image: "/projects/supplychain-inventory.png",
    imageAlt: "Supply Chain Management System - Branch Inventory and Stock Monitoring Dashboard",
    primaryImageLabel: "Inventory Dashboard"
  },
  {
    id: "gym-guard",
    title: "GymGuardApp",
    type: ["Mobile Application", "Gym Management"],
    description: "A cross-platform gym membership tracking and management application designed to replace manual logbooks and spreadsheets with a digital, real-time system.",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase Firestore", "Firebase Authentication"],
    githubUrl: "https://github.com/Enzomyah/GymGuardApp",
    previewType: "mobile",
    image: "/projects/gymguard-overview.jfif",
    imageAlt: "GymGuardApp - Mobile Overview and Registration Analytics Screen",
    primaryImageLabel: "Overview Screen",
    secondaryImage: "/projects/gymguard-logbook.jfif",
    secondaryImageAlt: "GymGuardApp - Member Logbook and Attendance Records Screen",
    secondaryImageLabel: "Logbook Screen"
  },
  {
    id: "nutri-track",
    title: "NutriTrack",
    type: ["Mobile Application", "Health, Nutrition & Fitness"],
    description: "A personalized health, nutrition, and fitness application designed to help users monitor their daily habits and work toward their wellness goals.",
    technologies: ["React Native (Expo)", "Expo Router", "JavaScript", "TypeScript (TSX)"],
    githubUrl: "https://github.com/Enzomyah/NutriTrack",
    previewType: "mobile",
    image: "/projects/nutritrack-dashboard.jfif",
    imageAlt: "NutriTrack - Daily Nutrients and Fasting Tracker Dashboard Screen",
    primaryImageLabel: "Dashboard Screen",
    secondaryImage: "/projects/nutritrack-welcome.jfif",
    secondaryImageAlt: "NutriTrack - Welcome Onboarding and Goal Setting Screen",
    secondaryImageLabel: "Welcome Screen"
  },
  {
    id: "great-books",
    title: "Great Books Digital Portfolio",
    type: ["Web Development", "Academic Project"],
    description: "A multi-page digital literature portfolio website featuring literary analyses, personal reflections, and learning experiences from selected literary works.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Enzomyah/Great-Books-Digital-Portfolio",
    liveUrl: "https://enzomyah.github.io/Great-Books-Digital-Portfolio/",
    previewType: "document",
    image: "/projects/great-books.png",
    imageAlt: "Great Books Digital Literature Portfolio - My Literary Journey Homepage",
    primaryImageLabel: "Homepage Preview"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    category: "Experience",
    typeLabel: "Capstone Project · Academic",
    title: "UI/UX & Frontend Developer",
    subtitle: "Supply Chain Management System — But First, Coffee",
    bulletPoints: [
      "Worked on user interface designs and frontend dashboard features.",
      "Created wireframes using Figma.",
      "Collaborated with group members on system requirements."
    ],
    tags: ["Figma", "React", "Tailwind CSS"]
  },
  {
    id: "exp-2",
    category: "Achievement",
    year: "2025",
    title: "INNOWAVE Awards 2025",
    subtitle: "Outstanding Community Web Based Solution"
  }
];

