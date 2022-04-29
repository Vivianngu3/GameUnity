import React from 'react'
import styles from "./NavBar.module.css"
import Logo from "../Logo"
import Link from '../../clickable/Link/Link'
import NavButton from '../../clickable/NavButton/NavButton'
import {ABOUT_US, GAME, LANDING, RECAP} from '../../../res/constants/url-endpoints'

export type Color = 'page-background' | 'two' | 'one' | 'four'
export type Page = 'Home' | 'About' | 'Recap'

interface Props {
  color: Color
  page: Page
}

interface LinkData {
  text: Page
  destination: string
  navBarColor: Color
}

export default function NavBar(props: Props) {
  const linksData: LinkData[] = [
    { text: 'Home', destination: '/' + LANDING, navBarColor: 'page-background' },
    { text: 'About', destination: '/' + ABOUT_US, navBarColor: 'four' },
    { text: 'Recap', destination: '/' + RECAP, navBarColor: 'one' }
  ]

  let links = []
  for (let i = 0; i < linksData.length; i++) {
    let link = linksData[i]
    links.push(
      <Link
        key={i}
        disabled={link.text === props.page}
        destination={link.destination}
      >
        {link.text}
      </Link>
    )
  }

  const navBarClasses: string[] = []
  navBarClasses.push(styles.navBar)

  switch (props.color) {
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
          destination={'/' + GAME}
        >Play Now!</NavButton>
      </div>
    </div>
  )
}
