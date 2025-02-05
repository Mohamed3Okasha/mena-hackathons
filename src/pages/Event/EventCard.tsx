import { Link } from "react-router-dom";
import { generateSubRoute } from "../../utils/functions";

type EventStatus = "ongoing" | "upcoming" | "finished";

interface EventCardProps {
  imageUrl: string;
  status: EventStatus;
  title: string;
  date: string; // format: "Month, Year"
  location: string; // format: "City, Country"
  tags: string[];
}

export function EventCard ({ imageUrl, status, title, date, location, tags, }: EventCardProps) {
  return (
    <Link to={`${generateSubRoute(title)}`} className="flex flex-col p-5 max-w-sm bg-card rounded-lg shadow-lg overflow-hidden">
      {/* Image and Status Ribbon */}
        <div className="relative">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className={`absolute top-2 -right-6 transform rotate-45 bg-card`}>
              <span
              className={`block px-4 py-1 text-xs uppercase ${
                status === 'ongoing'
                ? 'text-primary'
                : status === 'upcoming'
                ? 'text-secondary'
                : 'text-white'
              }`}
              style={{
                  clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
              }}
              >
                  {status}
              </span>
            </div>
        </div>


      {/* Card Content */}
      <div className="pt-4">
        <h2 className="text-2xl font-semibold text-accent">{title}</h2>
        <p className="text-sm text-accent">{date}</p>
        <p className="text-sm text-accent">{location}</p>
        
        {/* Tags */}
        <div className="mt-3 flex justify-center space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-accent bg-secondary bg-opacity-10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};