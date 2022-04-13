import React from 'react'
import styles from './GameBackground.module.css'
import Tree from '../../../res/images/tree.svg'
import Bee from '../../../res/images/Bee.svg'
import Rabbit from '../../../res/images/Rabbit.svg'

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

  let beeStyles = [styles.bee]
  let rabbitStyles = [styles.rabbit]

  switch (props.animalsPosition) {
    case 1:
      beeStyles.push(styles.positionOne)
      break
    case 2:
      beeStyles.push(styles.positionTwo)
      break
    default:
      beeStyles.push(styles.hidden)
      rabbitStyles.push(styles.hidden)
  }

  return (
    <div className={skyStyles.join(' ')}>
      <svg viewBox="0 0 2 2" className={sunStyles.join(' ')}>
        <circle cx={1} cy={1} r={1}/>
      </svg>
      <div className={styles.grass} />
      <img src={Tree} alt={'Tree'} className={styles.tree} />
      <img src={Bee} alt={'Bee'} className={beeStyles.join(' ')} />
      <img src={Rabbit} alt={'Rabbit'} className={rabbitStyles.join(' ')} />
    </div>
  )
}