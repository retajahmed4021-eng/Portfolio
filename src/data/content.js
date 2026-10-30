
// All site text lives here. Edit freely; no need to touch the components.
import Lumora from "../images/Lumora.png"
import interior from "../images/interior.png"
import RealEstate from "../images/RealEstate.png"
import TodoList from "../images/TodoList.png"

export const person = {
  name: 'Retaj Ahmed Zaki',
  title: 'Junior Front-End Developer',
  heading: 'Building Modern Web Experiences.',
  intro:
    "I'm a Junior Front-End Developer passionate about creating modern, responsive, and user-friendly websites. I enjoy transforming ideas and designs into clean and functional web experiences.",
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  title: 'About me',
  paragraphs: [
    "I'm Retaj Ahmed Zaki, a Junior Front-End Developer passionate about creating modern, responsive, and user-friendly web experiences.",

    "I enjoy turning ideas and UI designs into functional websites using HTML, CSS, JavaScript, and React. I pay close attention to details, from layouts and spacing to responsiveness and user experience, because I believe a great website should not only look good but also work smoothly on every device.",

    "I'm always eager to learn, improve my problem-solving skills, and explore new technologies. My goal is to grow as a Front-End Developer while building meaningful projects and creating digital experiences that make a difference."
  ],
  focus: [
    'Writing clean and organized code',
    'Building responsive interfaces',
    'Improving user experience',
    'Learning and developing my React skills',
    'Turning design concepts into real websites',
  ],
};

// status: 'Building with' | 'Learning'
export const skills = [
  { name: 'HTML5', status: 'Building with' },
  { name: 'CSS3', status: 'Building with' },
  { name: 'JavaScript', status: 'Building with' },
  { name: 'React.js', status: 'Building with' },
  { name: 'Tailwind CSS', status: 'Building with' },
  { name: 'Responsive Web Design', status: 'Building with' },
  { name: 'Git & GitHub', status: 'Learning' },
];

// icon names map to components/Services.jsx
export const services = [
  {
    icon: 'responsive',
    title: 'Responsive Website Development',
    text: 'Building websites that work smoothly across desktop, tablet, and mobile devices.',
  },
  {
    icon: 'landing',
    title: 'Landing Page Development',
    text: 'Creating modern and attractive landing pages for businesses and personal brands.',
  },
  {
    icon: 'figma',
    title: 'Figma to Code',
    text: 'Converting UI designs into clean and responsive web interfaces.',
  },
  {
    icon: 'fix',
    title: 'Website UI Improvements',
    text: 'Fixing layout issues, improving spacing, styling, and responsive behavior.',
  },
  {
    icon: 'react',
    title: 'React.js Development',
    text: 'Building reusable components and interactive user interfaces.',
  },
];

// Project screenshots should be placed inside public/projects/
// Add real demo and GitHub URLs when available.

export const projects = [
  {
    name: 'To-Do List App',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    text: 'An interactive task management application designed to help users organize their daily tasks through a clean and simple interface.',
    features: [
      'Interactive task management',
      'Simple and user-friendly interface',
      'Organized task display',
    ],
    image: TodoList,
    liveUrl: '',
    githubUrl: '',
  },
  {
    name: 'LUMORA E-Commerce',
    tech: ['HTML5', 'CSS3'],
    text: 'A modern e-commerce website featuring an elegant visual design, organized product sections, and an attractive shopping experience.',
    features: [
      'Modern e-commerce layout',
      'Attractive product presentation',
      'Clean and organized design',
    ],
    image: Lumora,
    liveUrl: '',
    githubUrl: '',
  },
  {
    name: 'Interior Design Website',
    tech: ['HTML5', 'CSS3'],
    text: 'An elegant interior design website showcasing beautiful spaces through a modern layout, refined typography, and visually appealing sections.',
    features: [
      'Elegant interior design presentation',
      'Modern and clean layout',
      'Visually appealing sections',
    ],
    image: interior,
    liveUrl: '',
    githubUrl: '',
  },
  {
    name: 'Real Estate Website',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
    text: 'A modern real estate website developed with React, featuring elegant layouts and organized sections to showcase real estate content.',
    features: [
      'Reusable React components',
      'Modern user interface',
      'Organized website sections',
      'Interactive navigation',
    ],
    image: RealEstate,
    liveUrl: '',
    githubUrl: '',
  },
];

// Add your real contact details to activate these links.

export const contact = {
  title: "Let's Build Something Together",
  text: "Have a project in mind? I'd love to hear about it. Let's work together to bring your ideas to life.",
  links: [
    {
      icon: 'mail',
      label: 'Email',
      value: '',
      href: '',
      placeholder: 'retaj.ahmed4021@gmail.com',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: '',
      href: '',
      placeholder: 'linkedin.com/in/retaj-ahmed-242827401',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: '',
      href: '',
      placeholder: 'github.com/retajahmed4021-eng',
    },
    {
      icon: 'upwork',
      label: 'Upwork',
      value: '',
      href: '',
      placeholder: 'upwork.com/freelancers/~01ff581d3afd791960?mp_source=share',
    },
  ],
};
