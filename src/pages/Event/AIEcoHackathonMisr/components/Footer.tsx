import { motion } from 'framer-motion';
import { MapPin, Wifi, Building, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const features = [
    { icon: Building, text: 'Sustainable Spaces' },
    { icon: Wifi, text: 'Wi-Fi' },
    { icon: Clock, text: 'Eco-Friendly' },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://linkedin.com/company/menahacks', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/menahacks', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/menahacks', label: 'facebook' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#001528] to-[#000d1a] pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-[#4fd1ed]/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-start justify-center gap-3 mb-6">
              <MapPin className="text-[#4fd1ed] flex-shrink-0 mt-1" size={24} />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Venue</h3>
                <p className="text-gray-300 text-lg">
                  Heliopolis University for Sustainable Development
                </p>
                <p className="text-gray-400">
                  El Salam City, Cairo, Egypt
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#4fd1ed]/10 border border-[#4fd1ed]/20 rounded-lg px-4 py-3 flex items-center justify-center gap-3"
                >
                  <feature.icon className="text-[#4fd1ed]" size={20} />
                  <span className="text-white font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center space-y-8"
        >
          <div className="flex items-center gap-6">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/5 hover:bg-[#4fd1ed]/10 border border-[#4fd1ed]/20 hover:border-[#4fd1ed]/50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="text-[#4fd1ed]" size={20} />
              </motion.a>
            ))}
          </div>

          <div className="text-center space-y-4">
            <div className="text-2xl font-bold text-white">
              AI EcoHackathon Misr <span className="text-[#4fd1ed]">'26</span>
            </div>
            <div className="text-gray-400 text-sm">
              Bridging Mediterranean Legacy with Future Technology
            </div>
          </div>

          <div className="pt-8 border-t border-[#4fd1ed]/20 w-full text-center">
            <p className="text-gray-500 text-sm">
              © 2026 AI EcoHackathon Misr. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
