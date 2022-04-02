import React from 'react'
import BigLogo from '../../component/static/BigLogo/BigLogo'
import {ABOUT_US, GAME_WELCOME, WITH_PERIPHERALS} from '../../res/constants/url-endpoints'
import Link from '../../component/clickable/Link/Link'
import styles from './GameStart.module.css'

export default function GameStart() {
  return (
    <div className={styles['full-page']}>
      <div className={styles.content}>
        <BigLogo className={styles.logo} />
        <Link
          destination={GAME_WELCOME}
          className={styles.link}
        >Start</Link>
        <Link
          destination={WITH_PERIPHERALS + "/" + ABOUT_US}
          className={styles.link}
        >Exit</Link>
      </div>
    </div>
  )
}