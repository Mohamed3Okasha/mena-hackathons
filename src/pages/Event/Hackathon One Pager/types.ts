import type { LucideIcon } from 'lucide-react';
export interface Heading { title: string; highlight?: string; description: string }
export interface Action { label: string; href: string; newTab?: boolean }
export interface Feature { icon: LucideIcon; title: string; description: string }
export interface Track { icon: LucideIcon; number: string; title: string; subtitle: string; features: string[]; gradient: string }
export interface Prize { icon: LucideIcon; place: string; location: string; features: string[]; highlighted: boolean; gradient: string }
export interface TimelineEvent { icon: LucideIcon; date: string; title: string; description: string }
export interface JoinCard { icon: LucideIcon; title: string; description: string; buttonText: string; buttonId: string; gradient: string; href: string; newTab?: boolean }
export interface NavigationData { title: string; highlight?: string; links: { name: string; href: string }[]; action?: Action }
export interface HeroData { badge: string; title: string; highlight: string; subtitle: string; description: string; actions: Action[] }
export interface AboutData extends Heading { features: Feature[] }
export interface TracksData extends Heading { tracks: Track[] }
export interface JudgingData extends Heading { criteria: { name: string; percentage: number; color: string }[]; bonus?: { title: string; description: string }; note?: string }
export interface PrizesData extends Heading { prizes: Prize[]; highlightedLabel: string }
export interface TimelineData extends Heading { events: TimelineEvent[] }
export interface JoinData extends Heading { cards: JoinCard[] }
export interface FooterData { title: string; highlight?: string; tagline: string; copyright: string; venue?: { title: string; name: string; address: string }; features: { icon: LucideIcon; text: string }[]; socials: { icon: LucideIcon; href: string; label: string }[] }
export interface HackathonData { navigation?: NavigationData; header?: NavigationData; hero?: HeroData; about?: AboutData; tracks?: TracksData; judging?: JudgingData; prizes?: PrizesData; timeline?: TimelineData; join?: JoinData; footer?: FooterData }
export type SectionKey = keyof HackathonData;
export interface HackathonPageProps { data: HackathonData; visibility?: Partial<Record<SectionKey, boolean>>; className?: string }
