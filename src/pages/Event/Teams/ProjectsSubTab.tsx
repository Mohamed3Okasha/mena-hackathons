import eventImage from "../../../assets/event-card-image.png"
import { ProjectCard } from "./ProjectCard";

export function ProjectsSubTab(){
    const projectsData = [
        {
            imageUrl: eventImage,
            "status": "initiated",
            "title": "GreenOasis",
            "breifDescription": "A project focused on creating vertical gardens in urban areas to combat air pollution.",
            "challenges": ["Urban Development"]
        },
        {
            imageUrl: eventImage,
            "status": "completed",
            "title": "SolarNet",
            "breifDescription": "A networked solar energy grid for rural communities to improve energy access.",
            "challenges": ["Smart Cities"]
        },
        {
            imageUrl: eventImage,
            "status": "initiated",
            "title": "AquaCycle",
            "breifDescription": "A system to recycle and purify water in drought-affected regions.",
            "challenges": ["Water Management"]
        },
        {
            imageUrl: eventImage,
            "status": "completed",
            "title": "EcoTrail",
            "breifDescription": "A digital platform promoting eco-friendly tourism in protected areas.",
            "challenges": ["Tourism and Environment"]
        },
        {
            imageUrl: eventImage,
            "status": "initiated",
            "title": "PlastiCycle",
            "breifDescription": "An initiative to turn plastic waste into construction materials for low-income housing.",
            "challenges": ["Waste Management"]
        }
    ]
    return(
        <div className={`flex flex-wrap gap-7 justify-center`}>
            {projectsData.map((eventData: any, index: number) => (
                <ProjectCard {...eventData} key={index } />))
            }
        </div>
    )
}