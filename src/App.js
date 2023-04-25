

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import About from './routes/about';
import Contact from './routes/contact';
import Home from './routes/home';
import './App.css'

function App() {
// Layout component is the HOC
// we can pass Home as parameters
// passing About component to Layout hoc as a parameter 
const HomeComponent = Layout(Home)
const AboutComponent = Layout(About);
const ContactComponent = Layout(Contact)

const router = createBrowserRouter(
  [
    { path: '/', element: <HomeComponent /> },
    { path: '/about', element: <AboutComponent /> },
    { path: '/contact', element: <ContactComponent /> },
  ],
);
  return (
    <RouterProvider router={router} />
  );
}

export default App;

