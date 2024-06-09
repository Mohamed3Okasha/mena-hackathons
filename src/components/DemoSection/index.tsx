export function DemoSection(){
    return(
        <div className={`p-5 sm:px-20 sm:py-10 my-auto`} id={`services`}>
            <div className={`mb-3`}>
                <h1 className="text-3xl lg:text-4xl font-semibold leading-none mb-3">
                    <span className={`mr-3`} >
                        Our
                    </span> 
                    <span className={`text-[#00FF95]`}>
                        Platform
                    </span>
                </h1>
                <p className={`font-light text-1xl text-[#CECED0]`}>
                    We work collectively, together we’re brighter!
                </p>
            </div>
            <div className={`mt-10 flex flex-col items-center`}>
                <h1 className="text-[#CECED0] text-2xl lg:text-3xl font-semibold leading-none mb-3">
                        Would you like to Empower a Hackathon with our solution?
                </h1>
                <a href={`mailto:demo@menahackathons.com`} target={`blank`} className={`mt-10 flex justify-center items-center gap-3 font- text-[#00FF95] mb-5 w-fit border-2 border-[#00FF95] p-3 rounded-lg font-bold`}>
                    Request a Demo
                </a>
            </div>
        </div>
    )
}