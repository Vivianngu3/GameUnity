import React from 'react'
import styles from './GameBackground.module.css'

export type Time = 'noon' | 'afternoon' | 'evening' | 'twilight'
type AnimalsPosition = 1 | 2 | 3

interface Props {
  time?: Time
  animalsPosition?: AnimalsPosition
}

export default function GameBackground(props: Props) {
  let sunStyles = [styles.sun]
  let skyStyles = [styles.sky]
  switch (props.time) {
    case 'noon':
      sunStyles.push(styles.noon)
      skyStyles.push(styles.noon)
      break
    case 'afternoon':
      sunStyles.push(styles.afternoon)
      skyStyles.push(styles.afternoon)
      break
    case 'evening':
      sunStyles.push(styles.evening)
      skyStyles.push(styles.evening)
      break
    case 'twilight':
      sunStyles.push(styles.twilight)
      skyStyles.push(styles.twilight)
      break
    default:
      sunStyles.push(styles.noon)
      skyStyles.push(styles.noon)
  }
  return (
    <div className={skyStyles.join(' ')}>
      <svg viewBox="0 0 2 2" className={sunStyles.join(' ')}>
        <circle cx={1} cy={1} r={1}/>
      </svg>
      <div className={styles.grass} />
    </div>
  )
}