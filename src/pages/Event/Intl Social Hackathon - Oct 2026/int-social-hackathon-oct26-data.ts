import { Target, Users, MapPin, Trees, TrendingUp, Sprout, Zap, GraduationCap, Plane, Trophy, Rocket, FileText, MessageCircle, Mic, Handshake, Building, Wifi, Clock, Linkedin, Instagram, Facebook } from 'lucide-react';
import type { HackathonData } from '../Hackathon One Pager/types';

export const intSocialHackathonData: HackathonData = {
  navigation: {
    title: '1st International Social Hackathon',
    highlight: "'26",
    links: [
      { name: 'About', href: '#about' },
      { name: 'Tracks', href: '#tracks' },
      { name: 'Prizes', href: '#prizes' },
      { name: 'Timeline', href: '#timeline' },
      { name: 'Partners', href: '#partners' }
    ],
    action: { label: 'Join Now', href: '#join' }
  },

  hero: {
    badge: 'October 12–16, 2026 | Cairo, Egypt',
    title: 'Active Citizenship',
    highlight: 'Regional Impact',
    subtitle: 'Bridging Mediterranean Legacy with Social Innovation',
    description: 'Join international delegates and local changemakers in Cairo for an impactful 5-day mobility, culminating in a intense continuous social innovation marathon.',
    actions: [
      { label: 'Join the Hackathon', href: '/social-hackathon/#join' },
      { label: 'Partner With Us', href: '/social-hackathon/#partners' }
    ]
  },

  about: {
    title: "Where Innovation Meets",
    highlight: "Impact",
    description: "An intensive 5-day international gathering bringing together youth workers and young leaders from 8 Euro-Mediterranean countries. Co-design sustainable, community-rooted solutions tackling critical local and regional challenges.",
    features: [
      {
        icon: Target,
        title: 'Mission-Driven',
        description:
          'Addressing the WEFE Nexus and civic challenges with community-centered solutions that create lasting, measurable impact.',
      },
      {
        icon: Users,
        title: 'Cross-Cultural Co-Design',
        description:
          'Diverse international teams collaborating directly with local community members, experts, and youth workers to build scalable models.',
      },
      {
        icon: TrendingUp,
        title: 'Scale-Oriented Ventures',
        description:
          'Transforming social ideas into viable prototypes with access to international incubators, mentorship networks, and regional funding.',
      },
    ]
  },

  tracks: {
    title: "Three",
    highlight: "Core Pillars",
    description: "Choose your focus area and leverage transformative technology to solve real-world social and environmental challenges.",
    tracks: [
      {
        icon: Sprout,
        number: 'I',
        title: 'AgriTech & Water Security',
        subtitle: 'Cultivating Resilience in the WEFE Nexus',
        features: [
          'Precision & Smart Irrigation Systems',
          'Digital Local Supply Chain Solutions',
          'Agri-FinTech for Smallholder Communities',
          'Sustainable & Regenerative Farming Tech',
        ],
        gradient: 'from-green-500/20 to-blue-500/20',
      },
      {
        icon: Zap,
        number: 'II',
        title: 'Energy Transition',
        subtitle: 'Powering Sustainable Communities',
        features: [
          'Smart Retrofitting & Energy Efficiency',
          'Renewable Microgrid Management',
          'Community Energy Storage Solutions',
          'Grid Optimization & Access Technologies',
        ],
        gradient: 'from-yellow-500/20 to-orange-500/20',
      },
      {
        icon: GraduationCap,
        number: 'III',
        title: 'AI & Inclusive Education',
        subtitle: 'Empowering Future-Ready Youth',
        features: [
          'Adaptive Non-Formal Learning Platforms',
          'Arabic Language LLMs & Civic Tools',
          'Educational Inclusion & Data Analytics',
          'AI-Powered Mentorship & Skill Personalization',
        ],
        gradient: 'from-purple-500/20 to-pink-500/20',
      },
    ]
  },

  judging: {
    title: "Judging",
    highlight: "Criteria",
    description: "Solutions are evaluated holistically on technical execution, community relevance, and long-term viability.",
    criteria: [
      { name: 'Technical Innovation & AI', percentage: 30, color: '#4fd1ed' },
      { name: 'Scalability & Replicability', percentage: 25, color: '#3ba9c5' },
      { name: 'Economic & Business Model', percentage: 20, color: '#2a8aa8' },
      { name: 'Social & Eco Community Impact', percentage: 15, color: '#1a6b8a' },
    ],
    bonus: {
      title: '+10% Bonus',
      description: 'Functional MVP Delivery (Working digital or physical prototype validated with community input)'
    },
    note: 'Evaluated out of 90% base criteria + 10% bonus for working prototype delivery.'
  },

  prizes: {
    title: "Life-Changing",
    highlight: "Opportunities",
    description: "Beyond competition, gain access to international mobility programs, top-tier incubators, and global exposure.",
    prizes: [
      {
        place: '2nd Place',
        location: '',
        icon: Plane,
        features: [
          'Partially funded international exchange opportunity',
          'AI & Cloud Credit access',
          'Regional incubation & scaling support',
        ],
        highlighted: false,
        gradient: 'from-gray-400/20 to-gray-600/20',
      },
      {
        place: '1st Place',
        location: '',
        icon: Trophy,
        features: [
          'Fully funded international mobility & showcase program',
          'Priority AI & Technology Credit packages',
          'International media visibility & ecosystem access',
        ],
        highlighted: true,
        gradient: 'from-[#4fd1ed]/30 to-cyan-600/30',
      },
      {
        place: 'Top 5 Teams',
        location: '',
        icon: Rocket,
        features: [
          'Dedicated long-term mentorship support',
          'AI Credit & Developer access',
          'Direct integration into Euro-Med incubator networks',
        ],
        highlighted: false,
        gradient: 'from-orange-400/20 to-red-500/20',
      },
    ],
    highlightedLabel: 'GRAND PRIZE'
  },

  timeline: {
    title: "Journey to",
    highlight: "Impact",
    description: "A structured 5-day journey taking you from community needs assessment to live prototype pitching.",
    events: [
      {
        icon: FileText,
        date: 'Oct 12 (Day 1)',
        title: 'Opening & Team Integration',
        description: 'Delegates arrive, complete alignment, and form international cross-cultural teams.',
      },
      {
        icon: Users,
        date: 'Oct 13 (Day 2)',
        title: 'Community Mapping & Dialogue',
        description: 'Engage directly with local community stakeholders to validate social challenges.',
      },
      {
        icon: Rocket,
        date: 'Oct 14 (Day 3)',
        title: 'Preparation & Sprint Launch',
        description: 'Refine solution frameworks, setup technical workstations, and begin the build.',
      },
      {
        icon: TrendingUp,
        date: 'Oct 15–16 (Days 4–5)',
        title: '48-Hour Continuous Sprint & Pitches',
        description: 'Build, iterate, and present working prototypes before an international jury.',
      },
    ]
  },

  join: {
    title: "Join the",
    highlight: "Movement",
    description: "Whether you are a builder, youth worker, mentor, or organizational partner, drive social innovation with us.",
    cards: [
      {
        icon: Users,
        title: 'For Participants',
        description: 'Collaborate in cross-national teams to build solutions that address pressing civic and social challenges.',
        buttonText: 'Apply Now',
        gradient: 'from-blue-500/20 to-cyan-500/20',
        href: '#',
        newTab: true,
        buttonId: 'participants',
      },
      {
        icon: MessageCircle,
        title: 'For Mentors',
        description: 'Guide international youth teams during the sprint. Share technical and domain expertise to sharpen impact.',
        buttonText: 'Become a Mentor',
        gradient: 'from-green-500/20 to-emerald-500/20',
        href: '#',
        newTab: true,
        buttonId: 'mentors',
      },
      {
        icon: Mic,
        title: 'For Speakers',
        description: 'Inspire over 40 international delegates with keynotes on social innovation, sustainability, and tech.',
        buttonText: 'Join as Speaker',
        gradient: 'from-orange-500/20 to-red-500/20',
        href: '#',
        newTab: true,
        buttonId: 'speakers',
      },
      {
        icon: Handshake,
        title: 'For Partners',
        description: 'Support youth empowerment across the Euro-Mediterranean region and shape the future of civic tech.',
        buttonText: 'Partner With Us',
        gradient: 'from-purple-500/20 to-pink-500/20',
        href: '#',
        newTab: true,
        buttonId: 'partners',
      },
    ]
  },

  footer: {
    title: '1st International Social Hackathon',
    highlight: "'26",
    tagline: 'Bridging Mediterranean Legacy with Future Technology',
    copyright: '© 2026 Hacktive Youth Project & MENA Hackathons. All rights reserved.',
    venue: {
      title: 'Venue',
      name: 'Engineers Syndicate Club, Abu El Feda',
      address: 'Zamalek, Cairo Governorate'
    },
    features: [
      { icon: MapPin, text: 'Central Location Beside the Nile' },
      { icon: Users, text: 'Inspiring Space to Connect' },
      { icon: Trees, text: 'Refreshing Open-Air Setting' },
    ],
    socials: [
      { icon: Linkedin, href: 'https://linkedin.com/company/menahacks', label: 'LinkedIn' },
      { icon: Instagram, href: 'https://instagram.com/menahacks', label: 'Instagram' },
      { icon: Facebook, href: 'https://facebook.com/menahacks', label: 'Facebook' },
    ]
  }
};
