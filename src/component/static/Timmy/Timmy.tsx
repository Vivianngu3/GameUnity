import React from 'react'
import timmy1 from '../../../res/images/Timmy1.svg'
import timmy2 from '../../../res/images/Timmy2.svg'
import timmy3 from '../../../res/images/Timmy3.svg'
import timmy4 from '../../../res/images/Timmy4.svg'
import styles from './Timmy.module.css'
import DirectedDialog from '../DirectedDialog/DirectedDialog'
import {TimmyContext} from '../../../App'

export type WhichTimmy = 1 | 2 | 3 | 4

export default function Timmy(props: React.PropsWithChildren<{}>) {
  const timmyContext = React.useContext(TimmyContext)
  const timmys = [timmy1, timmy2, timmy3, timmy4]
  return(
    <div className={styles.wrapper}>
      <DirectedDialog
        closenessCoordinates={{ x:30, y:225 }}
        textSize={'small'}
        anchor={
        <div className={styles.timmy}>
          timmy = <img draggable={false} src={timmys[(timmyContext.whichTimmy || 1) - 1]} alt={'directions-giver timmy'} width={'360'} height={'400'}/>
        </div>
      }
      >{props.children}</DirectedDialog>
    </div>
  )
}
