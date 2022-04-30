import React from 'react';
import Modal from '../Modal'
import styles from './Tool.module.css'

interface Props {
  hide: () => void
  img?: string
  pronunciation?: string
  toolName?: string
  partOfSpeech?: string
  definition?: string
}

export default function Tool(props: Props) {
  return (
    <Modal>
      <div className={styles.container}>

      <div className={styles.exitContainer}>
          <div className={styles.exit}>
            <button className={styles.exitButton} onClick={props.hide}>X</button>
          </div>
        </div>

        <div className={styles.svg}>
          <img src={props.img} alt={''} />
        </div>

        <div className={styles.pronunciation}>
          {props.pronunciation}
        </div>

        <div className={styles.word}>
          {props.toolName}
        </div>

        <div className={styles.partOfSpeech}>
          {props.partOfSpeech}
        </div>

        <div className={styles.definition}>
          {props.definition}
        </div>

      </div>
    </Modal>
  )
}