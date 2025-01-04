import { useEffect, useState } from 'react';
import { NoTeamView } from './NoTeamView';
import { TeamView } from './TeamView';
import { TeamMember } from './types';

export function MyTeamTab() {
  const [team, setTeam] = useState<{
    name: string;
    code: string;
    members: TeamMember[];
  } | null>(null);

  const handleLeaveTeam = () => {
    setTeam(null);
  };

  useEffect(() => {
    setTeam({
      name: "Name 1",
      code: "D#md90218",
      members: [{
        id: "1",
        name: "Name Name 1",
        role: 'Leader',
        position: "Frontend Developer",
        photoUrl: `https://via.placeholder.com/150`,
      },
      {
        id: "2",
        name: "Name Name 2",
        role: 'Member',
        position: "Backend Developer",
        photoUrl: `https://via.placeholder.com/150`,
      },
      {
        id: "3",
        name: "Name Name 3",
        role: 'Member',
        position: "UI/UX Designer",
        photoUrl: `https://via.placeholder.com/150`,
      }
      ]
    })
  }, [])
  return (
    team ? (
      <TeamView
        teamName={team.name}
        teamCode={team.code}
        members={team.members}
        onLeaveTeam={handleLeaveTeam}
      />)
      :
      (
        <NoTeamView />
      )
  )
}