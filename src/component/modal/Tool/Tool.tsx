import React from 'react';
import Modal from '../Modal'
import styles from './Tool.module.css'
import utils from '../../../utils/utils.module.css'
import speaker from "../../../res/images/speaker-icon.svg";

interface Props {
  hide: () => void
  img?: string
  pronunciation?: string
  toolName: string
  partOfSpeech?: string
  definition?: string | JSX.Element
}

export default function Tool(props: Props) {
  const textToSpeech = new SpeechSynthesisUtterance()
  textToSpeech.text = props.toolName

  return (
    <Modal>
      <div className={styles.container}>

      <div className={styles.exitContainer}>
          <div className={styles.exit}>
            <button className={styles.exitButton} onClick={props.hide}>X</button>
          </div>
        </div>

        <div className={styles.svg}>
          <img draggable={false} src={props.img} alt={props.toolName} />
        </div>

        <div className={styles.pronunciation}>
          <img className={styles.speaker + ' ' + utils.clickable} src={speaker} alt={'speaker icon'} onClick={() => window.speechSynthesis.speak(textToSpeech)} />
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