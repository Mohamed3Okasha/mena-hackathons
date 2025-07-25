import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { generateSubRoute } from "../../utils/functions";

export function UserProfile(){
    const [activeTab, setActiveTab] = useState('Profile Details');
    return(
        <>
            <div className="flex justify-between space-x-4 items-center justify-center">
            {['Profile Details', 'Profile ID'].map((tab) => (
            <Link
                to={generateSubRoute(tab)}
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full px-4 py-1 border-primary hover:bg-primary hover:bg-opacity-10 ${
                activeTab === tab ? 'border-b-2' : ''
                }`}
            >
                {tab}{tab === `Profile ID` ? ` (Business Card)` : ``}
            </Link>
            ))}
            </div>
                <Outlet />
        </>
    )
    
}