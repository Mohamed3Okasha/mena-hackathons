import { Target, Users, TrendingUp, Sprout, Zap, GraduationCap, Plane, Trophy, Rocket, FileText, MessageCircle, Mic, Handshake, Building, Wifi, Clock, Linkedin, Instagram, Facebook } from 'lucide-react';
import type { HackathonData } from '../Hackathon One Pager/types';

export const ecoHackathonData: HackathonData = {
navigation: { title: 'AI EcoHackathon Misr', highlight: "'26", links: [{name:'About',href:'#about'},{name:'Tracks',href:'#tracks'},{name:'Prizes',href:'#prizes'},{name:'Timeline',href:'#timeline'},{name:'Partners',href:'#partners'}], action:{label:'Join Now',href:'#join'} },
hero: { badge: 'February 9–11, 2026 | Cairo, Egypt', title: 'Your Gateway to', highlight: 'Global Innovation', subtitle: 'Bridging Mediterranean Legacy with Future Technology', description: 'Join visionaries at the heart of Cairo for a transformative 72-hour journey where innovation meets impact.', actions: [{label:'Join the Hackathon',href:'#join'},{label:'Partner With Us',href:'#partners'}] },
about: {title:"Where Innovation Meets",highlight:"Impact",description:"Experience a 3-day intensive marathon where cutting-edge technology converges with real-world challenges. Build, iterate, and launch solutions that matter.",features:[
    {
      icon: Target,
      title: 'Mission-Driven',
      description:
        'Addressing the WEFE Nexus with innovative solutions that create lasting impact on water, energy, food, and environmental challenges.',
    },
    {
      icon: Users,
      title: 'Cross-Cultural',
      description:
        'Diverse teams working with international experts, mentors, and industry leaders to create globally relevant solutions.',
    },
    {
      icon: TrendingUp,
      title: 'Scale-Oriented',
      description:
        'Building real-world startups with proven business models and access to international incubators and funding opportunities.',
    },
  ]},
tracks: {title:"Three",highlight:"Core Pillars",description:"Choose your track and dive deep into transformative technologies that shape our future.",tracks:[
    {
      icon: Sprout,
      number: 'I',
      title: 'AgriTech & Water',
      subtitle: 'Cultivating Resilience',
      features: [
        'Precision Irrigation Systems',
        'Digital Supply Chain Solutions',
        'Agri-FinTech Innovation',
        'Sustainable Farming Technologies',
      ],
      gradient: 'from-green-500/20 to-blue-500/20',
    },
    {
      icon: Zap,
      number: 'II',
      title: 'Energy',
      subtitle: 'Powering the Green Transition',
      features: [
        'Smart Building Retrofitting',
        'Renewable Energy Microgrids',
        'Energy Storage Solutions',
        'Grid Optimization Technologies',
      ],
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: GraduationCap,
      number: 'III',
      title: 'AI & Education',
      subtitle: 'Future-Ready Minds',
      features: [
        'Adaptive Learning Platforms',
        'Arabic Language LLMs',
        'Educational Data Analytics',
        'AI-Powered Personalization',
      ],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
  ]},
judging: {title:"Judging",highlight:"Criteria",description:"Your innovation will be evaluated on multiple dimensions to ensure holistic excellence.",criteria:[
    { name: 'Technical Innovation', percentage: 30, color: '#4fd1ed' },
    { name: 'Scalability', percentage: 25, color: '#3ba9c5' },
    { name: 'Economic Viability', percentage: 20, color: '#2a8aa8' },
    { name: 'Social & Eco Impact', percentage: 15, color: '#1a6b8a' },
  ], bonus:{title:'+10% Bonus',description:'MVP Delivery (Physical or digital prototype)'}, note:'Total of 90% + 10% bonus for prototype delivery'},
prizes: {title:"Life-Changing",highlight:"Opportunities",description:"Beyond prizes, we offer pathways to global markets, top-tier incubators, and transformative experiences.",prizes:[
    {
      place: '2nd place',
      location: '',
      icon: Plane,
      features: [
        'Partially funded trip to Switzerland',
        'AI Credit access',
        'Regional expansion support',
      ],
      highlighted: false,
      gradient: 'from-gray-400/20 to-gray-600/20',
    },
    {
      place: '1st Place',
      location: '',
      icon: Trophy,
      features: [
        'Fully funded trip with EU Programme',
        'AI Credit access',
        'International visibility',
      ],
      highlighted: true,
      gradient: 'from-[#4fd1ed]/30 to-cyan-600/30',
    },
    {
      place: 'Top 5 Teams',
      location: '',
      icon: Rocket,
      features: [
        'Mentorship support',
        'AI Credit access',
        'Local ecosystem integration',
      ],
      highlighted: false,
      gradient: 'from-orange-400/20 to-red-500/20',
    },
  ], highlightedLabel:'GRAND PRIZE'},
timeline: {title:"Journey to",highlight:"Impact",description:"From application to scaling, we guide you through every step of your innovation journey.",events:[
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
  ]},
join: {title:"Join the",highlight:"Movement",description:"Whether you're a builder, mentor, speaker, or partner, there's a place for you in our ecosystem.",cards:[
    {
      icon: Users,
      title: 'For Participants',
      description: 'Join innovators building solutions that matter. Shape the future of tech in the Mediterranean region.',
      buttonText: 'Apply Now',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      href: 'https://bit.ly/AIEcoHackathon', newTab: true, buttonId: `participants`,
    },
    {
      icon: MessageCircle,
      title: 'For Mentors',
      description: 'Guide the next generation of entrepreneurs. Share your expertise and help shape groundbreaking ideas.',
      buttonText: 'Become a Mentor',
      gradient: 'from-green-500/20 to-emerald-500/20',
      href: 'https://bit.ly/AIEcoHackathon', newTab: true, buttonId: `mentors`,
    },
    {
      icon: Mic,
      title: 'For Speakers',
      description: 'Inspire innovators with your insights. Connect with passionate builders and thought leaders.',
      buttonText: 'Join as Speaker',
      gradient: 'from-orange-500/20 to-red-500/20',
      href: 'https://bit.ly/AIEcoHackathon', newTab: true, buttonId: `speakers`,
    },
    {
      icon: Handshake,
      title: 'For Partners',
      description: 'Collaborate with top talent and institutions. Be part of a movement transforming the tech ecosystem.',
      buttonText: 'Partner With Us',
      gradient: 'from-purple-500/20 to-pink-500/20',
      href: 'https://bit.ly/AIEcoHackathon', newTab: true, buttonId: `partners`,
    },
  ]},
footer: {title:'AI EcoHackathon Misr',highlight:"'26",tagline:'Bridging Mediterranean Legacy with Future Technology',copyright:'© 2026 AI EcoHackathon Misr. All rights reserved.',venue:{title:'Venue',name:'Heliopolis University for Sustainable Development',address:'El Salam City, Cairo, Egypt'},features:[
    { icon: Building, text: 'Sustainable Spaces' },
    { icon: Wifi, text: 'Wi-Fi' },
    { icon: Clock, text: 'Eco-Friendly' },
  ],socials:[
    { icon: Linkedin, href: 'https://linkedin.com/company/menahacks', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/menahacks', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/menahacks', label: 'facebook' },
  ]}
};
