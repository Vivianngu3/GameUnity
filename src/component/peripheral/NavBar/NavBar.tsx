import React from 'react'
import styles from "./NavBar.module.css"
import Logo from "../Logo"
import Link from '../../clickable/Link/Link'
import NavButton from '../../clickable/NavButton/NavButton'
import {ABOUT_US, RECAP, WITH_PERIPHERALS} from '../../../res/constants/url-endpoints'

interface LinkData {
  text: string
  destination: string
}

export default function NavBar() {
  const [disabledLinkIndex, setDisabledLinkIndex] = React.useState(0)

  const linksData: LinkData[] = [
    { text: 'Home', destination: WITH_PERIPHERALS },
    { text: 'About', destination: ABOUT_US },
    { text: 'Recap', destination: RECAP }
  ]
  let links = []
  for (let i = 0; i < linksData.length; i++) {
    links.push(
      <Link
        key={i}
        disabled={i === disabledLinkIndex}
        destination={linksData[i].destination}
        onClick={() => {setDisabledLinkIndex(i)}}
      >
        {linksData[i].text}
      </Link>
    )
  }

  return (
    <div className={styles.navBar}>
      <Logo />
      <div className={styles.nav}>
        {links}
        <NavButton
          className={styles['nav-button']}
          shade='color-tertiary'
          destination={'game'}
        >Play Now!</NavButton>
      </div>
    </div>
  )
}
