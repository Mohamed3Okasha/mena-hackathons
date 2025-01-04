import { MemberCard } from './MemberCard';
import { ProjectSubmissionForm } from './ProjectSubmissionForm';
import { TeamMember } from './types';

interface TeamViewProps {
  teamName: string;
  teamCode: string;
  members: TeamMember[];
  onLeaveTeam: () => void;
}

export function TeamView({
  teamName,
  teamCode,
  members,
  onLeaveTeam,
}: TeamViewProps) {
  return (
    <div className="p-">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font">{teamName}</h1>
        <p className={`text-sm`}>3 Members</p>
        <button
          onClick={onLeaveTeam}
          className="text-sm text-red-600 hover:text-red-700"
        >
          Leave Team
        </button>
      </div>

      <div className="mb-6 flex">
        <p className="text-accent bg-card p-3 rounded border-[.px] border-primary">
          Team Code: <span className="font-medium">{teamCode}</span>
        </p>
      </div>

      <div className={`flex flex-col gap-3`}>
        <h2 className="text-xl font-semibold text-left">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <MemberCard id={member.id} photoUrl={member.photoUrl} position={member.position} name={member.name} role={member.role} />
          ))}
        </div>
      </div>
      <ProjectSubmissionForm challenges={[`Smart Cities`, `Water Secuirty`]} />
    </div>
  );
}