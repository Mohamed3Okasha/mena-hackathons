import { ServiceCard } from "../ServicesSection/service-card";
import developmentIconPath from "../../assets/development-icon.svg";
import uiuxIconPath from "../../assets/ui-ux-icon.svg";
import graphicDesignIconPath from "../../assets/graphic-design-icon.svg";


export function ProjectsSection(){
    return(
        <div className={`p-5 sm:px-20 sm:py-10 my-auto`} id={`about`}>
        <div className={`mb-3`}>
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
            <ServiceCard title={`Hackathon`} subTitle={`Green Tech Hack, where the brightest minds work in the favour of our planet`} iconPath={developmentIconPath} altText={`icon`} iconBgColor={`teal`}/>
            <ServiceCard title={`Podcast`} subTitle={`Let's share the most innovative way to utilise technology for a more sustainable earth`} iconPath={uiuxIconPath} altText={`icon`} iconBgColor={`red`}/>
            <ServiceCard title={`Virtual Exchange`} subTitle={`Spreading green tech and culture exchange`} iconPath={graphicDesignIconPath} altText={`icon`} iconBgColor={`sky`}/>
        </div>
    </div>
    )
}