import React from 'react'
import timmy1 from '../../../res/images/Timmy1.svg'
import timmy2 from '../../../res/images/Timmy2.svg'
import timmy3 from '../../../res/images/Timmy3.svg'
import timmy4 from '../../../res/images/Timmy4.svg'
import styles from './Timmy.module.css'
import DirectedDialog from '../DirectedDialog/DirectedDialog'
import {WHICH_TIMMY} from '../../../res/constants/storage-keys'

export type WhichTimmy = 1 | 2 | 3 | 4

interface Props {
  modalVariation?: boolean
}

export default function Timmy(props: React.PropsWithChildren<Props>) {

  const containerStyles = []

  if (props.modalVariation) {
    containerStyles.push(styles.wrapperPriority)
  } else {
    containerStyles.push(styles.wrapper)
  }

  const timmys = [timmy1, timmy2, timmy3, timmy4]
  let whichTimmy = parseInt( window.sessionStorage.getItem(WHICH_TIMMY) || '1' ) - 1
  return(
    <div className={containerStyles.join(' ')}>
      <DirectedDialog
        closenessCoordinates={{ x:30, y:225 }}
        textSize={'small'}
        anchor={
        <div className={styles.timmy}>
          <img draggable={false} src={timmys[whichTimmy]} alt={'directions-giver timmy'} width={'360'} height={'400'}/>
        </div>
      }
      >{props.children}</DirectedDialog>
    </div>
  )
}
