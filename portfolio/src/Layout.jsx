import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'

function Layout() {
  return (
    <>
        <Header/>
        {/* <Outlet/> */}
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout