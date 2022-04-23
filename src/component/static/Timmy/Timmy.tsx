import React from 'react'
import timmy1 from '../../../res/images/Timmy1.svg'
import timmy2 from '../../../res/images/Timmy2.svg'
import timmy3 from '../../../res/images/Timmy3.svg'
import timmy4 from '../../../res/images/Timmy4.svg'
import styles from './Timmy.module.css'
import Block from '../../text/Block'

export type WhichTimmy = '1' | '2' | '3' | '4'

interface Props {
  whichTimmy?: WhichTimmy
}

export default function Timmy(props: React.PropsWithChildren<Props>) {
  let timmy = <></>

  switch (props.whichTimmy) {
    case '1':
      timmy = <img src={timmy1} alt={'directions-giver timmy'} width={'360'} height={'400'}/>
      break
    case '2':
      timmy = <img src={timmy2} alt={'directions-giver timmy'} width={'360'} height={'400'}/>
      break
    case '3':
      timmy = <img src={timmy3} alt={'directions-giver timmy'} width={'360'} height={'400'}/>
      break
    case '4':
      timmy = <img src={timmy4} alt={'directions-giver timmy'} width={'360'} height={'400'}/>
      break
    default:
      timmy = <img src={timmy1} alt={'directions-giver timmy'} width={'360'} height={'400'}/>
  }

  return(
    <div className={styles.wrapper}>
      <div className={styles.timmy}>
        {timmy}
      </div>

      <div className={styles.timmyDialog}>
        <Block size={'small'}>
          {props.children}
        </Block>
      </div>
    </div>
  )
}
