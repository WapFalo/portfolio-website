/* eslint-disable no-unused-vars */
import {
  mobile,
  backend,
  creator,
  nobi,
  catalyz,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  biz,
  angular,
  c,
  csharp,
  django,
  laravel,
  php,
  python,
  ruby,
  sql,
  symfony,
  vuejs,
  lightin
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "RNCP Application Developer",
    icon: mobile,
  },
  {
    title: "Web Developer Student",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "angular",
  //   icon: angular,
  // },
  {
    name: "c",
    icon: c,
  },
  // {
  //   name: "csharp",
  //   icon: csharp,
  // },
  {
    name: "django",
    icon: django,
  },
  // {
  //   name: "laravel",
  //   icon: laravel,
  // },
  {
    name: "php",
    icon: php,
  },
  {
    name: "python",
    icon: python,
  },
  // {
  //   name: "ruby",
  //   icon: ruby,
  // },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "symfony",
    icon: symfony,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },
];

const experiences = [
  {
    title: "Webmaster Intern",
    company_name: "Catalyz",
    icon: catalyz,
    iconBg: "#E6DEDD",
    date: "April 2023 - July 2023",
    points: [
      "Talking with the client on how the website should be reworked.",
      "Make an assessment on the old product and highlight what to keep and what to change.",
      "Develop a simple responsive webiste with HTML and CSS.",
      "Apply GDPR to make a compliant website.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Nobi Nobi",
    icon: nobi,
    iconBg: "#E6DEDD",
    date: "September 2023 - August 2024",
    points: [
      "Maintain the website.",
      "Develop new functionalities for it.",
      "Talk with subcontractors and report to my hierarchy.",
      "Decide on what to change after meetings (web pages, UI, ...) ",
      "Exchange with the communication pole to get a better SEO referencing.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Various small missions for differents companies",
    icon: biz,
    iconBg: "#E6DEDD",
    date: "All Across 2024",
    points: [
      "Create website for small companies using differents frameworks and technologies (Grav, WP, JS, ...).",
      "Make an assessment on the old product and highlight what to keep and what to change.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  //available colors that I'm aware of are blue, green and pink
  {
    name: "A Light In The Dark",
    description:
      "Small demo for a game made during an internship at UQAM.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "purple-text-gradient",
      },
    ],
    image: lightin,
    source_code_link: "https://github.com/WapFalo/LXP-a-light-in-the-dark",
  },
];

export { services, technologies, experiences, testimonials, projects };