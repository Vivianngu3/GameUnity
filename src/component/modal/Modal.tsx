import React, {useState} from 'react'
import styles from './Modal.module.css'

type Type = 'definition' | 'tool'
type Show = 'hidden' | 'shown'

interface Props {
  type?: Type // default definition
  show?: Show // default hidden
}

export default function Modal(props: React.PropsWithChildren<Props>) {
  /* if() {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <button className={styles.button}>Got it!</button>
      </div>
    </div>
  )
}*/
  return (<></>)
}
