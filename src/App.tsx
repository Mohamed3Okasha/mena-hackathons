import './App.css';
import { HeroSection } from './components/HeroSection';
import {Navbar} from './components/Navbar';
import { PartnersSection } from './components/PartnersSection';
import { ServicesSection } from './components/ServicesSection';

export function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <PartnersSection />
    </>
  )
}
