import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, FileText } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ResumeButton: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleDownload = () => {
    if (status !== 'idle') return;
    
    setStatus('loading');
    
    // Simulate download delay
    setTimeout(() => {
      setStatus('success');
      
      // Trigger actual download here
      const link = document.createElement('a');
      link.href = '/LatakshResumeLatest.pdf';
      link.download = 'LatakshResumeLatest.pdf';
      link.click();
      
      // Reset after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <MagneticButton>
      <button 
        onClick={handleDownload}
        className="group relative h-14 overflow-hidden rounded-full bg-slate-900 border border-slate-700 text-white shadow-lg transition-all hover:border-slate-500 w-48"
      >
        {/* Progress Fill */}
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ width: "0%" }}
          animate={{ width: status === 'loading' ? "100%" : status === 'success' ? "100%" : "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex items-center justify-center gap-2 h-full px-6 mix-blend-difference">
          {status === 'idle' && (
            <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex items-center gap-2 font-semibold"
            >
              <FileText size={18} />
              <span>Resume</span>
            </motion.div>
          )}

          {status === 'loading' && (
             <motion.div 
                key="loading"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="font-mono text-xs font-bold uppercase tracking-wider text-black"
             >
                Downloading...
             </motion.div>
          )}

          {status === 'success' && (
             <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 font-bold text-black"
             >
                <Check size={20} />
                <span>Saved</span>
             </motion.div>
          )}
        </div>
      </button>
    </MagneticButton>
  );
};

export default ResumeButton;