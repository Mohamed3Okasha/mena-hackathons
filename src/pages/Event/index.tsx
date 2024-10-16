import { EventPage } from "./EventPage";

{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScC96S9YAhfJr7J-PKJbREd8jKFJ9LjtV1gLpfcewMaGOLn_A/viewform?embedded=true" width="640" height="2231" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
export function Event(){
    return(
        <>
            <EventPage
                posterUrl="https://example.com/poster.jpg"
                headline={`🌍 Unlocking Opportunities: Innovation, Intercultural Exchange & Sustainability! 🌱✨`}
                description={`
                              Join us at Untapped, where we’ll dive into the future of innovation, intercultural exchange, and sustainability. We are glad to host ErasmusDays and get to know more about the Erasmus programme and different funded mobilities like Training course, Youth Exchanges and Study Visits.
                              🔓 Unlocking opportunities is at the heart of this gathering, connecting you with:
                              Scholarship & Exchange Programs that open doors globally.
                              Innovation & Sustainability Workshops aimed at driving real-world impact.
                              🔗 Don’t miss out! Discover how you can tap into your potential and make a difference.
                            `}
                googleFormUrl={"https://docs.google.com/forms/d/e/1FAIpQLScC96S9YAhfJr7J-PKJbREd8jKFJ9LjtV1gLpfcewMaGOLn_A/viewform?embedded=true"}
            />
        </>
    )
}