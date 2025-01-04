import { useState } from 'react';
import { TeamJoinCreate } from './TeamJoinCreate';
import noTeamViewIullstration from '../../../assets/noteam-view.svg';

type JoinMethod = 'code' | 'email' | 'create' | null;

export function NoTeamView() {
  const [joinMethod, setJoinMethod] = useState<JoinMethod>(null);

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      {/* Placeholder SVG - Replace with your actual SVG */}
      <img src={noTeamViewIullstration} alt={`no team view illustration`} />
      <h3 className="text-lg">
        You don't have a team yet
      </h3>
      <h2 className="text-primary text-2xl font-bold mb-6">Create your team or Join one Now</h2>

      <div className="flex space-x-4">
        <button
          onClick={() => setJoinMethod('code')}
          className={`px-4 py-2 rounded-lg ${joinMethod === 'code'
              ? 'bg-sidebar border-[1px] border-primary text-primary'
              : 'bg-card hover:text-primary'
            }`}
        >
          By Team Code
        </button>
        <button
          onClick={() => setJoinMethod('email')}
          className={`px-4 py-2 rounded-lg ${joinMethod === 'email'
              ? 'bg-sidebar border-[1px] border-primary text-primary'
              : 'bg-card hover:text-primary'
            }`}
        >
          By Email
        </button>
        <button
          onClick={() => setJoinMethod('create')}
          className={`px-4 py-2 rounded-lg ${joinMethod === 'create'
              ? 'bg-sidebar border-[1px] border-primary text-primary'
              : 'bg-card hover:text-primary'
            }`}
        >
          Create your team by yourself
        </button>
      </div>
      {joinMethod && <TeamJoinCreate method={joinMethod} />}
    </div>
  );
}