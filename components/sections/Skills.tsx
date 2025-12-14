import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../../types';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations';

const skillCategories: SkillCategory[] = [
  {
    title: "Core Technologies",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 95 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 70 }
    ]
  },
  {
    title: "Styling & Layout",
    skills: [
      { name: "TailwindCSS", level: 90 },
      { name: "FlexBox", level: 85 },
      { name: "Responsive Design", level: 80 }
    ]
  },
  {
    title: "Animation & Motion",
    skills: [
      { name: "GSAP", level: 80 },
      { name: "LocomotiveJS", level: 65 },
    ]
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.JS", level: 50 },
      { name: "MongoDB", level: 30 },
      { name: "REST API", level: 40 },
      { name: "Git & Github", level: 85 }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
          style={{ pointerEvents: 'auto' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-slate-400">The tools I use to bring ideas to life.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors"
              style={{ pointerEvents: 'auto' }}
            >
              <h3 className="text-xl font-bold text-slate-200 mb-6 pb-2 border-b border-slate-800">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={scaleIn} className="group" style={{ pointerEvents: 'auto' }}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-mono text-slate-400 group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ pointerEvents: 'auto' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;