import React from "react"
import Heading from "../text/Heading"
import logo from "../../res/images/seedling.svg"
import styles from "./Logo.module.css"

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt='logo' className={styles.icon} />
      <Heading
        type='title'
        color={'on-primary'}
        allCaps={true}
      >
        Sprout
      </Heading>
    </div>
  )
}