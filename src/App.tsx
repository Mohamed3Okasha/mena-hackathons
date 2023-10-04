import './App.css';
import { HeroSection } from './components/HeroSection';
import {Navbar} from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';

export function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    </>
  )
}
