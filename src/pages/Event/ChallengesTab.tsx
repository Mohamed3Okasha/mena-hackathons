import { ChallengeCard } from './ChallengeCard';

const challengesData = [
  {
    title: 'Challenge 1',
    description: 'Brief description of Challenge 1. It covers the main goals and objectives.',
    image: 'https://via.placeholder.com/150',
    details:
      'This is a detailed paragraph about Challenge 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dui sed elit malesuada tristique at nec sapien. Nulla facilisi. Suspendisse et odio vitae sapien interdum accumsan.',
    insights: ['50% students', '95% of them facing socio-economic issues'],
    judgingCriteria: ['Idea', 'Design', 'Feasibility', 'MVP/Solution'],
    prizes: [
      { place: '1st place', reward: 'Lorem Ipsum Prize 1' },
      { place: '2nd place', reward: 'Lorem Ipsum Prize 2' },
    ],
  },
  {
    title: 'Challenge 2',
    description: 'Brief description of Challenge 1. It covers the main goals and objectives.',
    image: 'https://via.placeholder.com/150',
    details:
      'This is a detailed paragraph about Challenge 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dui sed elit malesuada tristique at nec sapien. Nulla facilisi. Suspendisse et odio vitae sapien interdum accumsan.',
    insights: ['50% students', '95% of them facing socio-economic issues'],
    judgingCriteria: ['Idea', 'Design', 'Feasibility', 'MVP/Solution'],
    prizes: [
      { place: '1st place', reward: 'Lorem Ipsum Prize 1' },
      { place: '2nd place', reward: 'Lorem Ipsum Prize 2' },
    ],
  },
  {
    title: 'Challenge 3',
    description: 'Brief description of Challenge 1. It covers the main goals and objectives.',
    image: 'https://via.placeholder.com/150',
    details:
      'This is a detailed paragraph about Challenge 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dui sed elit malesuada tristique at nec sapien. Nulla facilisi. Suspendisse et odio vitae sapien interdum accumsan.',
    insights: ['50% students', '95% of them facing socio-economic issues'],
    judgingCriteria: ['Idea', 'Design', 'Feasibility', 'MVP/Solution'],
    prizes: [
      { place: '1st place', reward: 'Lorem Ipsum Prize 1' },
      { place: '2nd place', reward: 'Lorem Ipsum Prize 2' },
    ],
  },
  // Add more challenges as needed
];

export function ChallengesTab(){

  return (
    <div className={`flex flex-col gap-8`}>
      {challengesData.map((challenge, index) => (
        <ChallengeCard key={index} challenge={challenge} />
      ))}
    </div>
  );
};