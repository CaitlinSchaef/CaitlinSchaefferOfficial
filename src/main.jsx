import React from 'react'
import ReactDOM from 'react-dom/client'
// the bootstrap import is apparently really important
import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

//Pages:
import LandingPage from './LandingPage.jsx';
import ErrorPage from './ErrorPage.jsx';
import Navbar from './NavBar';
import Contact from './Pages/Contact'
import { IconContext } from 'react-icons';
import About from './Pages/About.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Blog from './Pages/Blog.jsx'


function Layout() {
  return (
    <div className="d-flex flex-column justify-content-between vw-100 vh-100">
      <Navbar />
      <div id='page-content'>
        <Outlet />
      </div>
    </ div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
        errorElement: <ErrorPage />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/blog',
        element: <Blog />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
