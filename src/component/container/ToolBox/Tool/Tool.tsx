import React from 'react'
import styles from './Tool.module.css'

export interface Props {
  icon?: string
  name?: string
  alt?: string
  onClick: () => void
}

export default function Tool(props: Props) {
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
