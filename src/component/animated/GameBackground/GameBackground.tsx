import React from 'react'
import styles from './GameBackground.module.css'
import Tree from '../../../res/images/tree.svg'
import Bee from '../../../res/images/Bee.svg'
import Rabbit from '../../../res/images/Rabbit.svg'

export type Time = 'noon' | 'afternoon' | 'evening' | 'twilight'
type BeePosition = 1 | 2
type RabbitPosition = 1 | 2

interface Props {
  time?: Time
  beePosition?: BeePosition
  rabbitPosition?: RabbitPosition
}

export default function GameBackground(props: Props) {
  let sunStyles = [styles.sun]
  let skyStyles = [styles.sky]
  let coronaStyles = [styles.corona]
  switch (props.time) {
    case 'noon':
      coronaStyles.push(styles.noon)
      sunStyles.push(styles.noon)
      skyStyles.push(styles.noon)
      break
    case 'afternoon':
      coronaStyles.push(styles.afternoon)
      sunStyles.push(styles.afternoon)
      skyStyles.push(styles.afternoon)
      break
    case 'evening':
      coronaStyles.push(styles.evening)
      sunStyles.push(styles.evening)
      skyStyles.push(styles.evening)
      break
    case 'twilight':
      coronaStyles.push(styles.twilight)
      sunStyles.push(styles.twilight)
      skyStyles.push(styles.twilight)
      break
    default:
      coronaStyles.push(styles.noon)
      sunStyles.push(styles.noon)
      skyStyles.push(styles.noon)
  }

  let beeStyles = [styles.bee]
  let rabbitStyles = [styles.rabbit]

  switch (props.beePosition) {
    case 1:
      beeStyles.push(styles.beePositionOne)
      break
    case 2:
      beeStyles.push(styles.beePositionTwo)
      break
    default:
      beeStyles.push(styles.hidden)
  }

  switch (props.rabbitPosition) {
    case 1:
      rabbitStyles.push(styles.rabbitPositionOne)
      break
    case 2:
      rabbitStyles.push(styles.rabbitPositionTwo)
      break
    default:
      rabbitStyles.push(styles.hidden)
  }

  return (
    <div className={skyStyles.join(' ')}>
      <div className={coronaStyles.join(' ')}/>
      <svg viewBox="0 0 2 2" className={sunStyles.join(' ')}>
        <circle cx={1} cy={1} r={1}/>
      </svg>
      <div className={styles.grass} />
      <img draggable={false} src={Tree} alt={'Tree'} className={styles.tree} />
      <img draggable={false} src={Bee} alt={'Bee'} className={beeStyles.join(' ')} />
      <img draggable={false} src={Rabbit} alt={'Rabbit'} className={rabbitStyles.join(' ')} />
    </div>
  )
}