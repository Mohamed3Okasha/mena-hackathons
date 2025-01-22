import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import accLogo from "../../assets/acc-logo.jpg";
import idraLogo from "../../assets/IDRA-logo.png";
import unccdLogo from "../../assets/UNCCD-logo.png";
import erasmusLogo from "../../assets/erasmus-logo-horizontal.png";
import hackIntlLogo from "../../assets/hackIntl-logo.jpg";
import clitchyLogo from "../../assets/glitchy-logo.png";
import gscDubaiLogo from "../../assets/gsc-dubai.jpg";

interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
}

const partnerLogos: PartnerLogo[] = [
  { id: 1, name: "Partner 1", logo: hackIntlLogo },
  { id: 2, name: "Partner 2", logo: idraLogo },
  { id: 3, name: "Partner 3", logo: unccdLogo },
  { id: 4, name: "Partner 4", logo: erasmusLogo },
  { id: 5, name: "Partner 5", logo: accLogo },
  { id: 6, name: "Partner 6", logo: clitchyLogo },
  { id: 7, name: "Partner 7", logo: gscDubaiLogo },
];

export function PartnersSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft < maxScrollLeft) {
        container.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="flex flex-col gap-11 py-12">
        <h1 className={`text-3xl font-semibold`}>Trusted <span className={`text-primary`}>by</span> </h1>
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-transform"
            aria-label="Scroll Left"
          >
            <FaArrowLeft className="sm:w-6 sm:h-6 text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-transform"
            aria-label="Scroll Right"
          >
            <FaArrowRight className="sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* Logos */}
          <div
            ref={containerRef}
            className="flex justify-start overflow-x-auto no-scrollbar gap-6 px-6 py-4"
          >
            {partnerLogos.map((partnerLogo) => (
              <div
                key={partnerLogo.id}
                className="flex-shrink-0 w-[200px] h-[150px] bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-transform hover:scale-105"
              >
                <img
                  src={partnerLogo.logo}
                  alt={partnerLogo.name}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
