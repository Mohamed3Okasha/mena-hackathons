import './App.css';
import { DemoSection } from './components/DemoSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import {Navbar} from './components/Navbar';
import { PartnersSection } from './components/PartnersSection';
import { ProjectsSection } from './components/ProjectsSection';

export function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <DemoSection />
    <PartnersSection />
    <Footer />
    </>
  )
}
