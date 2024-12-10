import { useState } from 'react';

type Challenge = {
  title: string;
  description: string;
  image: string;
  details: string;
  insights: string[];
  judgingCriteria: string[];
  prizes: { place: string; reward: string }[];
};

export function ChallengeCard ({ challenge }: { challenge: Challenge }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Challenge Card */}
      <div className="flex gap-2 items-stretch">
        {/* Image */}
        <div className="w-1/5">
          <img src={challenge.image} alt={challenge.title} className="w-40 rounded-xl object-cover" />
        </div>
        {/* Challenge Info */}
        <div className="flex-1 bg-card border-primary/[.5] border-[1px] rounded-xl p-4">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">{challenge.title}</h3>
            <button onClick={() => setIsModalOpen(true)} className="text-xs text-accent hover:underline underline-offset-2">More Details</button>
          </div>
          <p className="text-sm text-left mt-2">{challenge.description}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="text-left fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-card text-accent w-full max-w-4xl rounded-lg shadow-lg p-6">
            {/* Top Section */}
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex items-center text-sm"
                >
                    <span className="pr-2">&larr;</span> <span className={`hover:underline underline-offset-4`}>All Challenges</span> 
                </button>
              <div className="flex gap-2">
                {/* Add logos here */}
                <img src="https://via.placeholder.com/50" alt="Logo 1" className="w-8 h-8" />
                <img src="https://via.placeholder.com/50" alt="Logo 2" className="w-8 h-8" />
              </div>
            </div>
            {/* Challenge Title */}
            <h2 className="text-white text-2xl font-bold mb-4">{challenge.title}</h2>
            {/* Challenge Details */}
            <p className="mb-6">{challenge.details}</p>
            {/* Insights Section */}
            <section className="mb-6">
              <h3 className="text-primary text-xl font-semibold mb-2">Insights</h3>
              <ul className="pl-3 list-disc list-inside text-sm">
                {challenge.insights.map((insight, idx) => (
                  <li key={idx}>{insight}</li>
                ))}
              </ul>
            </section>
            {/* Judging Criteria */}
            <section className="mb-6">
              <h3 className="text-primary text-xl font-semibold mb-2">Judging Criteria</h3>
              <ul className="pl-3 list-disc list-inside text-sm">
                {challenge.judgingCriteria.map((criteria, idx) => (
                  <li key={idx}>{criteria}</li>
                ))}
              </ul>
            </section>
            {/* Prizes Section */}
            <section>
              <h3 className="text-primary text-xl font-semibold mb-2">Challenge Prizes</h3>
              <ul className="pl-3 list-disc list-inside text-sm">
                {challenge.prizes.map((prize, idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{prize.place}:</span> {prize.reward}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </>
  );
};