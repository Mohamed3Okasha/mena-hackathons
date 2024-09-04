import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Sign } from './Sign';

export function App() {
const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home />
  },
  {
    path: `/sign`,
    element: <Sign />
  },
])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
