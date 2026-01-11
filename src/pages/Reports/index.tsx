import eventImage from "../../assets/event-card-image.png"
import { useTranslation } from "react-i18next";
import { CollectionEvents } from "../Platform/platformEvents";

export function Reports() {
    const [t, i18n] = useTranslation("global");

    const eventsData = [
        {
            imageUrl: eventImage,
            status: `finished`,
            title: `ThinkSustainability Cairo`,
            date: `2025`, // format: "Month, Year"
            location: `MENA Region`, // format: "City, Country"
            tags: [`Smart Cities`, `Education`, `AgriTech`],
            reportData: `https://www.canva.com/design/DAGvmqi0P4M/kHetpHfQifuFE-q_Vt0xHQ/view?embed`,
        },
        {
            imageUrl: eventImage,
            status: `finished`,
            title: `ThinkSustainability Helsinki`,
            date: `2025`, // format: "Month, Year"
            location: `Nordics`, // format: "City, Country"
            tags: [`Smart Cities`, `Sustainable Urbanism`],
            reportData: `https://www.canva.com/design/DAG1A_doVXs/JSQ3gfycu_nQIXqWEQ-Kow/view?embed`,
        },
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