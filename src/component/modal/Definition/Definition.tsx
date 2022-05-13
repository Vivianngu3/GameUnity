import React from 'react';
import styles from './Definition.module.css'
import Modal from '../Modal'
import Caption from '../../text/Caption'
import speaker from '../../../res/images/speaker-icon.svg'
import utils from '../../../utils/utils.module.css'

interface Props {
  hide: () => void
  pronunciation?: string
  word: string
  partOfSpeech?: string
  definition?: string
}

export default function Definition(props: Props) {
  const textToSpeech = new SpeechSynthesisUtterance()
  textToSpeech.text = props.word

  return (
    <Modal>
      <div className={styles.container}>

        <div className={styles.pronunciation}>
          <img className={styles.speaker + ' ' + utils.clickable} src={speaker} alt={'speaker icon'} onClick={() => window.speechSynthesis.speak(textToSpeech)} />
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
            <button className={styles.exitButton + ' ' + utils.clickable} onClick={props.hide}>GOT IT!</button>
          </div>
        </div>

      </div>
    </Modal>
  )
}
