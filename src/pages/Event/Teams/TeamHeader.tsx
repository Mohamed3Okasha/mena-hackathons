import { useState } from "react";

export function TeamHeader() {
    const [activeTab, setActiveTab] = useState("My Team");
    const renderContent = () => {
        switch (activeTab) {
            case 'My Team':
                return `My Team`;
            case 'All submitted projects':
                return `submitted projects`;
            default:
                return null;
        }
    };
    return (
        <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div className="space-x-6">
                <button className="font-semibold text-blue-600">My Team</button>
                <button className="text-gray-600">All submitted projects</button>
            </div>
            <div className="flex flex-wrap space-x-4 items-center justify-center">
                {['Overview', 'Challenges', 'Teams/Projects'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-1 border-primary  ${activeTab === tab ? 'border-b-2' : ''
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="flex-1 space-y-4">
                {/* <h3 className="text-2xl font-bold">{activeTab}</h3> */}
                {renderContent()}
            </div>
        </div>


    );
}