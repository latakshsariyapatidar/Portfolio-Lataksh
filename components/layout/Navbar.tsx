import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Code2, Command, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[90] flex justify-center pt-4 px-4 pointer-events-none"
      >
        <nav className="pointer-events-auto flex items-center gap-6 px-6 py-3 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          <a 
            href="#hero" 
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="text-white hover:text-primary transition-colors p-2 interactive"
          >
            <Code2 size={24} />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-all interactive"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="w-px h-6 bg-white/10 hidden md:block" />

          <button 
             className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-mono px-3 py-1.5 border border-white/10 rounded-md bg-white/5 hover:bg-white/10 transition-colors interactive"
          >
            <Command size={12} />
            <span>K</span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
             className="md:hidden text-white p-1 interactive"
             onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 z-[100] bg-slate-950 p-6 md:hidden flex flex-col"
            >
                <div className="flex justify-between items-center mb-8">
                     <div className="flex items-center gap-2 text-white">
                        <Code2 size={24} />
                        <span className="font-bold text-lg">Menu</span>
                     </div>
                    <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 interactive">
                        <X size={32} />
                    </button>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center flex-1">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="text-3xl font-bold text-slate-300 hover:text-white hover:text-primary transition-colors interactive"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;