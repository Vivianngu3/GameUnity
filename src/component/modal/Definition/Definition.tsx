import React from 'react';
import Modal from '../Modal'
import styles from './Definition.module.css'

interface Props {
  hide: () => void
  pronunciation: string
  word: string
  partOfSpeech: string
  definition: string
}

export default function Definition(props: React.PropsWithChildren<Props>) {
  return (
    <Modal>
      <div className={styles.container}>
        <div>
          {props.children}
          {/*PROUNCIATION*/}
          {/*WORD*/}
          {/*PART OF SPEECH*/}
          {/*DEFINITION*/}
        </div>
        <div className={styles.exit}>
          <button onClick={props.hide}>Got it!</button>
          {/*GOT IT BUTTON*/}
        </div>
      </div>
    </Modal>
  )
}
