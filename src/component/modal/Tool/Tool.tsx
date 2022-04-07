import React from 'react';
import Modal from '../Modal'
import styles from './Tool.module.css'

interface Props {
  hide: () => void
  image: HTMLImageElement
  pronunciation: string
  word: string
  partOfSpeech: string
  definition: string
}

export default function Tool(props: React.PropsWithChildren<Props>) {
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.exit}>
          {/*X BUTTON*/}
          <button onClick={props.hide} />
        </div>
        <div>
          {props.children}
          {/*SVG*/}
          {/*PROUNCIATION*/}
          {/*WORD*/}
          {/*PART OF SPEECH*/}
          {/*DEFINITION*/}
        </div>
      </div>
    </Modal>
  )
}