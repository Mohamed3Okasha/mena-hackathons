import './App.css';
import { HeroSection } from './components/HeroSection';
import {Navbar} from './components/Navbar';

export function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
      <h1 className={`text-lg pt-12`}>Hola from MH Team</h1>
    </>
  )
}
