import React from 'react'
import styles from './Plot.module.css'
import seeds from '../../../res/images/seeds-in-hole.svg'

type Wetness = "dry" | "medium" | "wet"
export type Progress = "start" | "dug" | "seeds-sown" | "planted" | "watered" | "growth1" | "growth2" | "growth3" | "with-starburst" | "tomato"

interface Props {
  wetness?: Wetness
  fence?: boolean
  progress?: Progress
}

export default function Plot(props: Props) {
  let contained: JSX.Element
  switch (props.progress) {
    case 'dug':
      contained =
        <div className={styles.holeContainer}>
          <svg viewBox="0 0 2 2" className={styles.hole}>
            <circle cx={1} cy={1} r={1}/>
          </svg>
        </div>
      break
    case 'seeds-sown':
      contained =
        <div className={styles.holeContainer}>
          <svg viewBox="0 0 2 2" className={styles.hole}>
            <circle cx={1} cy={1} r={1}/>
          </svg>
          <img src={seeds} alt={'Seeds in a hole'} className={styles.seeds} />
        </div>
      break
    // case 'planted':
    //   contained =
    //
    default:
      contained = <></>
  }
  return (
    <div className={styles.soil} >
      {
        contained
      }
    </div>
  )
}