import { motion } from 'framer-motion';
import { ArrowRight, Globe, Droplets } from 'lucide-react';
import { scrollToSection } from '../../../../utils/functions';

const Hero = () => {
  const badges = [
    { icon: Globe, text: 'From Egypt to the World' },
    { icon: Droplets, text: 'Water-Energy-Food Nexus' },
    { icon: ArrowRight, text: 'Fully Funded International Opportunities' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#001a2c]">
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
                February 9–11, 2026 | Cairo, Egypt
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            <span className="text-white">Your Gateway to</span>
            <br />
            <span className="text-[#4fd1ed]">Global Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 font-medium"
          >
            Bridging Mediterranean Legacy with Future Technology
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Join visionaries at the heart of Cairo for a transformative 72-hour journey where innovation meets impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              onClick={() => scrollToSection('join')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-[#4fd1ed] text-[#001a2c] px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 flex items-center gap-2"
            >
              Join the Hackathon
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('partners')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#4fd1ed] text-[#4fd1ed] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#4fd1ed]/10 transition-all duration-300"
            >
              Partner With Us
            </motion.button>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#001a2c] to-transparent" />
    </section>
  );
};

export default Hero;
