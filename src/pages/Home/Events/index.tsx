import { PlatformEvents } from "../../Platform/platformEvents";

export function HomePageEvents(){
    return(
        <div className={`my-11 flex flex-col gap-11`}>
            <h1 className={`text-3xl font-semibold`}>Upcoming <span className={`text-primary`}>Events</span> </h1>
            <PlatformEvents />
        </ div>
    )
}