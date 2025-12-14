import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full group perspective-1000 interactive"
    >
      <div className="relative h-full bg-surface/50 border border-white/5 rounded-2xl p-6 backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.15)]">
        
        {/* Image / Video Placeholder with reveal effect */}
        <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden bg-slate-800">
           <img 
             src={project.image} 
             alt={project.title} 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
        </div>

        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold font-sans text-slate-100 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3">
             {project.github && (
               <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                 <Github size={20} />
               </a>
             )}
             <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
               <ExternalLink size={20} />
             </a>
          </div>
        </div>

        <p className="text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
              {t}
            </span>
          ))}
        </div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
