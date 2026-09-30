import Navigation from './components/Navigation';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Judging from './components/Judging';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import CTAGrid from './components/CTAGrid';
import Footer from './components/Footer';
import type { HackathonPageProps, NavigationData, SectionKey } from './types';
export type * from './types';

export function HackathonPage({ data, visibility = {}, className = '' }: HackathonPageProps) {
  const shown = (key: SectionKey) => Boolean(data[key]) && visibility[key] !== false;
  const targets = new Set<string>();
  for (const key of ['hero', 'about', 'tracks', 'judging', 'prizes', 'timeline', 'join', 'footer'] as const) {
    if (shown(key)) targets.add(key);
  }
  if (shown('join')) data.join?.cards.forEach(card => targets.add(card.buttonId));
  const validHref = (href: string) => !href.startsWith('#') || href === '#' || targets.has(href.slice(1));
  const navigationProps = (value: NavigationData): NavigationData => ({
    ...value, links: value.links.filter(link => validHref(link.href)),
    action: value.action && validHref(value.action.href) ? value.action : undefined,
  });
  return <div className={`min-h-screen bg-[#001a2c] ${className}`}>
    {shown('navigation') && data.navigation ? <Navigation {...navigationProps(data.navigation)} />
      : shown('header') && data.header ? <Header {...navigationProps(data.header)} /> : null}
    <main>
      {shown('hero') && data.hero && <Hero {...data.hero} actions={data.hero.actions.filter(action => validHref(action.href))} />}
      {shown('about') && data.about && <About {...data.about} />}
      {shown('tracks') && data.tracks && <Tracks {...data.tracks} />}
      {shown('judging') && data.judging && <Judging {...data.judging} />}
      {shown('prizes') && data.prizes && <Prizes {...data.prizes} />}
      {shown('timeline') && data.timeline && <Timeline {...data.timeline} />}
      {shown('join') && data.join && <CTAGrid {...data.join} />}
    </main>
    {shown('footer') && data.footer && <Footer {...data.footer} />}
  </div>;
}
export default HackathonPage;
