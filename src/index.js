import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, HashRouter as Router} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { createHashRouter } from 'react-router-dom';
import { RouterPr } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
// import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Storyboard from './components/Storyboard';
import Projects from './components/Projects';

const router = createHashRouter([
  {
      path: "/",
      element: <Navbar />,
      children: [
          { index: true, element: <App />},
          {
              path: "AboutMe",
              element: <AboutMe/>
          },
          {
              path: "Projects",
              element: <Projects/>
          },
      ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

