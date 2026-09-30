import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { HeroData } from '../types';

const Hero = ({ badge, title, highlight, subtitle, description, actions }: HeroData) => {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#001a2c]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#4fd1ed 1px, transparent 1px), linear-gradient(90deg, #4fd1ed 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="bg-[#4fd1ed]/10 border border-[#4fd1ed]/30 rounded-full px-6 py-2 backdrop-blur-sm">
              <span className="text-[#4fd1ed] font-semibold">
                {badge}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            <span className="text-white">{title}</span>
            <br />
            <span className="text-[#4fd1ed]">{highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 font-medium"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            {actions.map((action, index) => (
              <motion.a key={action.href + action.label} href={action.href}
                target={action.newTab ? '_blank' : undefined} rel={action.newTab ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={index === 0 ? 'group bg-[#4fd1ed] text-[#001a2c] px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2' : 'border-2 border-[#4fd1ed] text-[#4fd1ed] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#4fd1ed]/10'}>
                {action.label}{index === 0 && <ArrowRight size={20} />}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#001a2c] to-transparent" />
    </section>
  );
};

export default Hero;
