import HackathonPage from '../Hackathon One Pager';
import { ecoHackathonData } from './ecohackathon-jan26-data';

export function AIEcoHackathonMisrEventPage() {
  return (
    // <div className="min-h-screen">
    // </div>
    <HackathonPage
      data={ecoHackathonData}
      visibility={{
        timeline: false,
        judging: false,
        prizes: true,
      }}
    />
  );
}

