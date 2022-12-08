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
import { createRoot } from "react-dom/client";
import AboutMe from './components/AboutMe';
import Storyboard from './components/Storyboard';
import Projects from './components/Projects';
import Iterative from './components/Iterative';
import Redesign from './components/Redesign';
import AnimeList from './components/AnimeList';
import Fun from './components/Fun';

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
          {
            path: "Storyboard",
            element: <Storyboard/>
        },
        {
          path: "Iterative",
          element: <Iterative/>
      },
      {
        path: "Redesign",
        element: <Redesign/>
      },
      {
        path: "AnimeList",
        element: <AnimeList/>
      },
      {
        path: "Fun",
        element: <Fun/>
      },
      ],
  },
])

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
