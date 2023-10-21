import { ProjectCard } from "./project-card";
import hackathonsImgPath from "../../assets/hackathons.svg";
import virtualExchangeImgPath from "../../assets/virtual-exchange.svg";
import podcastImgPath from "../../assets/podcast.svg";


export function ProjectsSection(){
    return(
        <div className={`p-5 sm:px-20 sm:py-10 my-auto`} id={`about`}>
        <div className={`mb-9`}>
            <h1 className="text-3xl lg:text-4xl font-semibold leading-none mb-3">
                <span className={`mr-3`} >
                    Our
                </span> 
                <span className={`text-[#F04037]`}>
                    Activities
                </span>
            </h1>
            <p className={`font-light text-1xl text-[#CECED0]`}>
                A dream team full of energy and ambitions
            </p>
        </div>
        <div className={`flex flex-col md:flex-row justify-center gap-5`}>
            <ProjectCard title={`Hackathons`} iconPath={hackathonsImgPath} iconBgColor={`sky`} altText={`hackathons image`}/>
            <ProjectCard title={`Virtual Exchanges`} iconPath={virtualExchangeImgPath} iconBgColor={`red`} altText={`hackathons image`}/>
            <ProjectCard title={`Green Tech Podcast`} iconPath={podcastImgPath} iconBgColor={`teal`} altText={`hackathons image`}/>

        </div>
    </div>
    )
}