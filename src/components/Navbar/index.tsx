import { useTranslation } from "react-i18next";
import mhLogo from "../../assets/mh-logo-web.png";
import { retrieveUserData } from "../../utils/auth";
import { useEffect } from "react";

export function Navbar(){
    const [t, i18n] = useTranslation("global");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
        localStorage.setItem('language', event.target.value);
    };
    const { language, token, user } = retrieveUserData();

    useEffect(() =>{
        if(language){
            i18n.changeLanguage(language);
        }
    })
   
    return(
        <nav className="dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-11 lg:mx-auto py-5">
                <a href="https://menahackathons.com/" className="w-fit flex items-center">
                    <img src={mhLogo} className="h-12 mr-3" alt="MENA Hackathons Logo" />
                    <span className="hidden lg:inline self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{t("navbar.brandName")}</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="px-3 flex items-center">     
                        <a href="#home" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{t("navbar.home")}</a>
                        </li>
                        <li className="px-3 flex items-center">
                        <a href="#about" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{t("navbar.about")}</a>
                        </li>
                        <li className="px-3 flex items-center">
                        <a href="#services" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{t("navbar.services")}</a>
                        </li>
                        <li className="px-3 flex items-center">
                        <a href="#partners" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{t("navbar.partners")}</a>
                        </li>
                        <li className="px-3 flex items-center">
                        <a href="#contact" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{t("navbar.contact")}</a>
                        </li>
                        <li className="px-3 pr-0 flex items-center">
                            <select
                                className="w-full rounded bg-sidebar text-white bg-black hover:cursor-pointer focus:outline-none"
                                onChange={handleChange}
                                value={i18n.language}
                            >
                                <option value="en">English</option>
                                <option value="ar">العربية</option>
                             </select>
                        </li>
                        <li className="px-3 pr-0 flex items-center">
                            {(token && user && user.firstName) ? 
                                <a href={`/app/events`} target={`_self`} className={`block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-1 md:hover:text-secondary/[.9] md:p-2 dark:text-white md:dark:hover:text-secondary/[.9] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-secondary w-fit border-2 border-secondary hover:border-secondary/[.9] p-3 rounded-lg`}>
                                    Go to Platform
                                </a>
                                :
                                <a href={`/sign`} target={`_self`} className={`block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-1 md:hover:text-primary md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-primary w-fit border-2 border-primary p-3 rounded-lg`}>
                                Sign In
                            </a>}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}