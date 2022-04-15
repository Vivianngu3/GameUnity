import React from 'react'
import styles from "./NavBar.module.css"
import Logo from "../Logo"
import Link from '../../clickable/Link/Link'
import NavButton from '../../clickable/NavButton/NavButton'
import {ABOUT_US, RECAP, WITH_PERIPHERALS} from '../../../res/constants/url-endpoints'

type Color = 'page-background' | 'two' | 'one' | 'four'

interface LinkData {
  text: string
  destination: string
  navBarColor: Color
}

export default function NavBar() {
  const DEFAULT_PAGE_INDEX = 0

  const linksData: LinkData[] = [
    { text: 'Home', destination: WITH_PERIPHERALS, navBarColor: 'page-background' },
    { text: 'About', destination: ABOUT_US, navBarColor: 'four' },
    { text: 'Recap', destination: RECAP, navBarColor: 'one' }
  ]

  const [disabledLinkIndex, setDisabledLinkIndex] = React.useState(DEFAULT_PAGE_INDEX)
  const [navBarColor, setNavBarColor] = React.useState(linksData[DEFAULT_PAGE_INDEX].navBarColor)

  let links = []
  for (let i = 0; i < linksData.length; i++) {
    let link = linksData[i]
    links.push(
      <Link
        key={i}
        disabled={i === disabledLinkIndex}
        destination={link.destination}
        onClick={() => {
          setDisabledLinkIndex(i)
          setNavBarColor(link.navBarColor)
        }}
      >
        {link.text}
      </Link>
    )
  }

  const navBarClasses: string[] = []
  navBarClasses.push(styles.navBar)

  switch (navBarColor) {
    case "page-background":
      navBarClasses.push(styles['color-page-background'])
      break
    case "one":
      navBarClasses.push(styles.colorOne)
      break
    case "two":
      navBarClasses.push(styles.colorTwo)
      break
    case "four":
      navBarClasses.push(styles.colorFour)
      break
  }

  return (
    <div className={navBarClasses.join(' ')}>
      <Logo />
      <div className={styles.nav}>
        {links}
        <NavButton
          className={styles['nav-button']}
          destination={'game'}
        >Play Now!</NavButton>
      </div>
    </div>
  )
}
