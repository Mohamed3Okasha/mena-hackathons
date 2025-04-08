import { useTranslation } from "react-i18next";
import mhLogo from "../../assets/mh-logo-web.png";
import { retrieveUserData } from "../../utils/auth";
import { useEffect } from "react";

export function Navbar() {
    const [t, i18n] = useTranslation("global");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
        localStorage.setItem('language', event.target.value);
    };
    const { language, token, user } = retrieveUserData();

    useEffect(() => {
        if (language) {
            i18n.changeLanguage(language);
        }
    }, [])

    return (
        <nav className="dark:bg-sidebar">
            <div className="w-screen absolute flex items-center justify-between px-3 sm:px-[10%]  lg:mx-auto py-3">
                <a href="#" className="w-fit flex items-center">
                    <img src={mhLogo} className="h-16 mr-3" alt="MENA Hackathons Logo" />
                    {/* <div className={`flex flex-col`}>
                        <span className="hidden lg:inline self-center text-xl font-semibold whitespace-nowrap dark:text-white">{t("navbar.brandName")}</span>
                    </div> */}
                </a>
                <div>
                    {/* <span>{t("navbar.selectedLanguage")} : </span> */}
                    <select
                        className="w-fit rounded bg-sidebar text-white bg-transparent hover:cursor-pointer focus:outline-none focus:bg-sidebar"
                        onChange={handleChange}
                        value={i18n.language}
                    >
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                    </select>
                </div>
                
                {/* <ul className=" font-medium flex p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:mt-0 md:border-0 bg-transparent">
                    <li className="px-3 pr-0 flex items-center">

                    </li>
                    <li className="px-3 pr-0 flex items-center">

                    </li>

                </ul> */}
            </div>
        </nav>
    )
}