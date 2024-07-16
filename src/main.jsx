import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from '../src/components/Home/Home.jsx'
import About from '../src/components/About/About.jsx'
import News from '../src/components/News/News.jsx'
import Classmates from '../src/components/Classmates/Classmates.jsx'
import Contact from '../src/components/Contact/Contact.jsx'
const router=createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/about',element:<About/>},
  {path:'/news',element:<News/>},
  {path:'/classmates',element:<Classmates/>},
  {path:'contact-us',element:<Contact/>}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
