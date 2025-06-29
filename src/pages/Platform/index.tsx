import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaBell, FaUserCircle, FaUser, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import mgLogo from '../../assets/mh-logo-web.png';
import { retrieveUserData } from '../../utils/auth';

export function Platform() {
    const navigate = useNavigate();
    // const location = useLocation();
    // const isEventRoute = location.pathname.includes('/app/events/');

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<number>(0);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
    const handleSignOut = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      navigate('/');
    };
    const sidebarItems = [
        { name: 'Events', route: `events`, icon: <FaCalendarAlt />},
        { name: 'Profile', route: `profile/profile-details`, icon: <FaUser />},
        { name: 'Sign Out', route:``, icon: <FaSignOutAlt />, action: handleSignOut },
    ]
    const handleMenuClick = (menu: number) => {
        setSelectedMenu(menu);
    };

    useEffect(() => {
        const { token, user } = retrieveUserData();
        if (!token && !user) {navigate(`/`)}
    })

    return (
    <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar for Desktop, Top Bar for Mobile */}
        <div
        className={`bg-sidebar text-white transition-all duration-300 ${
            isSidebarOpen ? 'md:w-fit' : 'md:w-max md:w-16'
        } md:flex md:flex-col md:h-full`}
        >
        {/* Sidebar Toggle Button */}
        <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 focus:outline-none hover:bg-primary hover:bg-opacity-10 transition duration-150 hidden md:flex md:justify-end"
        > 
            {isSidebarOpen ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
        </button>
        {/* Logo */}
        <div className={`hidden md:flex justify-center border-b-[1px] ${isSidebarOpen ? `p-5` : `p-2`} mx-2 border-accent border-opacity-60`}>
            <img src={mgLogo} alt={`mh logo`} className={`${isSidebarOpen ? `w-20` : `w-9`}`}/>
        </div>
        {/* Sidebar/Top Bar Menu */}
        <ul className="flex md:flex-col justify-around md:mt-4 space-y-2 md:space-y-2">
            {sidebarItems.map((menu, index) => (
            <li
                key={menu.name}
                className={``}
            >
                <Link 
                    onClick={() => {
                        if (menu.action) {
                            menu.action();
                        } else {
                            handleMenuClick(index);
                        }
                    }}
                    to={menu.route}
                    className={`text-accent flex items-center space-x-3 ${isSidebarOpen? `px-9 justify-start` : `justify-center`} p-2  transition duration-150 hover:bg-primary hover:bg-opacity-10 ${selectedMenu === index ? 'bg-primary bg-opacity-5 opacity-100' : 'opacity-70'}`}
                >
                    <span className="text-lg">{menu.icon}</span>
                    {/* Only show text when sidebar is open */}
                    {isSidebarOpen && <span className="hidden md:block">{menu.name}</span>}
                </Link>
            </li>
            ))}
        </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
        {/* Notification and Profile Icons */}
        <div className="hidden md:flex justify-between md:justify-end p-4 shadow-md">
            <div className="flex items-center space-x-4">
            <FaBell className="text-accent cursor-pointer" />
            <div className="relative">
                <FaUserCircle
                className="text-accent cursor-pointer"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                />
                {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                    <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                    My Profile
                    </Link>
                    <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                    Sign Out
                    </button>
                </div>
                )}
            </div>
            </div>
        </div>

        {/* Dynamic Content based on Sidebar selection */}
        <div className="flex flex-col gap-7 p-3 md:p-6 overflow-y-auto">
            <Outlet />
        </div>
        </div>
    </div>
    );
}