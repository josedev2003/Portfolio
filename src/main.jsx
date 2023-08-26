import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./styles/main.css"


import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./components/MainContent.jsx";
import Contact from "./components/contact.jsx";
import Project from "./components/project.jsx";
import About from "./components/About.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about", 
      element: <About />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);