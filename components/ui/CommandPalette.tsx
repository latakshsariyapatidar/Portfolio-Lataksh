import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, User, Code, Mail, Briefcase } from 'lucide-react';

const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const menuItems = [
    { icon: Code, label: 'Projects', href: '#projects' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  const filteredItems = menuItems.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            style={{ pointerEvents: 'auto' }}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="flex items-center px-4 py-3 border-b border-slate-800">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input 
                type="text"
                placeholder="Type a command or search..."
                className="w-full bg-transparent border-none outline-none text-slate-200 placeholder-slate-500 font-mono text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <div className="text-xs text-slate-500 font-mono px-1.5 py-0.5 border border-slate-700 rounded">ESC</div>
            </div>
            
            <div className="py-2">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-2 mx-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-primary transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-slate-500 text-sm">
                  No results found.
                </div>
              )}
            </div>
            
            <div className="px-4 py-2 bg-slate-950/50 border-t border-slate-800 text-xs text-slate-500 flex justify-between items-center">
               <span>Navigation</span>
               <div className="flex items-center gap-1">
                 <Command className="w-3 h-3" />
                 <span>+ K to open</span>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
