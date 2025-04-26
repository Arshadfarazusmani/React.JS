import React from 'react'
import Header from '../../components/header/header.component.jsx'
import Footer from '../../components/footer/footer.components.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header/>

        <Outlet/>
      
       <Footer/>
        </>
    )
}

export default Layout
