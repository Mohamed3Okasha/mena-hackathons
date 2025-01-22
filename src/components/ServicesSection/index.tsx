import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const services = [
    {
      id: 1,
      headline: "List The Hackathon",
      cost: "Free Listing",
      options: [
        { id: 1, text: "Access to our Community" },
        { id: 2, text: "Wider reach with Ecosystem" },
        { id: 3, text: "Newsletter Feature" },
      ],
    },
    {
      id: 2,
      headline: "Manage The Hackathon",
      cost: "Paid Subscription",
      options: [
        { id: 1, text: "Full Digital Solution" },
        { id: 2, text: "End-to-End Management" },
        { id: 3, text: "Real-Time Analytics" },
        { id: 4, text: "Customizable Platform" },
      ],
    },
    {
      id: 3,
      headline: "Organise The Hackathon",
      cost: "Paid Package",
      options: [
        { id: 1, text: "Tailored Support from A to Z" },
        { id: 2, text: "Comprehensive Marketing and PR" },
        { id: 3, text: "On-Site Support" },
        { id: 4, text: "Detailed Post-Event Report" },
      ],
    },
  ];

  return (
    <section className="sm:px-[15%] py-12 px-auto flex flex-col gap-11">
      {/* <h2 className="text-center text-3xl text-white font-bold mb-8">Our Services</h2> */}
      <h1 className={`text-3xl font-semibold`}><span className={`text-primary`}>Our </span>Services </h1>

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
          Interested in one of our services?
          <span className={`block mt-5 text-xl font-extralight sm:font-normal`}>
            Write to us at: <a href={`mailto:partner@menahackathons.com`} target={`blank`} className={`text-primary`}>
              partner@menahackathons.com
            </a>
          </span>
        </h1>

      </div>
    </section >
  );
};
