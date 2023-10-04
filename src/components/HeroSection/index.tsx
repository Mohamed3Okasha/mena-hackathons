export function HeroSection(){
    return(
        <div 
            className={`bg-blend-multiply bg-center`}
            style={{ 
                backgroundImage: `url(https://github.com/Mohamed3Okasha/mena-hackathons/blob/main/src/assets/hero-section-bg.png?raw=true)`,
                backgroundColor: `rgba(26, 67, 88, 0.60)`,
            }}> 
           <div className={`py-44 px-[80px] my-auto`}>
                <h1 className="text-[#00FF95] text-6xl lg:text-8xl font-semibold leading-none mb-3 flex flex-col">
                    <span className={``} >
                        MENA
                    </span> 
                    <span>
                       Hackathons
                    </span>
                </h1>
                <p className={`font-medium	text-3xl`}>
                    The 1st Hackathon Platform in the Middle East and North Africa
                </p>
           </div>
        </div>
    )
}