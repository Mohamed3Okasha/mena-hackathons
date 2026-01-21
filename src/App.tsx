import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
// import { SignPage } from './pages/Sign';
// import { Platform } from './pages/Platform';
// import { EventPage } from './pages/Event/EventPage';
// import { PlatformEvents } from './pages/Platform/platformEvents';
// import { UserProfile } from './pages/User/UserProfile';
// import { ProfileId } from './pages/User/ProfileId';
// import { ProfileDetails } from './pages/User/ProfileDetails';
import { useTranslation } from 'react-i18next';
import { GeneralEvent } from './pages/Home/Events/GeneralEvent';
import { Reports } from './pages/Reports';
import { AIEcoHackathonMisrEventPage } from './pages/Event/AIEcoHackathonMisr';

export function App() {
  const [, i18n] = useTranslation("global");

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Home />
    },
    {
      path: `/ecohackathon/think-sustainability`,
      element: <GeneralEvent />
    },
    {
      path: `/reports`,
      element: <Reports />
    },
    {
      path: `/ecohackathon/`,
      element: <AIEcoHackathonMisrEventPage />
    },
    // {
    //   path: `/sign`,
    //   element: <SignPage />
    // },
    // {
    //   path: `/app`,
    //   element: <Platform />,
    //   children: [
    //     {
    //       path: `events`,
    //       element: <PlatformEvents />
    //     },
    //     {
    //       path: `profile`,
    //       element: <UserProfile />,
    //       children: [
    //         { path: `profile-id`,
    //           element: <ProfileId />
    //         },
    //         { path: `profile-details`,
    //           element: <ProfileDetails />
    //         }
    //       ]
    //     },
    //     {
    //       path: `events/:eventId`,
    //       element: <EventPage />
    //     }
    //   ]
    // },
  ])

  return (
    <div style={{ overflowX: 'hidden' }} dir={i18n.language === `ar` ? `rtl` : `ltr`}>
      <RouterProvider router={router} />
    </div>
  )
}
