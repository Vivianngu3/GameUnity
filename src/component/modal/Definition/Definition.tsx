import React from 'react';
import styles from './Definition.module.css'
import Modal from '../Modal'
import Caption from '../../text/Caption'

interface Props {
  hide: () => void
  pronunciation?: string
  word?: string
  partOfSpeech?: string
  definition?: string
}

export default function Definition(props: Props) {
  return (
    <Modal>
      <div className={styles.container}>

        <div className={styles.pronunciation}>
          {props.pronunciation}
        </div>

        <div className={styles.word}>
          {props.word}
        </div>

        <Caption>
          {props.partOfSpeech}
        </Caption>

        <div className={styles.definition}>
          {props.definition}
        </div>

        <div className={styles.exitContainer}>
          <div className={styles.exit}>
            <button className={styles.exitButton} onClick={props.hide}>GOT IT!</button>
          </div>
        </div>

      </div>
    </Modal>
  )
}
