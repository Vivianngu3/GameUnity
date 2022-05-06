import React from 'react'
import styles from './KitchenBackground.module.css'
import window from '../../../res/images/window.svg'
import cuttingBoardTomato from '../../../res/images/cutting-board-with-tomato.svg'
import cuttingBoardKnife from '../../../res/images/cutting-board-with-knife.svg'
import oven from '../../../res/images/oven.png'
import pizza from '../../../res/images/pizza.png'
import Clock, { Time } from '../Clock/Clock'

export type View = 'cutting-board' | 'zoomed-out' | 'pizza' | 'clear'

interface Props {
  view: View // The current view we have of the kitchen
  time: Time // The time on the analog clock hanging in the kitchen
}

export default function KitchenBackground(props: Props) {
  let counters: JSX.Element = <></>
  switch (props.view) {
    case 'cutting-board':
      counters =
        <div className={styles.wall}>
          <div className={styles.table} />
          <img draggable={false} className={styles.cuttingBoardTomato} src={cuttingBoardTomato} alt={'knife and tomato on top of cutting board'}/>
          <img draggable={false} className={styles.window} src={window} alt={'window'} />
          <Clock time={props.time} />
        </div>
      break
    case 'zoomed-out':
      counters =
        <div className={styles.wall}>
          <div className={styles.table} />
          <div className={styles.angleShadow}/>
          <div className={styles.smallDrawer1} />
          <div className={styles.smallDrawer2} />
          <div className={styles.smallDrawer3} />
          <div className={styles.bigDrawer1} />
          <div className={styles.bigDrawer2} />
          <div className={styles.bigDrawer3} />
          <img draggable={false} className={styles.cuttingBoardKnife} src={cuttingBoardKnife} alt={'knife on top of cutting board'}/>
          <img draggable={false} className={styles.oven} src={oven} alt={'oven'} />
          <img draggable={false} className={styles.window} src={window} alt={'window'} />
          <Clock time={props.time} />
        </div>
      break
    case 'pizza':
      counters =
        <div className={styles.wall}>
          <div className={styles.table} />
          <img draggable={false} className={styles.pizza} src={pizza} alt={'pizza'}/>
          <img draggable={false} className={styles.window} src={window} alt={'window'} />
          <Clock time={props.time} />
        </div>
      break
    case 'clear':
      counters =
        <div className={styles.wall}>
          <div className={styles.table} />
          <img draggable={false} className={styles.window} src={window} alt={'window'} />
          <Clock time={props.time} />
        </div>
      break
  }
  return (
    <>
      {counters}
    </>
  )
}