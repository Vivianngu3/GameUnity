import React from 'react'

import styles from './Footer.module.css'

import ischool from '../../../res/images/icon-ischool.png'
import youtube from '../../../res/images/icon-youtube.png'

import Logo from '../Logo'
import Heading from '../../text/Heading'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Logo />
      <Heading
        type='title'
        color={'on-primary'}
      >
        GameUnity
      </Heading>
      <div className={styles.icons}>
        <a href={'https://ischool.uw.edu'}>
          <img className={styles.ischoolIcon} src={ischool} alt={'i school icon'} />
        </a>
        <a href={'https://www.youtube.com'}>
          <img className={styles.youtubeIcon} src={youtube} alt={'Youtube icon'} />
        </a>
      </div>
    </div>
  )
}