import React from 'react';
import Modal from '../Modal'
import styles from './Tool.module.css'

interface Props {
  hide: () => void
  svg?: HTMLImageElement
  pronunciation?: string
  word?: string
  partOfSpeech?: string
  definition?: string
}

export default function Tool(props: Props) {
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.exit}>
          <button onClick={props.hide}>X</button>
        </div>
        <div>
          <div>
            {props.svg}
          </div>
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
      </div>
    </Modal>
  )
}