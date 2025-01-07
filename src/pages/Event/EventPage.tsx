import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Timeline } from './Timeline';
import eventImage from "../../assets/event-card-image.png"

import { EventGallery } from './EventGallery';
import { OverviewTab } from './OverviewTab';
import { ChallengesTab } from './ChallengesTab';
import { TeamsTab } from './Teams';
import * as Yup from "yup";
import { GeneralApplicationForm } from '../../components/GeneralApplication';

// Define the types for the components
// type Milestone = {
//   milestone: string;
//   date: string;
//   isPassed?: boolean;
// };

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    exampleSections: [
      { title: 'About the Event', content: 'Join Shape Hackathon and lets transform the industry through the power of generative AI. In this virtual event, you will have 24 hours to propose a solution that transforms the digital experience of millions of people. Here, you will also learn from world-class mentors and have the opportunity to interact with recognized professionals and leading tech companies.' },
      { title: 'Eligibility', content: 'You can participate individually or in a group (up to 5 people) from anywhere in the world. The team must have multiple skills to develop a comprehensive solution, preferably having profiles such as Data Specialist, Domain Expert, Software Specialist, UX/UI Specialist. Also, you need to be 18 or older, have creativity, eagerness, and a positive attitude.' },
      { title: 'Tracks', content: 'AI, Cybersecurity, IOT, Cloud' },
      { title: 'Judging Criteria', content: 'Innovation, Working Model, Team Work' },
      { title: 'Prizes', content: 'Information on the prizes available for winners.' },
    ]
  };
  const openRegistrationForm = () => {
    // Handle form modal logic here
    setIsModalOpen(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewTab sections={sampleEvent.exampleSections} />;
      case 'Challenges':
        return <ChallengesTab />;
      case 'Teams/Projects':
        // return <p>This is the teams content.</p>;
        return <TeamsTab />
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
              className={`px-4 py-1 border-primary  ${activeTab === tab ? 'border-b-2' : ''
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Event Details Card */}
        <div className="bg-sidebar p-4 px-6 lg:mr-8 rounded-lg shadow-md lg:w-max lg:w-auto flex flex-col gap-2 items-center">
          <h2 className="text-xl lg:text-3xl font-semibold">{sampleEvent.title}</h2>
          <div className="flex items-center space-x-2 text-accent">
            <span>{sampleEvent.date} - </span>
            <span>{sampleEvent.location}</span>
          </div>
          <button
            onClick={openRegistrationForm}
            className="px-2 py-2 bg-[#00FF95] text-card text-sm shadow-md  rounded-lg"
          >
            Apply Now
          </button>
          <span className={`text-sm`}>Open for
            Speakers, Menotrs, Participants</span>
          {isModalOpen &&
            (<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-sidebar text-accent w-3/4 rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto">
                {/* Top Section */}
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex items-center text-sm"
                  >
                    <span className="pr-2">&larr;</span> <span className={`hover:underline underline-offset-4`}>Back</span>
                  </button>
                </div>
                <GeneralApplicationForm
                  eventName="Eco-Hackathon Misr"
                  eventDates="December 1-3, 2024"
                  questions={[
                    {
                      id: "name",
                      type: "field",
                      label: "Full Name",
                      validation: Yup.string().required("Full Name is required"),
                    },
                    {
                      id: "email",
                      type: "field",
                      label: "Email Address",
                      validation: Yup.string().email("Invalid email").required("Email is required"),
                    },
                    {
                      id: "motivation",
                      type: "textarea",
                      label: "Why do you want to join this hackathon?",
                      validation: Yup.string().required("Motivation is required"),
                    },
                    {
                      id: "category",
                      type: "select",
                      label: "Which category are you applying for?",
                      options: ["Sustainability", "Smart Cities", "Renewable Energy"],
                      validation: Yup.string().required("Please select a category"),
                    },
                    {
                      id: "priorExperience",
                      type: "radio",
                      label: "Do you have prior hackathon experience?",
                      options: ["Yes", "No", "Maybe", "LEt's try"],
                      validation: Yup.string().required("This field is required"),
                    },
                  ]}
                />
              </div>
            </div>)
          }
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
