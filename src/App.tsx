import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { SignPage } from './pages/Sign';
import { Platform } from './pages/Platform';
import { EventPage } from './pages/Event/EventPage';

export function App() {
const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home />
  },
  {
    path: `/sign`,
    element: <SignPage />
  },
  {
    path: `/app`,
    element: <Platform />,
    children: [
      {
        path: `events/:eventId`,
        element: <EventPage />
      }
    ]
  },
])

  return (
    <div style={{ overflowX: 'hidden' }}>
      <RouterProvider router={router} />
    </div>
  )
}
