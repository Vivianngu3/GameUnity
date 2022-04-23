import React from 'react'
import Dialog from '../../component/static/Dialog/Dialog'
import timmy1 from '../../res/images/Timmy1.svg'
import timmy2 from '../../res/images/Timmy2.svg'
import timmy3 from '../../res/images/Timmy3.svg'
import timmy4 from '../../res/images/Timmy4.svg'
import {GAME, GAME_WELCOME} from '../../res/constants/url-endpoints'
import {useNavigate} from 'react-router-dom'
import styles from './TimmySelect.module.css'
import TimmyChoice from '../../component/static/Timmy/TimmyChoice/TimmyChoice'
import {WhichTimmy} from '../../component/static/Timmy/Timmy'

export default function TimmySelect() {

  const navigate = useNavigate()

  let timmyOnClick = (whichTimmy: WhichTimmy) => {
    console.log(`Timmy selected: ${whichTimmy}`)
    navigate('/' + GAME + GAME_WELCOME)
  }

  return (
    <div>
      <Dialog>
        To begin, please select a character you would like to have help you on your journey.
      </Dialog>

      <div className={styles.timmysRowContainer}>

        <TimmyChoice src={timmy1} onClick={() => {timmyOnClick('1')}}/>
        <TimmyChoice src={timmy2} onClick={() => {timmyOnClick('2')}}/>
        <TimmyChoice src={timmy3} onClick={() => {timmyOnClick('3')}}/>
        <TimmyChoice src={timmy4} onClick={() => {timmyOnClick('4')}}/>

      </div>
    </div>
  )
}