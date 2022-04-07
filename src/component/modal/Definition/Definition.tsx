import React from 'react';
import Modal from '../Modal'
import styles from './Definition.module.css'

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
        <div>
          {props.pronunciation}
        </div>
        <div>
          {props.word}
        </div>
        <div>
          {props.partOfSpeech}
        </div>
        <div>
          {props.definition}
        </div>
      </div>
      <div>
        <div className={styles.exit}>
          <button onClick={props.hide}>Got it!</button>
        </div>
      </div>
    </Modal>
  )
}
