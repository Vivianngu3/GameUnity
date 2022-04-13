import React from 'react';
import styles from './Tool.module.css'
import Label from "../../../text/Label";

export interface Props {
  icon?: string
  name?: string
  onClick: () => void
}

export default function Tool(props: Props) {

  return (
    <div
      className={styles.tool}
      onClick={props.onClick}
    >
      <div>
        <img className={styles.toolIcon} src={props.icon} />
      </div>
      <div className={styles.toolLabel}>
        {props.name}
      </div>
    </div>
  )
}
