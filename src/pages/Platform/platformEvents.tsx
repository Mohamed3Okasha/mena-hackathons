import { EventCard } from "../Event/EventCard";
import eventImage from "../../assets/event-card-image.png"

export function PlatformEvents(){
    const eventsData = [
        {
            imageUrl: eventImage,
            status: `upcoming`,
            title: `RUW Hackathon`,
            date: `Feb, 2025`, // format: "Month, Year"
            location: `Manama, Bahrain`, // format: "City, Country"
            tags: [`Women Empoerment`, `Education`],
        },
        {
        imageUrl: eventImage,
        status: `upcoming`,
        title: `Eco-Hackathon Misr`,
        date: `Feb, 2025`, // format: "Month, Year"
        location: `Cairo, Egypt`, // format: "City, Country"
        tags: [`Urban Development`, `Smart Cities`],
        },
        {
            imageUrl: eventImage,
            status: `upcoming`,
            title: `Eco-Hackathon Misr`,
            date: `Feb, 2025`, // format: "Month, Year"
            location: `Riyadh, KSA`, // format: "City, Country"
            tags: [`Urban Development`, `Smart Cities`],
        }
        ,
        {
            imageUrl: eventImage,
            status: `upcoming`,
            title: `Eco-Hackathon Misr`,
            date: `Feb, 2025`, // format: "Month, Year"
            location: `Riyadh, KSA`, // format: "City, Country"
            tags: [`Urban Development`, `Smart Cities`],
        }
        ,
        {
            imageUrl: eventImage,
            status: `upcoming`,
            title: `Eco-Hackathon Misr`,
            date: `Feb, 2025`, // format: "Month, Year"
            location: `Riyadh, KSA`, // format: "City, Country"
            tags: [`Urban Development`, `Smart Cities`],
        }
    ]
    return(
        <div className={`flex flex-wrap gap-7 justify-center`}>
            {eventsData.map((eventData: any, index: number) => (
                <EventCard {...eventData} key={index }/>))
            }
        </div>
    )
}