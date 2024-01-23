import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Layout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
