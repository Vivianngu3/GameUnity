import React from 'react'
import NavBar from '../../component/peripheral/NavBar/NavBar'
import {Outlet} from 'react-router-dom'
import Footer from '../../component/peripheral/Footer/Footer'

export default function WithPeripherals() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}