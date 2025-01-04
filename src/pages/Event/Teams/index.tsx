import { useState } from 'react';
import { MyTeamTab } from './MyTeamTab';


export function TeamsTab() {
    const [activeTab, setActiveTab] = useState("My Team");
    const renderContent = () => {
        switch (activeTab) {
            case 'My Team':
            return <MyTeamTab /> ;
            case 'All submitted projects':
            return `submitted projects` ;
            default:
            return null;
        }
    }

  return (
    <div className="flex flex-col items-left pb-4 mb-6">
        <div className="flex gap-3 text-sm font-light mb-9">
            {['My Team', 'All submitted projects'].map((tab) => (
            <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 bg-sidebar border-primary hover:text-primary rounded-xl ${
                activeTab === tab ? 'text-primary border-[1px]' : ''
                }`}
            >
                {tab}
            </button>
            ))}
        </div>
        <div className="flex-1 bg-sidebar p-9 rounded">
            {renderContent()}
        </div>
        
    </div>
  );
}