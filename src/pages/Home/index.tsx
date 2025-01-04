import { useEffect, useState } from "react";
import { DemoSection } from "../../components/DemoSection";
import { Footer } from "../../components/Footer";
import { HeroSection } from "../../components/HeroSection";
import { CircleLoader } from "../../components/Loading";
import { Navbar } from "../../components/Navbar";
import { PartnersSection } from "../../components/PartnersSection";
import { ProjectsSection } from "../../components/ProjectsSection";

import mhLogo from "../../assets/mh-logo-web.png"

export function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handlePerformance = () => {
          setLoading(false); // Update state only when the load event fires
        };
    
        if (document.readyState === "complete") {
          // If the page is already fully loaded, handle performance immediately
          handlePerformance();
        } else {
          // Otherwise, wait for the load event
          window.addEventListener("load", handlePerformance);
        }
    
        return () => {
          // Cleanup event listener on unmount
          window.removeEventListener("load", handlePerformance);
        };
    }, []);

    return (
        <>
            {loading ?
                < CircleLoader size={120} icon={mhLogo} />
                    :
                <>
                    <Navbar />
                    <HeroSection />
                    <ProjectsSection />
                    <DemoSection />
                    <PartnersSection />
                    <Footer />
                </>
            }
        </>
    )
}