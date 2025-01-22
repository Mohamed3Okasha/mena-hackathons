import mhLogo from "../../../assets/mh-logo-web.png";
import { retrieveUserData } from "../../../utils/auth";

export function HeroSection() {
  const { language, token, user } = retrieveUserData();

  return (
    <div
      className="relative w-full h-[100vh] md:h-screen bg- text-white"
      style={{}}
    >
      {/* Hero Section */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Background Shape */}
        <div
          className="absolute top-0 w-10/12 md:w-8/12 lg:w-7/12 h-full bg-card rounded-b-full -translate-y-2/4"
          style={{}}
        ></div>

        {/* Top Row */}
        <div
          className={`absolute top-[3%] md:top-[0%] flex flex-col`}
        >
          <div className={`flex flex-col gap-7 md:flex-row md:gap-24 items-center justify-between`}>

            <div className={`w-4/12 md:w-2/12 flex items-center justify-center`}>
              <a
                href="https://menahackathons.com/"
                className="w-9/12 flex items-center"
              >
                <img
                  src={mhLogo}
                  className="w- mr-3"
                  alt="MENA Hackathons Logo"
                />
              </a>
            </div>

            {/* Title and Subtitle */}
            <div className="relative md:top-24 flex flex-col items-center mt-">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium">
                MENA Hackathons <br /> Platform
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-accent font-extralight mt-2 text-center">
                The 1st Bilingual Hackathon Platform in <br /> the Middle East &
                North Africa
              </p>
            </div>

            {/* Platform/Sign In Button */}
            <div className={`w-3/12 md:w-2/12 flex items-center justify-center`}>
              {token && user && user.firstName ? (
                <a
                  href={`/app/events`}
                  target={`_self`}
                  className={` text-sm  md:text-base  md:font-bold h-fit md:border-1 hover:text-primary/[.9] text-primary w-fit border-2 border-primary hover:border-primary/[.9] p-1 md:p-2 lg:p-3 rounded-lg`}
                >
                  Platform
                </a>
              ) : (
                <a
                  href={`/sign`}
                  target={`_self`}
                  className={`w-2/12 h-fit block hover:bg-gray-100 md:hover:bg-transparent md:border-1 md:hover:text-primary md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-primary w-fit border-2 border-primary p-1 lg:p-3 rounded-lg`}
                >
                  Sign In
                </a>
              )}
            </div>
          
          </div>
        {/* Vertical Dashed Line */}
        <div className="absolute top-[100%] left-1/2 transform -translate-x-/2 w-1 h-3/4 border-l-4 border-dashed border-gray-400 rotate-6"></div>
      </div>
          {/* Logo */}
        </div>

    </div>
  );
}
