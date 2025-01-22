import { retrieveUserData } from "../../utils/auth";

export function HeroSection() {
    const { language, token, user } = retrieveUserData();

    return (
        <div
            className={`bg-blend-luminosity bg-center`}
            style={{
                backgroundImage: `url(https://github.com/Mohamed3Okasha/mena-hackathons/blob/main/src/assets/hero-section-bg.png?raw=true)`,
                backgroundColor: `rgba(26, 67, 88, 1)`,
                backgroundSize: `cover`,
            }}>
            <div className={`py-4 sm:py-40 px-[5%] sm:px-[20%] my-auto flex flex-col gap-11 items-center`}>
                <div></div>
                <h1 className="text-primary text-4xl sm:text-6xl lg:text-8xl font-semibold leading-none mb-3 flex flex-col">
                    {/* <span className={``} >
                        MENA
                    </span>
                    <span>
                        Hackathons
                    </span> */}
                </h1>
                <p className={`font-medium text-2xl	sm:text-4xl`}>
                    The 1st Bilingual Hackathon Platform in the Middle East and North Africa
                </p>
                <p className={`font-medium text-xl sm:text-2xl`}>
                    Be part of the Region's Innovation Ecosystem
                </p>
                <a href={`${(token && user && user.firstName) ? `/app/events` : `/sign`}`} target={`_self`} className={`py-2 pl-3 pr-4 hover:bg-transparent md:hover:text-primary md:px-7 dark:text-white font-semibold text-white  border-2 border-primary bg-primary p-3 rounded-lg shadow-md shadow-black`}>
                    {(token && user && user.firstName) ? `Go to Platform` : `Sign now`}
                </a>
            </div>
        </div>
    )
}