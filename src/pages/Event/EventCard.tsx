import { Link } from "react-router-dom";
import { generateEventId } from "../../utils/functions";

type EventStatus = "upcoming" | "finished" | "running";

interface EventCardProps {
  imageUrl: string;
  status: string;
  title: string;
  date: string; // format: "Month, Year"
  location: string; // format: "City, Country"
  tags: string[];
}

export function EventCard ({ imageUrl, status, title, date, location, tags, }: EventCardProps) {
  return (
    <Link to={`/app/events/${generateEventId(title)}`} className="block p-5 w-max max-w-sm bg-card rounded-lg shadow-lg overflow-hidden">
      {/* Image and Status Ribbon */}
        <div className="relative">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="absolute top-2 -right-6 transform rotate-45 bg-card">
                <span
                className={`block px-4 py-1 text-xs uppercase text-white bg-${
                    status === "upcoming"
                    ? "blue-500"
                    : status === "finished"
                    ? "gray-500"
                    : "green-500"
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