import React from 'react';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../../types';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const experiences: ExperienceType[] = [
  {
    id: '1',
    role: 'Technical Lead',
    company: '1not2 Production',
    period: '08/2025 - Present',
    description: [
      'Led the end-to-end development of the official 1not2 Productions website, creating a cinematic and interactive digital experience.',
      'Designed and developed a responsive React.js web application with Framer Motion for smooth, film-like animations.',
      'Implemented interactive features including dual-panel movie showcase, dynamic promotional popups, and spotlight-based team section.',
      'Built a smart contact system with email integration and environment-based configuration.',
      'Optimized website performance through lazy loading, code splitting, and animation tuning for mobile responsiveness.',
      'Collaborated with creative and production teams ensuring design consistency, accessibility, and cinematic aesthetics.'
    ]
  },
  {
    id: '2',
    role: 'Frontend Web Developer',
    company: 'ESummit\'25 Institute Innovation Council',
    period: '06/2024 - Present',
    description: [
      'Developed the IIC Website and ESummit 2025 Website using HTML, CSS, JavaScript, Tailwind CSS, and React.js.',
      'Optimized performance for enhanced user experience.',
      'Collaborated with teams to ensure responsive design and smooth functionality.'
    ]
  },
  {
    id: '3',
    role: 'Frontend Web Developer',
    company: 'IIC, IIT Dharwad',
    period: '01/2025 - 04/2025',
    description: [
      'Collaborated with the web team to design and develop the frontend of the website using React.js.',
      'Ensured responsive layouts, smooth UI interactions, and alignment with the event\'s branding.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
          style={{ pointerEvents: 'auto' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 group"
              style={{ pointerEvents: 'auto' }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] md:-left-[5px] top-2 w-3 h-3 bg-slate-800 border border-slate-600 rounded-full group-hover:bg-primary group-hover:border-primary transition-colors duration-300 shadow-[0_0_0_4px_rgba(3,7,18,1)]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-slate-100">{exp.role}</h3>
                <span className="font-mono text-sm text-primary/80 bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg text-secondary mb-4 font-medium">{exp.company}</div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-400 leading-relaxed flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-slate-700 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;