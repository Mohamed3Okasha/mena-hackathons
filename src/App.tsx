import './App.css';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import {Navbar} from './components/Navbar';
import { PartnersSection } from './components/PartnersSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';

export function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <ServicesSection />
    <PartnersSection />
    <Footer />
    </>
  )
}
