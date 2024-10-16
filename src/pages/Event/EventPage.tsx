interface Speaker {
  name: string;
  position: string;
  photoUrl: string;
}

interface EventPageProps {
  posterUrl: string;
  headline: string;
  description: string;
  speakers?: Speaker[];
  googleFormUrl: string;
}

export function EventPage (Props: EventPageProps) {
  return (
    <div className="event-page-container">
      {/* Poster Section */}
      {/* <section className="poster-section">
        <img src={Props.posterUrl} alt="Event Poster" className="poster-image w-full h-auto" />
      </section> */}

      {/* Description Section */}
      <section className="description-section my-8 flex flex-col gap-5">
        <h2 className="text-3xl font-bold">Event Description</h2>
        <p className="text-lg text-gray-400 ">{Props.headline}</p>
        <p className="text-lg px-[10%]">{Props.description}</p>
      </section>

      {/* Speakers Section */}
      {/* <section className="speakers-section my-8">
        <h2 className="text-3xl font-bold mb-4">Speakers</h2>
        <div className="speakers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Props.speakers.map((speaker, index) => (
            <div key={index} className="speaker-card text-center">
              <img
                src={speaker.photoUrl}
                alt={`${speaker.name}'s Photo`}
                className="speaker-photo mx-auto w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="speaker-name text-xl font-bold">{speaker.name}</h3>
              <p className="speaker-position text-gray-600">{speaker.position}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Embedded Google Form Section */}
      <section className="google-form-section my-8">
        <h2 className="text-3xl font-bold mb-4">Register for the Event</h2>
        <iframe
          src={Props.googleFormUrl}
          width="100%"
          height="1000px"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Google Form"
        >
          Loading…
        </iframe>
      </section>
    </div>
  );
};