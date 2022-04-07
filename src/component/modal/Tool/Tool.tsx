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

export default function Tool(props: Props) {
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.exit}>
          {/*X BUTTON*/}
          <button onClick={props.hide} />
        </div>
        <div>
          {props.image}
          {props.pronunciation}
          {props.word}
          {props.partOfSpeech}
          {props.definition}
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