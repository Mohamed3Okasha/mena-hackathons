import { ServiceCard } from "./service-card";
import developmentIconPath from "../../assets/development-icon.svg";
import uiuxIconPath from "../../assets/ui-ux-icon.svg";
import graphicDesignIconPath from "../../assets/graphic-design-icon.svg";



export function ServicesSection(){
    return(
        <div className={`p-20 my-auto`} id={`services`}>
            <div className={`mb-11`}>
                <h1 className="text-3xl lg:text-4xl font-semibold leading-none mb-3">
                    <span className={`mr-3`} >
                        Our
                    </span> 
                    <span className={`text-[#48ABDD]`}>
                    Services
                    </span>
                </h1>
                <p className={`font-light text-1xl text-[#CECED0]`}>
                    We work collectively, together we’re brighter!
                </p>
            </div>
            <div className={`flex justify-center gap-5`}>
                <ServiceCard title={`Development`} subTitle={`Create a platform with the best and coolest quality from us`} iconPath={developmentIconPath} altText={`icon`} iconBgColor={`teal`}/>
                <ServiceCard title={`UI/UX Design`} subTitle={`We provide UI/UX Design services, and of course with the best quality`} iconPath={uiuxIconPath} altText={`icon`} iconBgColor={`red`}/>
                <ServiceCard title={`Graphic Design`} subTitle={`We provide Graphic Design services, with the best designers`} iconPath={graphicDesignIconPath} altText={`icon`} iconBgColor={`sky`}/>
            </div>
        </div>
    )
}