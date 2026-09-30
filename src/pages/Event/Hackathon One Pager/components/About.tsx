import type { AboutData } from '../types';
import { motion } from 'framer-motion';


const About = ({ title, highlight, description, features }: AboutData) => {
  return (
    <section id="about" className="relative py-24 bg-[#001a2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {title} <span className="text-[#4fd1ed]">{highlight}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4fd1ed]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-[#4fd1ed]/20 rounded-2xl p-8 h-full">
                <div className="bg-[#4fd1ed]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-[#4fd1ed]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
