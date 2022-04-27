import React from 'react'

import styles from './Footer.module.css'

import ischool from '../../../res/images/icon-ischool.svg'

import Logo from '../Logo'
import Icon from '../../clickable/Icon/Icon'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <Logo includesTeamName={true}/>
      </div>

      <div className={styles.icon}>
        <Icon src={ischool} alt={'Information School Logo'} destination={'https://ischool.uw.edu/'} />
      </div>
    </div>
  )
}