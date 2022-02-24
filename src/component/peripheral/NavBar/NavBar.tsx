import React from "react"
import styles from "./NavBar.module.css"
import Logo from "../Logo"
import Link from '../../clickable/Link/Link'
import Button from '../../clickable/Button/Button'

export default function NavBar() {
  const [disabledButtonIndex, setdisabledButtonIndex] = React.useState(0)

  const unfilledButtonsText = ['Home', 'About', 'Recap']
  let unfilledButtons = []
  for (let i = 0; i < unfilledButtonsText.length; i++) {
    unfilledButtons.push(
      <Link disabled={i === disabledButtonIndex}>
        {unfilledButtonsText[i]}
      </Link>
    )
  }
  return (
    <div className={styles.navBar}>
      <Logo />
      <Button shade='light' allCaps>Play Now!</Button>
    </div>
  )
}