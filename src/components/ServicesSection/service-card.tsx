type ServiceCardProps = {
    title: string;
    subTitle: string;
    iconPath: string;
    altText: string;
    iconBgColor: string;
}

export function ServiceCard(Props: ServiceCardProps){
    return(
        <div className={`flex flex-col items-center max-w-sm p-5 sm:p-14 border-[1px] rounded-3xl border-transparent hover:border-${Props.iconBgColor}-500 hover:cursor-pointer`}>
            <img src={Props.iconPath} alt={Props.altText} className={`w-20 bg-${Props.iconBgColor}-950 p-4 rounded-full`} />
            <h1 className="text-xl lg:text-2xl font-medium my-4">
                {Props.title}
            </h1>
            <p className={`font-light text-1xl text-[#CECED0]`}>
                {Props.subTitle}
            </p>
        </div>
    )
}