import { EventCard } from "../Event/EventCard";
import eventImage from "../../assets/event-card-image.png"

export function PlatformEvents(){
    const eventsData = [
        {
            imageUrl: eventImage,
            status: `upcoming`,
            title: `EcoHackathon Bahrain`,
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
            title: `NEOM Competition`,
            date: `April, 2025`, // format: "Month, Year"
            location: `Riyadh, KSA`, // format: "City, Country"
            tags: [`Urban Development`, `Smart Cities`],
        },
        {
            imageUrl: eventImage,
            status: `upcoming`,
            title: `NEOM Competition`,
            date: `April, 2025`, // format: "Month, Year"
            location: `Riyadh, KSA`, // format: "City, Country"
            tags: [`Urban Development`, `Smart Cities`],
        }
        ,
        ,
    ]
    return(
        <div className={`flex flex-wrap gap-11 justify-center`}>
            {eventsData.map((eventData: any, index: number) => (
                <EventCard {...eventData} key={index }/>))
            }
        </div>
    )
}

interface eventData{
    imageUrl: string,
    status: string,
    title: string,
    date: string,
    location: string,
    tags: string [],
}

interface CollectionEventsProps{
    eventsData: eventData[]
}

export function CollectionEvents({eventsData}: CollectionEventsProps){
    
    return(
        <div className={`flex flex-wrap gap-14 justify-center p-2 sm:p-0`}>
            {eventsData.map((eventData: any, index: number) => (
                <EventCard {...eventData} key={index }/>))
            }
        </div>
    )
}