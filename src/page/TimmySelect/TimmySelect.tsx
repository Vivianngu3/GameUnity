import React from 'react'
import Dialog from '../../component/static/Dialog/Dialog'
import timmy1 from '../../res/images/Timmy1.svg'
import timmy2 from '../../res/images/Timmy2.svg'
import timmy3 from '../../res/images/Timmy3.svg'
import timmy4 from '../../res/images/Timmy4.svg'
import {GAME, GAME_WELCOME} from '../../res/constants/url-endpoints'
import {useNavigate} from 'react-router-dom'
import Label from '../../component/text/Label';
import styles from './TimmySelect.module.css'


export default function TimmySelect() {

  const navigate = useNavigate()

  return (
    <div>
      <Dialog>
        To begin, please select a character you would like to have help you on your journey.
      </Dialog>

      <div className={styles.timmysRowContainer}>

        <div>
          <img
            className={styles.timmy}
            onClick={() => {navigate('/' + GAME + GAME_WELCOME)}}
            src={timmy1} alt={'directions-giver timmy'}
            width={'360'}
            height={'400'}
          />
          <Label boldness={'bold'}>Timmy</Label>
        </div>

        <div>
          <img
            className={styles.timmy}
            onClick={() => {navigate('/' + GAME + GAME_WELCOME)}}
            src={timmy2} alt={'directions-giver timmy'}
            width={'360'}
            height={'400'}
          />
          <Label boldness={'bold'}>Timmy</Label>
        </div>

        <div>
          <img
            className={styles.timmy}
            onClick={() => {navigate('/' + GAME + GAME_WELCOME)}}
            src={timmy3} alt={'directions-giver timmy'}
            width={'360'}
            height={'400'}
          />
          <Label boldness={'bold'}>Timmy</Label>.
        </div>

        <div>
          <img
            className={styles.timmy}
            onClick={() => {navigate('/' + GAME + GAME_WELCOME)}}
            src={timmy4} alt={'directions-giver timmy'}
            width={'360'}
            height={'400'}
          />
          <Label boldness={'bold'}>Timmy</Label>
        </div>

      </div>
    </div>
  )
}