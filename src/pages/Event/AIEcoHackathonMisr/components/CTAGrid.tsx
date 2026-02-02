import { motion } from 'framer-motion';
import { Users, MessageCircle, Mic, Handshake, ArrowRight } from 'lucide-react';

const CTAGrid = () => {
  const cards = [
    {
      icon: Users,
      title: 'For Participants',
      description: 'Join innovators building solutions that matter. Shape the future of tech in the Mediterranean region.',
      buttonText: 'Apply Now',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      buttonId: `participants`,
    },
    {
      icon: MessageCircle,
      title: 'For Mentors',
      description: 'Guide the next generation of entrepreneurs. Share your expertise and help shape groundbreaking ideas.',
      buttonText: 'Become a Mentor',
      gradient: 'from-green-500/20 to-emerald-500/20',
      buttonId: `mentors`,
    },
    {
      icon: Mic,
      title: 'For Speakers',
      description: 'Inspire innovators with your insights. Connect with passionate builders and thought leaders.',
      buttonText: 'Join as Speaker',
      gradient: 'from-orange-500/20 to-red-500/20',
      buttonId: `speakers`,
    },
    {
      icon: Handshake,
      title: 'For Partners',
      description: 'Collaborate with top talent and institutions. Be part of a movement transforming the tech ecosystem.',
      buttonText: 'Partner With Us',
      gradient: 'from-purple-500/20 to-pink-500/20',
      buttonId: `partners`,
    },
  ];

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
            Join the <span className="text-[#4fd1ed]">Movement</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Whether you're a builder, mentor, speaker, or partner, there's a place for you in our ecosystem.
          </p>
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
                  href="https://bit.ly/AIEcoHackathon"
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice
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
