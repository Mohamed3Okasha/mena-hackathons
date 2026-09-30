import { useEffect, useId, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import type { NavigationData } from '../types';

export default function Navigation({ title, highlight, links, action }: NavigationData) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 20);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  const actionLink = action && <a href={action.href} target={action.newTab ? '_blank' : undefined}
    rel={action.newTab ? 'noopener noreferrer' : undefined} onClick={() => setIsOpen(false)}
    className="block bg-[#4fd1ed] text-[#001a2c] px-6 py-2.5 rounded-lg font-semibold text-center">{action.label}</a>;
  return (
    <motion.nav aria-label="Hackathon navigation" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-[#001a2c]/95 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 gap-4">
        <span className="text-xl font-bold text-white">{title} <span className="text-[#4fd1ed]">{highlight}</span></span>
        <div className="hidden md:flex items-center space-x-8">
          {links.map(link => <a key={link.href + link.name} href={link.href} className="text-gray-300 hover:text-[#4fd1ed] font-medium">{link.name}</a>)}
        </div>
        <div className="hidden md:block">{actionLink}</div>
        <button type="button" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls={menuId}
          onClick={() => setIsOpen(open => !open)} className="md:hidden text-white p-2">{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {isOpen && <div id={menuId} className="md:hidden px-4 pt-2 pb-4 space-y-3">
        {links.map(link => <a key={link.href + link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-[#4fd1ed] py-2">{link.name}</a>)}
        {actionLink}
      </div>}
    </motion.nav>
  );
}
