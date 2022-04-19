import React from 'react'
import styles from './KitchenBackground.module.css'
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
      // counters = a view of the cutting board
      break
    case 'zoomed-out':
      // counters = a view of the whole kitchen
      break
    case 'pizza':
      // counters = a view of the pizza
      break
    case 'clear':
      // counters = a view of the countertop with nothing on it
      break
  }
  return (
    <div className={styles.wall}>
      <Clock time={props.time} />
      {counters}
    </div>
  )
}