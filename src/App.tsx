import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { SignPage } from './pages/Sign';
import { Platform } from './pages/Platform';
import { Event } from './pages/Event';

export function App() {
const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home />
  },
  {
    path: `/sign`,
    element: <SignPage isSignUp = {false} />
  },
  {
    path: `/app`,
    element: <Platform />
  },
  {
    path: `/untapped`,
    element: <Event />
  },
])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
