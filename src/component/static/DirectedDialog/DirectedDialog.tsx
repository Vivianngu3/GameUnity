import React from 'react'
import styles from './DirectedDialog.module.css'
import Block from '../../text/Block'

type Side = 'left' | 'right'

interface Props {
  pointTo: JSX.Element
  side?: Side
}

export default function DirectedDialog(props: React.PropsWithChildren<Props>) {
  let sideClass: string;
  switch (props.side) {
    case 'left':
      sideClass = styles.left
      break
    default:
      sideClass = styles.right
  }
  return (
    <>
      <div className={styles.container}>
        {props.pointTo}
        <div className={styles.dialog + ' ' + sideClass}>
          <Block>
            {props.children}
          </Block>
        </div>
        <svg width="97" height="65" viewBox="0 0 97 65" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow + ' ' + sideClass}>
          <path d="M90.9835 62.0142L47.7674 6.60461L44.9758 4.40999L3.47613 20.9103L3.97614 21.4103L3.7674 22.6046L90.9835 62.0142Z" fill="#FFF3E8"/>
          <path d="M47.9761 4.91016L92.2683 63.6045L2.97607 22.4102" stroke="#937356" strokeWidth="3"/>
        </svg>
      </div>
    </>
  )
}