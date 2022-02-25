import React from 'react'
import NavBar from '../../component/peripheral/NavBar/NavBar'
import {Outlet} from 'react-router-dom'

export default function WithPeripherals() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}