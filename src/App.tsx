import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Event } from './pages/Event';

export function App() {
const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home />
  },
  {
    path: `/sign`,
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
