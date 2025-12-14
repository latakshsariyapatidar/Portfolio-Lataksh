import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import ResumeButton from '../ui/ResumeButton';
import Background3D from '../ui/Background3D';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#030712]">
      {/* 3D Background limited to Hero */}
      <Background3D />

      {/* Background Decor (Gradients) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full text-center md:text-left z-10"
        style={{ pointerEvents: 'auto' }}
      >
        <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-4 mb-6" style={{ pointerEvents: 'auto' }}>
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute top-0 left-0 opacity-75"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
          </div>
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Available for hire</span>
        </motion.div>

        <motion.h1 
          variants={fadeInUp} 
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          style={{ pointerEvents: 'auto' }}
        >
          Building digital <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">experiences</span> with 
          <span className="block mt-2 font-serif italic font-light text-secondary">passion.</span>
        </motion.h1>

        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
          style={{ pointerEvents: 'auto' }}
        >
          I'm <span className="text-white font-semibold">Lataksh Sariya</span>, a Frontend Developer with expert-level skills in HTML, CSS, and JavaScript. I specialize in building dynamic, responsive web applications using React.js and modern frontend technologies, creating interactive UI components with modular and maintainable code.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start flex-wrap" style={{ pointerEvents: 'auto' }}>
          <MagneticButton>
            <a href="#projects" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold text-base sm:text-lg overflow-hidden inline-flex items-center gap-2 transition-all hover:scale-105 whitespace-nowrap">
              <span className="relative z-10">View Work</span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 text-white border border-white/20 rounded-full font-semibold text-base sm:text-lg hover:bg-white/5 transition-colors whitespace-nowrap">
              Contact Me
            </a>
          </MagneticButton>
          
          <ResumeButton />
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500 z-10"
        style={{ pointerEvents: 'auto' }}
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;