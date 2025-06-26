import { CollectionEvents } from "../../Platform/platformEvents";
import eventImage from "../../../assets/event-card-image.png"
import { useTranslation } from "react-i18next";

export function HomePageEvents() {
    const [t, i18n] = useTranslation("global");

    const eventsData = [
        {
            imageUrl: eventImage,
            status: `upcoming`,
            title: `EcoHackathon`,
            date: `2025`, // format: "Month, Year"
            location: `MENA Region`, // format: "City, Country"
            tags: [`Smart Cities`, `Sustainable Urbanisation`],
        },
        {
            imageUrl: eventImage,
            status: `upcoming`,
            title: `HACKTIVE Youth`,
            date: `2025-2026`, // format: "Month, Year"
            location: `EU - SouthMed`, // format: "City, Country"
            tags: [`Active Citizenship`],
        },
        // {
        //     imageUrl: eventImage,
        //     status: `upcoming`,
        //     title: `NEOM Competition`,
        //     date: `2025`, // format: "Month, Year"
        //     location: `Riyadh, KSA`, // format: "City, Country"
        //     tags: [`Innovation`, `Entrepreneurship`],
        // },
    ]
    return (
        <div className={`my-11 flex flex-col gap-11`}>
            <h1 className={`text-3xl font-semibold`}>
                {i18n.language === "ar" ? (
                    <> {t("homePageEvents.titleEvents")} <span className={`text-primary`}>{t("homePageEvents.titleUpcoming")}</span> </>
                ) : (
                    <> {t("homePageEvents.titleUpcoming")} <span className={`text-primary`}>{t("homePageEvents.titleEvents")}</span> </>
                )}
            </h1>
            <CollectionEvents eventsData={eventsData} />
        </ div>
    )
}