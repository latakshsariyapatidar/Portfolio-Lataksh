import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const projects: Project[] = [
  {
    id: '1',
    title: '1not2 Productions Website',
    description: 'Official website for 1not2 Productions featuring cinematic animations, interactive movie showcase, and dynamic team sections. Built with React.js and Framer Motion for film-like experience.',
    tech: ['React', 'Framer Motion', 'JavaScript', 'CSS'],
    link: 'https://1not2production.com',
    github: 'https://github.com/latakshsariyapatidar/1not2Final',
    image: 'https://res.cloudinary.com/db69ffwwa/image/upload/v1765652088/Screenshot_2025-12-14_002322_pucnev.png'
  },
  {
    id: '2',
    title: 'ESummit 2025 Website',
    description: 'Developed the official website for ESummit 2025 hosted by IIT Dharwad\'s Institute Innovation Council. Features responsive design and optimized performance for enhanced user experience.',
    tech: ['React', 'TailwindCSS', 'JavaScript', 'HTML/CSS'],
    link: 'https://iic.iitdh.ac.in/esummit',
    github: 'https://github.com/iic-iitdh/esummit-25',
    image: 'https://res.cloudinary.com/db69ffwwa/image/upload/v1765686724/Screenshot_2025-12-14_095901_qqfwbd.png'
  },
  {
    id: '3',
    title: 'Rayban Website Animated Landing Page',
    description: 'A unique and visually appealing animated landing page showcasing interactive elements that respond to mouse clicks. Features custom design with smooth animations and dynamic user interactions.',
    tech: ['JavaScript', 'GSAP', 'HTML', 'CSS'],
    link: 'https://latakshsariyapatidar.github.io/RayBan_Landing_Animated/',
    github: 'https://github.com/latakshsariyapatidar/RayBan_Landing_Animated',
    image: 'https://res.cloudinary.com/db69ffwwa/image/upload/v1765686725/Screenshot_2025-12-14_100025_kjulr7.png'
  },
  {
    id: '4',
    title: 'Institute Innovation Council Website',
    description: 'Frontend development for the Institute Innovation Council website at IIT Dharwad. Implemented responsive layouts, smooth UI interactions, and maintained brand consistency throughout the design.',
    tech: ['React', 'JavaScript', 'CSS', 'HTML'],
    link: 'https://iic.iitdh.ac.in',
    github: 'https://github.com/iic-iitdh',
    image: 'https://res.cloudinary.com/db69ffwwa/image/upload/v1765686724/Screenshot_2025-12-14_100104_hec7zx.png'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-slate-950">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Selected Works</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A collection of projects that define my journey as a developer. Focusing on performance, accessibility, and user-centric design.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;