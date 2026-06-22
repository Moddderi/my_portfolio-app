export interface ProjectTech {
  name: string;
  icon: string;
}

export interface ProjectTheme {
  border: string;
  shadow: string;
  badge: string;
  gradient: string;
  cardHover: string;
  textLink: string;
  btnHover: string;
  activeDot: string;
}

export interface ProjectData {
  id: string;
  badge: string;
  title: string;
  description: string;
  paragraphs: string[];
  images: string[];
  technologies: ProjectTech[];
  liveLink: string;
  liveLabel: string;
  liveIcon: string;
  codeLink: string;
  theme: ProjectTheme;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "flow-crm",
    badge: "CRM System",
    title: "FLOW CRM",
    description: "A client and internal business process management system.",
    paragraphs: [
      "A modern CRM system designed to automate customer interactions and optimize business workflows. The project features intuitive dashboards for activity monitoring, tools for client database management, and analytical panels.",
      "The interface is built with a strong focus on performance and responsiveness, leveraging a component-driven approach and strict typing to ensure stability and scalability of the application.",
    ],
    images: [
      "/assets/img/crm-1.png",
      "/assets/img/crm-2.png",
      "/assets/img/crm-3.png",
    ],
    technologies: [
      { name: "React", icon: "/assets/icons/devicon--react.svg" },
      { name: "TypeScript", icon: "/assets/icons/devicon--typescript.svg" },
      {
        name: "SCSS Modules",
        icon: "/assets/icons/vscode-icons--file-type-scss.svg",
      },
    ],
    liveLink: "https://moddderi.github.io/FLOW_CRM/",
    liveLabel: "Watch Live Demo",
    liveIcon: "solar:play-circle-linear",
    codeLink: "https://github.com/Moddderi/FLOW_CRM",
    theme: {
      border: "border-purple-500/20",
      shadow: "shadow-[0_0_80px_rgba(168,85,247,0.15)]",
      badge: "border-purple-500/20 bg-purple-500/5 text-purple-300",
      gradient:
        "bg-linear-to-r from-purple-500 to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] border-purple-400/20",
      cardHover:
        "hover:border-purple-500/40 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)]",
      textLink: "text-purple-400 hover:text-purple-300",
      btnHover:
        "hover:bg-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
      activeDot: "bg-purple-500",
    },
  },
  {
    id: "kirich-sewing-studio",
    badge: "E-commerce & Custom",
    title: "K.I.RICH sewing studio",
    description:
      "An e-commerce platform for a sewing studio featuring a custom order builder.",
    paragraphs: [
      "A fully functional e-commerce platform built for a garment design studio. It includes both a standard product catalog with comprehensive filtering and a custom bespoke module for placing tailored orders based on individual user parameters.",
      "A full-stack solution featuring strict client-side and server-side data validation, a robust database architecture, and seamless integration of all custom options into a unified shopping cart.",
    ],
    images: [
      "/assets/img/kirich-1.png",
      "/assets/img/kirich-2.png",
      "/assets/img/kirich-3.png",
    ],
    technologies: [
      { name: "React", icon: "/assets/icons/devicon--react.svg" },
      { name: "TypeScript", icon: "/assets/icons/devicon--typescript.svg" },
      { name: "Redux", icon: "/assets/icons/devicon--redux.svg" },
      { name: "Tailwind CSS", icon: "/assets/icons/devicon--tailwindcss.svg" },
      { name: "Node.js", icon: "/assets/icons/logos--nodejs-icon.svg" },
      { name: "Sequelize", icon: "/assets/icons/devicon--sequelize.svg" },
      { name: "PostgreSQL", icon: "/assets/icons/simple-icons--express.svg" },
      { name: "Zod", icon: "/assets/icons/devicon--typescript.svg" },
    ],
    liveLink: "https://website-kirich-ts-react-client.vercel.app/",
    liveLabel: "Visit Website",
    liveIcon: "solar:shop-linear",
    codeLink: "https://github.com/Moddderi/website-kirich-ts-react",
    theme: {
      border: "border-fuchsia-500/20",
      shadow: "shadow-[0_0_80px_rgba(217,70,239,0.15)]",
      badge: "border-fuchsia-500/20 bg-fuchsia-500/5 text-fuchsia-300",
      gradient:
        "bg-linear-to-r from-fuchsia-500 to-pink-500 shadow-[0_0_20px_rgba(217,70,239,0.3)] border-fuchsia-400/20",
      cardHover:
        "hover:border-fuchsia-500/40 hover:shadow-[0_20px_40px_-15px_rgba(217,70,239,0.2)]",
      textLink: "text-fuchsia-400 hover:text-fuchsia-300",
      btnHover:
        "hover:bg-fuchsia-500/20 hover:border-fuchsia-500/40 hover:shadow-[0_0_15px_rgba(217,70,239,0.2)]",
      activeDot: "bg-fuchsia-500",
    },
  },
  {
    id: "phone-catalog",
    badge: "E-commerce",
    title: "Phone Catalog",
    description: "A catalog website for original Apple hardware and devices.",
    paragraphs: [
      "An intuitive product catalog for Apple mobile devices and accessories, featuring smooth navigation, detailed product pages, and technical specifications comparison tools.",
      "Special attention was dedicated to the UX/UI components, rapid page loading speeds, responsive layouts across all screen form factors, and maintaining a clean TypeScript codebase.",
    ],
    images: [
      "/assets/img/phone-catalog-1.png",
      "/assets/img/phone-catalog-2.png",
      "/assets/img/phone-catalog-3.png",
    ],
    technologies: [
      { name: "React", icon: "/assets/icons/devicon--react.svg" },
      { name: "TypeScript", icon: "/assets/icons/devicon--typescript.svg" },
    ],
    liveLink: "https://moddderi.github.io/Phone-Catalog/#/",
    liveLabel: "Browse Catalog",
    liveIcon: "solar:smartphone-line-duotone",
    codeLink: "https://github.com/Moddderi/Phone-Catalog",
    theme: {
      border: "border-slate-500/20",
      shadow: "shadow-[0_0_80px_rgba(148,163,184,0.1)]",
      badge: "border-slate-500/20 bg-slate-500/5 text-slate-300",
      gradient:
        "bg-linear-to-r from-slate-700 to-slate-900 shadow-[0_0_20px_rgba(71,85,105,0.2)] border-slate-600/20",
      cardHover:
        "hover:border-slate-500/40 hover:shadow-[0_20px_40px_-15px_rgba(148,163,184,0.15)]",
      textLink: "text-slate-400 hover:text-slate-300",
      btnHover:
        "hover:bg-slate-500/20 hover:border-slate-500/40 hover:shadow-[0_0_15px_rgba(148,163,184,0.1)]",
      activeDot: "bg-slate-400",
    },
  },
  {
    id: "my-bike",
    badge: "Landing Page",
    title: "MyBike",
    description:
      "A sleek and fully responsive landing page for cycling enthusiasts.",
    paragraphs: [
      "A modern single-page website developed to showcase premium bicycle lineups and riding gear. The project was engineered with a heavy focus on semantic markup and high interface rendering speeds.",
      "Styling was implemented using SCSS, which allowed for a flexible modular style sheet structure and ensured a pixel-perfect match to the design mockups across all resolutions.",
    ],
    images: [
      "/assets/img/MyBike-1.png",
      "/assets/img/MyBike-2.png",
      "/assets/img/MyBike-3.png",
    ],
    technologies: [
      { name: "HTML", icon: "/assets/icons/material-icon-theme--html.svg" },
      { name: "CSS", icon: "/assets/icons/skill-icons--css.svg" },
      { name: "SCSS", icon: "/assets/icons/vscode-icons--file-type-scss.svg" },
    ],
    liveLink: "https://moddderi.github.io/MyBike-Landing/",
    liveLabel: "Open Website",
    liveIcon: "solar:link-linear",
    codeLink: "https://github.com/Moddderi/MyBike-Landing",
    theme: {
      border: "border-amber-500/20",
      shadow: "shadow-[0_0_80px_rgba(245,158,11,0.12)]",
      badge: "border-amber-500/20 bg-amber-500/5 text-amber-300",
      gradient:
        "bg-linear-to-r from-amber-500 to-orange-600 shadow-[0_0_20px_rgba(245,158,11,0.25)] border-amber-400/20",
      cardHover:
        "hover:border-amber-500/40 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]",
      textLink: "text-amber-400 hover:text-amber-300",
      btnHover:
        "hover:bg-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]",
      activeDot: "bg-amber-500",
    },
  },
  {
    id: "game-2048",
    badge: "Web Game",
    title: "2048 Game",
    description:
      "A classic browser-based puzzle game built entirely with vanilla JavaScript.",
    paragraphs: [
      "A complete implementation of the highly popular logical game '2048'. The entire game logic, tile shifts, score calculations, and random new element spawning were coded from scratch using clean JavaScript without relying on heavy frameworks.",
      "The project showcases practical mastery of raw DOM tree manipulation, keyboard event handlers, touch gesture tracking (swipes), as well as implementing smooth tile sliding animations.",
    ],
    images: [
      "/assets/img/2048-1.png",
      "/assets/img/2048-2.png",
      "/assets/img/2048-3.png",
    ],
    technologies: [
      {
        name: "JavaScript",
        icon: "/assets/icons/material-icon-theme--javascript.svg",
      },
      { name: "CSS", icon: "/assets/icons/skill-icons--css.svg" },
    ],
    liveLink: "https://moddderi.github.io/2048-game/",
    liveLabel: "Play Game",
    liveIcon: "solar:gamepad-linear",
    codeLink: "https://github.com/Moddderi/2048-game",
    theme: {
      border: "border-emerald-500/20",
      shadow: "shadow-[0_0_80px_rgba(16,185,129,0.12)]",
      badge: "border-emerald-500/20 bg-emerald-500/5 text-emerald-300",
      gradient:
        "bg-linear-to-r from-emerald-500 to-teal-600 shadow-[0_0_20px_rgba(16,185,129,0.25)] border-emerald-400/20",
      cardHover:
        "hover:border-emerald-500/40 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]",
      textLink: "text-emerald-400 hover:text-emerald-300",
      btnHover:
        "hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]",
      activeDot: "bg-emerald-500",
    },
  },
];
