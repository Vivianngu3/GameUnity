import React from 'react'
import styles from './Tool.module.css'

export type ToolName = 'scissors' | 'shovel' | 'water' | 'pesticide' | 'seeds' | 'fence' | 'worms' | 'fertilizer'

export interface Props {
  icon: string
  name: ToolName
  alt?: string
  onClick: () => void
  disabled?: boolean
}

export default function Tool(props: Props) {
  if (props.disabled) {
    return <div className={styles.disabled} />
  } else {
    return (
      <div
        className={styles.tool}
        onClick={() => {props.onClick()}}
      >
        <div>
          <img className={styles.toolIcon} src={props.icon} alt={props.alt} />
        </div>
        <div className={styles.toolLabel}>
          {props.name}
        </div>
      </div>
    )
  }
}
