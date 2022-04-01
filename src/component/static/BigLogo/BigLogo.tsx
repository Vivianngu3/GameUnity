import React from 'react'
import logo from '../../../res/images/seedling.svg'
import styles from './BigLogo.module.css'

interface Props {
  className?: string
}

export default function BigLogo(props: Props) {
  return (
    <div className={props.className}>
      <div className={styles.container}>
        <svg
          viewBox="0 0 2 2"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={styles.circle}
        >
          <circle cx="1" cy="1" r="1"/>
        </svg>
        <img src={logo} alt='logo' className={styles.icon} />
      </div>
    </div>
  )
}