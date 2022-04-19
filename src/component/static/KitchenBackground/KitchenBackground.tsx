import React from 'react'
import styles from './KitchenBackground.module.css'
import { Time } from '../Clock/Clock'

export type View = 'cutting-board' | 'zoomed-out' | 'pizza' | 'clear'

interface Props {
  view: View // The current view we have of the kitchen
  time: Time // The time on the analog clock hanging in the kitchen
}

export default function KitchenBackground(props: Props) {
  let counters: JSX.Element
  switch (props.view) {

  }
  return (
    <div className={styles.wall}>
      {/*<Clock time={props.time} />*/}
    </div>
  )
}