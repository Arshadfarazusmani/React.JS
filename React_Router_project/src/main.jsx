import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import './index.css'

import { RouterProvider } from 'react-router-dom';
import Layout from './layout/layout.jsx';
import Home from '../components/pages/home.component.jsx';
import About from '../components/pages/about.component.jsx';
import Contact from '../components/pages/contact.component.jsx';
import Usercomponent from '../components/pages/user.component.jsx';
import Github from '../components/github/github.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"about",
        element:<About/>
      },
      {path:"contact",
        element:<Contact/>

      },
      {
        path:"user/:userid",
        element:<Usercomponent/>
      },
      {
        path:"github",
        element:<Github/>

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider 
    router={router}
    />
  </StrictMode>,
)
