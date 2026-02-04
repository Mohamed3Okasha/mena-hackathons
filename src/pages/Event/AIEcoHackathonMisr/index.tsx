import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Judging from './components/Judging';
import Prizes from './components/Prizes';
// import Timeline from './components/Timeline';
import CTAGrid from './components/CTAGrid';
import Footer from './components/Footer';

export function AIEcoHackathonMisrEventPage() {
  return (
    // <div className="min-h-screen">
    // </div>
    <div className="min-h-screen bg-[#001a2c]">
      <Navigation />
      <Hero />
      <About />
      <Tracks />
      <Judging />
      <Prizes />
      {/* <Timeline /> */}
      <CTAGrid />
      <Footer />
    </div>
  );
}
