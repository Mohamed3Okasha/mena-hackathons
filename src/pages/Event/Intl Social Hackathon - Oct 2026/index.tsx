import HackathonPage from '../Hackathon One Pager';
import { intSocialHackathonData } from './int-social-hackathon-oct26-data';

export function IntlSocialHackathonEventPage() {
  return (
    // <div className="min-h-screen">
    // </div>
    <HackathonPage
      data={intSocialHackathonData}
      visibility={{
        timeline: false,
        judging: false,
        prizes: false,
        tracks:false
      }}
    />
  );
}

