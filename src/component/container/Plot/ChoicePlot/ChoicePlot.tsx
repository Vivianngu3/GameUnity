import React from 'react'
import styles from './ChoicePlot.module.css'

type Wetness = "dry" | "medium" | "wet"

interface Props {
  wetness?: Wetness
}

export default function ChoicePlot(props: Props) {
  let innerClasses: string[] = [styles.inner]
  let outerClasses: string[] = [styles.outer]
  switch (props.wetness) {
    case 'dry':
      innerClasses.push(styles.dry)
      break
    case 'medium':
      innerClasses.push(styles.medium)
      break
    case 'wet':
      innerClasses.push(styles.wet)
      outerClasses.push(styles.wet)
      break
    default:
      innerClasses.push(styles.medium)
  }

  return (
      <div className={outerClasses.join(' ')}>
        <div className={innerClasses.join(' ')} />
      </div>
  )
}
