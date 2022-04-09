import React from 'react';
import styles from './Tool.module.css'
import Label from "../../../text/Label";

interface Props {
  img?: string
  tool?: string
}

export default function Tool(props: Props) {

  return (
    <div className={styles.tool}>
      <div>
        <img className={styles.toolIcon} src={props.img} />
      </div>
      <div className={styles.toolLabel}>
        {props.tool}
      </div>
    </div>
  )
}
