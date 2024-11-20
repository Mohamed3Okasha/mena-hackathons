import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { generateSubRoute } from "../../utils/functions";

export function UserProfile(){
    const [activeTab, setActiveTab] = useState('Profile ID');
    return(
        <>
            <div className="flex justify-between space-x-4 items-center justify-center">
            {['Profile ID', 'Profile Details'].map((tab) => (
            <Link
                to={generateSubRoute(tab)}
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full px-4 py-1 border-logo  ${
                activeTab === tab ? 'border-b-2' : ''
                }`}
            >
                {tab}{tab === `Profile ID` ? ` (Business Card)` : ``}
            </Link>
            ))}
            </div>
            <div className={``}>
                <Outlet />
            </div>
        </>
    )
    
}