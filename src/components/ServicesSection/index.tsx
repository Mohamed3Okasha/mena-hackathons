import { useTranslation } from "react-i18next";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const [t, i18n] = useTranslation("global");

  const services = [
    {
      id: 1,
      headline: "listCardTitle",
      cost: "listCardBtn",
      options: [
        { id: 1, text: "listCardFeature1" },
        { id: 2, text: "listCardFeature2" },
        { id: 3, text: "listCardFeature3" },
      ],
    },
    {
      id: 2,
      headline: "manageCardTitle",
      cost: "manageCardBtn",
      options: [
        { id: 1, text: "manageCardFeature1" },
        { id: 2, text: "manageCardFeature2" },
        { id: 3, text: "manageCardFeature3" },
        { id: 4, text: "manageCardFeature4" },
      ],
    },
    {
      id: 3,
      headline: "organiseCardTitle",
      cost: "organiseCardBtn",
      options: [
        { id: 1, text: "organiseCardFeature1" },
        { id: 2, text: "organiseCardFeature2" },
        { id: 3, text: "organiseCardFeature3" },
        { id: 4, text: "organiseCardFeature4" },
      ],
    },
  ];

  return (
    <section className="sm:px-[15%] py-12 px-auto flex flex-col gap-11">
      {/* <h2 className="text-center text-3xl text-white font-bold mb-8">Our Services</h2> */}
      {i18n.language === "ar" ? (
        <h1 className={`text-3xl font-semibold`}>
          <span className={`text-primary`}>الخدمات </span>
          المتاحة
        </h1>
      ) : (
        <h1 className={`text-3xl font-semibold`}><span className={`text-primary`}>Our </span>Services </h1>
      )}

      <div className="grid sm:grid-cols-3 gap-11 justify-center">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            headline={service.headline}
            options={service.options}
            cost={service.cost}
          />
        ))}
      </div>
      <div className={`mt-10 flex flex-col items-center`}>
        <h1 className="text- text-lg lg:text-2xl sm:font-semibold leading-none mb-3">
          {t("serviceSection.actionText")}
          <span className={`block mt-5 text-xl font-extralight sm:font-normal`}>
          {t("serviceSection.emailText")}
          : <a href={`mailto:partner@menahackathons.com`} target={`blank`} className={`text-primary`}>
              partner@menahackathons.com
            </a>
          </span>
        </h1>

      </div>
    </section >
  );
};
