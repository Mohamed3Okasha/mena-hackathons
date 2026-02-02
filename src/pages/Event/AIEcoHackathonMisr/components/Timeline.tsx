import { motion } from 'framer-motion';
import { FileText, Users, Rocket, TrendingUp } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      icon: FileText,
      date: 'Jan 1 – Feb 5',
      title: 'Applications Open',
      description: 'Submit your application and join 300+ innovators from across the region.',
    },
    {
      icon: Users,
      date: 'Feb 3 – Feb 8',
      title: 'Online Mentoring Week',
      description: 'Connect with mentors, form teams, and refine your ideas before the big event.',
    },
    {
      icon: Rocket,
      date: 'Feb 9 – Feb 11',
      title: 'The 72-Hour Main Event',
      description: 'Build, iterate, and launch your solution in an intensive hackathon marathon.',
    },
    {
      icon: TrendingUp,
      date: 'Feb 12 – May',
      title: 'Incubation & Growth',
      description: 'Access funding, mentorship, and international opportunities to scale your startup.',
    },
  ];

  return (
    <section id="timeline" className="relative py-24 bg-gradient-to-b from-[#001528] to-[#001a2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Journey to <span className="text-[#4fd1ed]">Impact</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From application to scaling, we guide you through every step of your innovation journey.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[72px] left-0 right-0 h-1 bg-gradient-to-r from-[#4fd1ed]/20 via-[#4fd1ed] to-[#4fd1ed]/20" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 bg-[#4fd1ed] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50"
                  >
                    <event.icon className="text-[#001a2c]" size={28} />
                  </motion.div>

                  <div className="bg-white/5 backdrop-blur-xl border border-[#4fd1ed]/20 rounded-xl p-6 h-full hover:border-[#4fd1ed]/50 transition-all duration-300">
                    <div className="text-[#4fd1ed] font-bold text-sm mb-2">{event.date}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {index < events.length - 1 && (
                  <div className="lg:hidden w-1 h-8 bg-gradient-to-b from-[#4fd1ed] to-[#4fd1ed]/20 mx-auto my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
