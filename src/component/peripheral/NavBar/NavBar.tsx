import React from "react"
import styles from "./NavBar.module.css"
import Logo from "../Logo"
import Link from '../../clickable/Link/Link'
import Button from '../../clickable/Button/Button'

interface LinkData {
  text: string
  destination: string
}

export default function NavBar() {
  const [disabledLinkIndex, setDisabledLinkIndex] = React.useState(0)

  const linksData: LinkData[] = [
    { text: 'Home', destination: '/' },
    { text: 'About', destination: '/about' },
    { text: 'Recap', destination: '/recap' }
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
        <Button shade='color-tertiary'>Play Now!</Button>
      </div>
    </div>
  )
}