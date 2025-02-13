import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,Routes,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Header from './components/Header.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='skills' element={<Skills/>} />
      <Route path='resume' element={<Resume/>} />
      <Route path='contact' element={<Contact/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
  </StrictMode>,
)
