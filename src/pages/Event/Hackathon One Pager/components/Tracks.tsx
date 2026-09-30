import type { TracksData } from '../types';
import { motion } from 'framer-motion';


const Tracks = ({ title, highlight, description, tracks }: TracksData) => {
  return (
    <section id="tracks" className="relative py-24 bg-gradient-to-b from-[#001a2c] to-[#001528]">
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
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
              <div className="relative bg-[#001a2c]/80 backdrop-blur-xl border border-[#4fd1ed]/30 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#4fd1ed]/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <track.icon className="text-[#4fd1ed]" size={32} />
                  </div>
                  <div className="text-5xl font-bold text-[#4fd1ed]/20">
                    {track.number}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{track.title}</h3>
                <p className="text-[#4fd1ed] text-lg font-semibold mb-6">{track.subtitle}</p>

                <div className="space-y-3">
                  {track.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4fd1ed] mt-2 flex-shrink-0" />
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

export default Tracks;
