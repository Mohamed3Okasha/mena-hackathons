import type { JoinData } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTAGrid = ({ title, highlight, description, cards }: JoinData) => {
  return (
    <section id="join" className="relative py-24 bg-[#001a2c]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
              id={card.buttonId}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
              <div className="relative bg-white/5 backdrop-blur-xl border border-[#4fd1ed]/20 rounded-2xl p-8 h-full flex flex-col">
                <div className="bg-[#4fd1ed]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="text-[#4fd1ed]" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{card.description}</p>

                <motion.a
                  href={card.href}
                  target={card.newTab ? "_blank" : undefined}
                  rel={card.newTab ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn bg-[#4fd1ed] text-[#001a2c] px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  {card.buttonText}
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTAGrid;
