import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Judging = () => {
  const criteria = [
    { name: 'Technical Innovation', percentage: 30, color: '#4fd1ed' },
    { name: 'Scalability', percentage: 25, color: '#3ba9c5' },
    { name: 'Economic Viability', percentage: 20, color: '#2a8aa8' },
    { name: 'Social & Eco Impact', percentage: 15, color: '#1a6b8a' },
  ];

  return (
    <section className="relative py-24 bg-[#001528]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Judging <span className="text-[#4fd1ed]">Criteria</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Your innovation will be evaluated on multiple dimensions to ensure holistic excellence.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-[#4fd1ed]/20 rounded-2xl p-8 md:p-12">
            <div className="space-y-8">
              {criteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-lg">
                      {criterion.name}
                    </span>
                    <span className="text-[#4fd1ed] font-bold text-xl">
                      {criterion.percentage}%
                    </span>
                  </div>
                  <div className="relative h-4 bg-gray-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${criterion.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                      className="absolute left-0 top-0 h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${criterion.color}, ${criterion.color}dd)`,
                        boxShadow: `0 0 20px ${criterion.color}66`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="mt-12 bg-gradient-to-r from-[#4fd1ed]/20 to-[#4fd1ed]/10 border-2 border-[#4fd1ed] rounded-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#4fd1ed] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-[#001a2c]" size={24} />
                </div>
                <div>
                  <div className="text-[#4fd1ed] font-bold text-2xl mb-1">+10% Bonus</div>
                  <div className="text-white font-medium">
                    MVP Delivery (Physical or digital prototype)
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 text-center text-gray-400 text-sm"
            >
              Total of 90% + 10% bonus for prototype delivery
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judging;
