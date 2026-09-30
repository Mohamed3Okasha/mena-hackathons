import type { PrizesData } from '../types';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const Prizes = ({ title, highlight, description, prizes, highlightedLabel }: PrizesData) => {
  return (
    <section id="prizes" className="relative py-24 bg-[#001a2c]">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative group ${prize.highlighted ? 'lg:-mt-4' : ''}`}
            >
              {prize.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#4fd1ed] text-[#001a2c] px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-cyan-500/50 z-10">
                  {highlightedLabel}
                </div>
              )}
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
              <div
                className={`relative backdrop-blur-xl rounded-2xl p-8 h-full ${prize.highlighted
                  ? 'bg-[#4fd1ed]/10 border-2 border-[#4fd1ed]'
                  : 'bg-white/5 border border-[#4fd1ed]/20'
                  }`}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center ${prize.highlighted
                    ? 'bg-[#4fd1ed] shadow-lg shadow-cyan-500/50'
                    : 'bg-[#4fd1ed]/10'
                    } group-hover:scale-110 transition-transform duration-300`}>
                    <prize.icon className={prize.highlighted ? 'text-[#001a2c]' : 'text-[#4fd1ed]'} size={36} />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{prize.place}</h3>
                  <div className="flex items-center justify-center gap-2 text-[#4fd1ed]">
                    <Building2 size={18} />
                    <span className="text-lg font-semibold">{prize.location}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {prize.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#4fd1ed] mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
