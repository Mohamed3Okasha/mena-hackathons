import { TeamView } from "./TeamView";
import { TeamMember } from "./types";
// interface ProjectPageProps{
//     members: TeamMember[];
//     teamName: string;
// }
export function ProjectPage(){
    const teamName = "Name1";
    const members: TeamMember[] = [{
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
    return(
        <TeamView teamName={teamName} members={members} />
    )
}