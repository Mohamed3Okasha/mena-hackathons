type ProjectCardProps = {
    title: string;
    iconPath: string;
    altText: string;
    iconBgColor: string;
}
export function ProjectCard(Props: ProjectCardProps){
    return(
        <div className={`relative flex flex-col items-center max-w-sm border-[1px] rounded-3xl ${Props.iconBgColor === `sky` && `border-sky-500`} ${Props.iconBgColor === `teal` && `border-teal-500`} ${Props.iconBgColor === `red` && `border-red-500`} hover:cursor-pointer`}>
            <img src={Props.iconPath} alt={Props.altText} className={`w-full bg-${Props.iconBgColor}-950 pl-4 pb-4 rounded`} />
            <span className={`absolute inset-y-1/2 text-xl lg:text-2xl font-medium`}>
                {Props.title}
            </span>

        </div>
    )
}