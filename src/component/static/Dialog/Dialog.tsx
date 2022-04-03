import React from 'react'
import styles from './Dialog.module.css'
import Block from '../../text/Block'

interface Props {}

export default function Dialog(props: React.PropsWithChildren<Props>) {
  return(
    <div className={styles.dialog}>
      <div>
        <Block>
          {props.children}
        </Block>
      </div>
    </div>
  )
}
