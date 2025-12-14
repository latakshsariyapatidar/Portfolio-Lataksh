import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { fadeInUp } from '../../utils/animations';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-950">
      <div className="max-w-4xl mx-auto">
        
        {/* Contact Info */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's work together.</h2>
          <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
            I'm currently available for freelance work and exciting opportunities. 
            If you have a project that needs creative frontend development, let's connect.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-4 text-slate-300 bg-slate-900/30 p-8 rounded-2xl border border-slate-800">
              <div className="p-4 bg-slate-900/50 backdrop-blur-md rounded-lg text-primary border border-slate-800">
                <Mail size={28} />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Email</div>
                <a href="mailto:latakshsariya146@gmail.com" className="hover:text-primary transition-colors text-sm md:text-base">latakshsariya146@gmail.com</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-slate-300 bg-slate-900/30 p-8 rounded-2xl border border-slate-800">
              <div className="p-4 bg-slate-900/50 backdrop-blur-md rounded-lg text-primary border border-slate-800">
                <MapPin size={28} />
              </div>
              <div>
                 <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Location</div>
                 <span>Indore, India (Remote)</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
             <MagneticButton>
               <a href="https://github.com/latakshsariyapatidar" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center bg-slate-900/50 backdrop-blur-md rounded-full text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all">
                 <Github size={24} />
               </a>
             </MagneticButton>
             <MagneticButton>
               <a href="https://www.linkedin.com/in/lataksh/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center bg-slate-900/50 backdrop-blur-md rounded-full text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all">
                 <Linkedin size={24} />
               </a>
             </MagneticButton>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;