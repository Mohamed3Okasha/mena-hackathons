import mhLogo from "../../assets/mh-logo-web.png";

export function Navbar(){
    return(
        <nav className="dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-11 lg:mx-auto py-5">
                <a href="https://menahackathons.com/" className="w-fit flex items-center">
                    <img src={mhLogo} className="h-12 mr-3" alt="MENA Hackathons Logo" />
                    <span className="hidden lg:inline self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MENA Hackathons</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="px-3">     
                        <a href="#home" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:hover:text-[#48ABDD] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                        </li>
                        <li className="px-3">
                        <a href="#about" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#48ABDD] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li className="px-3">
                        <a href="#services" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#48ABDD] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li className="px-3">
                        <a href="#partners" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#48ABDD] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Partners</a>
                        </li>
                        <li className="px-3 pr-0">
                        <a href="#contact" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#48ABDD] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}