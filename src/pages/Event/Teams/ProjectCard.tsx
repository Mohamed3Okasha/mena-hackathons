import { useState } from "react";
import { TeamView } from "./TeamView";
import { TeamMember } from "./types";
// import { generateSubRoute } from "../../utils/functions";

type ProjectStatus = "initiated" | "completed";

interface ProjectCardProps {
    imageUrl: string;
    status: ProjectStatus;
    title: string;
    breifDescription: string;
    challenges?: string[];
}

export function ProjectCard({ imageUrl, status, title, breifDescription, challenges }: ProjectCardProps) {
    const[isModalOpen, setIsModalOpen] = useState(false);
    const members: TeamMember[] = [
        {
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
    return (
        <>
                <div className="flex flex-col gap-3 p-5 w-max max-w-sm bg-card rounded-lg shadow-lg overflow-hidden">
                        {/* Image and Status Ribbon */}
                        <div className="relative">
                            <img src={imageUrl} alt={title} className="w-full h-48" />
                        </div>

                        {/* Card Content */}
                        <div className="flex flex-col gap-3 text-left">
                            <div className={`flex justify-between`}>
                                <h3
                                    className={`block text-lg uppercase ${status === 'initiated'
                                            ? 'text-primary'
                                            : status === 'completed'
                                                ? 'text-secondary'
                                                : 'text-white'
                                        }`}
                                >
                                    {status}
                                </h3>
                                {/* Tags */}
                                <div className="text-xs flex items-center justify-center">
                                    {challenges?.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-medium text-accent bg-secondary bg-opacity-10 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h2 className="text-2xl font-semibold">{title}</h2>
                            <p className="text-sm text-accent ">{breifDescription}</p>

                            <button
                                onClick={()=>setIsModalOpen(true)}
                                className={`px-4 py-2 rounded-lg bg-sidebar hover:text-primary w-fit`}
                            >
                                View project details
                            </button>
                        </div>
                </div>
            {
                isModalOpen && 
                (<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-sidebar text-accent w-full max-w-4xl rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto">
                    {/* Top Section */}
                        <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="flex items-center text-sm"
                        >
                            <span className="pr-2">&larr;</span> <span className={`hover:underline underline-offset-4`}>All Projects</span> 
                        </button>
                            {/* <div className="flex gap-2">
                                <img src="https://via.placeholder.com/50" alt="Logo 1" className="w-8 h-8" />
                                <img src="https://via.placeholder.com/50" alt="Logo 2" className="w-8 h-8" />
                            </div> */}
                        </div>
                    <TeamView teamName="test" members={members} viewOnly />
                    </div>
                </div>)
            }
        </>
    );
};