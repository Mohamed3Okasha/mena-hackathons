import { useTranslation } from "react-i18next";
import { retrieveUserData } from "../../utils/auth";

export function HeroSection() {
    const { language, token, user } = retrieveUserData();
    const [t, i18n] = useTranslation("global");
    

    return (
        <div
            className={`bg-blend-luminosity bg-center`}
            style={{
                backgroundImage: `url(https://github.com/Mohamed3Okasha/mena-hackathons/blob/main/src/assets/hero-section-bg.png?raw=true)`,
                backgroundColor: `rgba(26, 67, 88, 1)`,
                backgroundSize: `cover`,
            }}>
            <div className={`py-4 sm:py-40 px-[5%] sm:px-[20%] my-auto flex flex-col gap-11 items-center`}>
                <p className={`font-medium text-2xl	sm:text-4xl`}>
                    {t("heroSection.title")}
                </p>
                <p className={`font-medium text-xl sm:text-2xl`}>
                    {t("heroSection.subTitle")}
                </p>
                <a href={`${(token && user && user.firstName) ? `/app/events` : `/sign`}`} target={`_self`} className={`py-2 pl-3 pr-4 hover:bg-transparent md:hover:text-primary md:px-7 dark:text-white font-semibold text-white  border-2 border-primary bg-primary p-3 rounded-lg shadow-md shadow-black`}>
                    {(token && user && user.firstName) ? t("heroSection.actionButtonVisit") : t("heroSection.actionButtonSign")}
                </a>
            </div>
        </div>
    )
}