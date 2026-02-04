import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../../../../utils/functions';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Tracks', href: 'tracks' },
    { name: 'Prizes', href: 'prizes' },
    { name: 'Timeline', href: 'timeline' },
    { name: 'Partners', href: 'partners' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#001a2c]/90 backdrop-blur-xl border-b border-cyan-500/20'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <span className="text-xl font-bold text-white">
              AI EcoHackathon Misr <span className="text-[#4fd1ed]">'26</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                onClick={() => scrollToSection(link.href)}
                key={link.name}
                // href={link.href}
                className="text-gray-300 hover:text-[#4fd1ed] transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.button
              onClick={() => scrollToSection('join')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4fd1ed] text-[#001a2c] px-6 py-2.5 rounded-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
            >
              Join Now
            </motion.button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#001a2c]/95 backdrop-blur-xl border-t border-cyan-500/20"
        >
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-[#4fd1ed] transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#join"
              className="block bg-[#4fd1ed] text-[#001a2c] px-6 py-2.5 rounded-lg font-semibold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
