import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Timeline } from './Timeline';
import eventImage from "../../assets/event-card-image.png"

import { EventGallery } from './EventGallery';
import { OverviewTab } from './OverviewTab';
import ChallengesTab from './ChallengesTab';
// Define the types for the components
type Milestone = {
  milestone: string;
  date: string;
  isPassed?: boolean;
};

// type EventPageProps = {
//   title: string;
//   date: string;
//   location: string;
//   milestones: Milestone[];
//   galleryImages: string[];
// };

export function EventPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  // const { eventId } = useParams<{ eventId: string }>();

  const sampleEvent = {
    title: 'Eco-Hackathon Misr',
    date: 'August 2024',
    location: 'Cairo, Egypt',
    milestones: [
      { milestone: 'Registration Open', date: '2024-06-01 ' },
      { milestone: 'Submission Deadline', date: '2024-08-01 ' },
      { milestone: 'Event Starts', date: '2024-12-15 ' },
      { milestone: 'Event Ends', date: '2024-12-17 ' },
    ],
    galleryImages: [
      eventImage,
      eventImage,
      eventImage,
      eventImage,
      eventImage,
    ],
    exampleSections : [
      { title: 'About the Event', content: 'Join Shape Hackathon and lets transform the industry through the power of generative AI. In this virtual event, you will have 24 hours to propose a solution that transforms the digital experience of millions of people. Here, you will also learn from world-class mentors and have the opportunity to interact with recognized professionals and leading tech companies.' },
      { title: 'Eligibility', content: 'You can participate individually or in a group (up to 5 people) from anywhere in the world. The team must have multiple skills to develop a comprehensive solution, preferably having profiles such as Data Specialist, Domain Expert, Software Specialist, UX/UI Specialist. Also, you need to be 18 or older, have creativity, eagerness, and a positive attitude.' }, 
      { title: 'Tracks', content: 'AI, Cybersecurity, IOT, Cloud' },
      {title: 'Judging Criteria', content: 'Innovation, Working Model, Team Work'},
      { title: 'Prizes', content: 'Information on the prizes available for winners.' },
    ]
  };
  const openRegistrationForm = () => {
    // Handle form modal logic here
    alert('Open registration form');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewTab sections={sampleEvent.exampleSections} />;
      case 'Challenges':
        return <ChallengesTab /> ;
      case 'Teams':
        return <p>This is the teams content.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:px-8 space-y-6">
      {/* Top Bar with Tabs and Event Details */}
      <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-start lg:items-center">
        {/* Tabs */}
        <div className="flex flex-wrap space-x-4 items-center justify-center">
          {['Overview', 'Challenges', 'Teams/Projects'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 border-primary  ${
                activeTab === tab ? 'border-b-2' : ''
              }`}
            >
              {tab}
            </button>
          ))}
          <button
            onClick={openRegistrationForm}
            className="px-2 py-2 bg-[#00FF95] text-primary text-sm shadow-md  rounded-lg"
          >
            Apply Now
          </button>
        </div>

        {/* Event Details Card */}
        <div className="p-4 px-6 lg:mr-8 rounded-lg shadow-md lg:w-max lg:w-auto flex flex-col items-center">
          <h2 className="text-xl lg:text-3xl font-semibold">{sampleEvent.title}</h2>
          <div className="flex items-center space-x-2 mt-2 text-accent">
            <span>{sampleEvent.date} - </span>
            <span>{sampleEvent.location}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Left Side: Tab Content */}
        <div className="flex-1 space-y-4">
          {/* <h3 className="text-2xl font-bold">{activeTab}</h3> */}
          {renderContent()}
        </div>

        {/* Right Side: Gallery and Timeline */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Gallery */}
          <EventGallery images={sampleEvent.galleryImages} />

          {/* Timeline */}
          <div className="bg-opacity-70 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Event Timeline</h3>
            <Timeline milestones={sampleEvent.milestones} />
          </div>
        </div>
      </div>
    </div>
  );
}
