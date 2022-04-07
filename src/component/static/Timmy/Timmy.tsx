import React from 'react'
import timmy from '../../../res/images/Timmy.svg'
import styles from './Timmy.module.css'
import Block from '../../text/Block'

interface Props {}

export default function Timmy(props: React.PropsWithChildren<Props>) {
  return(
    <div>
      <div className={styles.timmy}>
        <img src={timmy} alt={'directions-giver timmy'} width={'360'} height={'400'}/>
      </div>

      <div className={styles.timmyDialog}>
        <Block size={'small'}>
          {props.children}
        </Block>
      </div>
    </div>
  )
}
