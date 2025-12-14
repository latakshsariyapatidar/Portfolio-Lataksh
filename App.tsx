import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';
import CommandPalette from './components/ui/CommandPalette';
import LoadingScreen from './components/ui/LoadingScreen';
import NoiseOverlay from './components/ui/NoiseOverlay';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen text-slate-100 selection:bg-primary/30 selection:text-primary relative bg-[#030712]">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <CustomCursor />
            <NoiseOverlay />
            <Navbar />
            <CommandPalette />
            
            <main className="relative z-10">
                <Hero />
                <Projects />
                <Experience />
                <Skills />
                <Contact />
            </main>

            <footer className="py-12 text-center text-slate-600 border-t border-slate-900 relative overflow-hidden z-10 bg-slate-950">
                <div className="flex flex-col items-center justify-center gap-6">
                    <p className="text-sm font-mono">
                        &copy; {new Date().getFullYear()} Lataksh Sariya. All rights reserved.
                    </p>

                </div>
            </footer>
        </motion.div>
      )}
    </div>
  );
};

export default App;