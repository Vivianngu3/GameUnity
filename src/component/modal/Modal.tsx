import React, {useState} from 'react'
import styles from './Modal.module.css'

interface Props {
  className?: string
}

export default function Modal(props: React.PropsWithChildren<Props>) {
  return(
    <div className={styles.modalWrapper}> {/*default closed*/}
     <div className={styles.modalOverlay}>
       <div className={styles.modal + ' ' + props.className}>
         <div className={styles.modalBody}>
           {props.children}
         </div>
         </div>
       </div>
     </div>
  )
}