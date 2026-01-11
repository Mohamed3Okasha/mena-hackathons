import { useState } from "react";
import { Link } from "react-router-dom";
import { generateSubRoute } from "../../utils/functions";
import { CircleLoader } from "../../components/Loading";

type EventStatus = "ongoing" | "upcoming" | "finished";

interface EventCardProps {
  imageUrl: string;
  status: EventStatus;
  title: string;
  date: string;
  location: string;
  tags: string[];
  reportData: string;
  isNewRoute?: boolean;
}

export function EventCard({
  imageUrl, status, title, date, location, tags, reportData, isNewRoute = false
}: EventCardProps) {
  const [showReport, setShowReport] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  // Logic to handle click: opens modal OR navigates
  const handleAction = (e: React.MouseEvent) => {
    if (!isNewRoute && reportData) {
      e.preventDefault();
      setLoading(true); // Start loading the iframe specifically
      setShowReport(true);
    }
  };

  const CardContent = (
    <div className={`flex flex-col p-5 max-w-sm bg-card rounded-lg shadow-lg overflow-hidden transition-all 
      ${(reportData || isNewRoute) ? 'cursor-pointer hover:scale-[1.02]' : ''}`}>
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 -right-6 transform rotate-45 bg-card">
          <span className={`block px-4 py-1 text-xs uppercase ${
            status === 'ongoing' ? 'text-primary' : status === 'upcoming' ? 'text-secondary' : 'text-white'
          }`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}>
            {status}
          </span>
        </div>
      </div>
      <div className="pt-4 text-center">
        <h2 className="text-2xl font-semibold text-accent">{title}</h2>
        <p className="text-sm text-accent">{date}</p>
        <p className="text-sm text-accent">{location}</p>
        <div className="mt-3 flex justify-center space-x-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium text-accent bg-secondary bg-opacity-10 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isNewRoute ? (
        <Link to={generateSubRoute(title)} style={{ textDecoration: 'none' }}>
          {CardContent}
        </Link>
      ) : (
        <div onClick={handleAction}>
          {CardContent}
        </div>
      )}

      {showReport && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex', flexDirection: 'column',
          zIndex: 10000,
        }}>
          {/* Header with Close Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 20px' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowReport(false);
                setLoading(false); // Reset loading state when closed
              }}
              style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer' }}
            >
              &times;
            </button>
          </div>

          <div style={{ flex: 1, width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Loader is visible only when loading state is true */}
            {loading && (
              <div style={{ position: 'absolute', zIndex: 10001 }}>
                <CircleLoader size={120} />
              </div>
            )}

            {/* Iframe calls onLoad when Canva content is ready */}
            <iframe 
              src={reportData} 
              onLoad={() => setLoading(false)} 
              style={{ 
                border: "none", 
                width: "100%", 
                height: "100%",
                opacity: loading ? 0 : 1, // Stay hidden while loading to look smoother
                transition: 'opacity 0.4s ease' 
              }} 
              allowFullScreen 
            />
          </div>
        </div>
      )}
    </>
  );
}