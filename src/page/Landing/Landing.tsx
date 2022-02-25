import React from "react"
import styles from './landing.module.css'
import NavBar from "../../component/peripheral/NavBar/NavBar"
import {Outlet} from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}