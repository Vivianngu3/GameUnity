import React from 'react'
import styles from './Plot.module.css'

type Wetness = "dry" | "medium" | "wet"
type Progress = "start" | "dug" | "seeds-inserted" | "planted" | "watered" | "growth1" | "growth2" | "growth3" | "with-starburst" | "tomato"

interface Props {
  wetness?: Wetness
  fence?: boolean
  progress?: Progress
}

export default function Plot(props: Props) {
  return (
    <div className={styles.soil} >
      <svg viewBox="0 0 2 2" className={styles.hole}>
        <circle cx={1} cy={1} r={1}/>
      </svg>
    </div>
  )
}