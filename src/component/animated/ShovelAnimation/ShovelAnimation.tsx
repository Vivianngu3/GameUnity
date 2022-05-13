import React from 'react'
import shovel from '../../../res/images/animated-shovel.svg'
import styles from './ShovelAnimation.module.css'

export default function ShovelAnimation() {
  return (
    <>
      <img className={styles.animateShovel} src={shovel} alt={'Shovel'} />
      <div className={styles.plotContents}>
        <svg viewBox="0 0 2 2" className={styles.hole}>
          <circle cx={1} cy={1} r={1}/>
        </svg>
      </div>
    </>
  )
}