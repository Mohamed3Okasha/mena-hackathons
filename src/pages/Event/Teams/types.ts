export interface TeamMember {
    id: string;
    name: string;
    role: 'Leader' | 'Member';
    position: string;
    photoUrl?: string;
}