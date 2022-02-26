import React from 'react'

import styles from './Footer.module.css'

import twitter from '../../../res/images/icon-twitter.png'
import youtube from '../../../res/images/icon-youtube.png'

import Logo from '../Logo'
import Heading from '../../text/Heading'
import Link from '../../clickable/Link/Link'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Logo />
      <Heading type={'title'}>
        GameUnity
      </Heading>
      <div>
        <Link destination={'twitter'}>
          <img src={twitter} alt={'Twitter icon'} />
        </Link>
        <Link destination={'youtube'}>
          <img src={youtube} alt={'Youtube icon'} />
        </Link>
      </div>
    </div>
  )
}