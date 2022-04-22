import React from 'react'
import clock1 from '../../../res/images/clock1.svg'
import clock2 from '../../../res/images/clock2.svg'
import clock3 from '../../../res/images/clock3.svg'
import clock4 from '../../../res/images/clock4.svg'
import clock5 from '../../../res/images/clock5.svg'
import clock6 from '../../../res/images/clock6.svg'
import styles from './Clock.module.css'

export type Time = '1' | '2' | '3' | '4' | '5' | '6'

interface Props {
  time: Time
}

export default function Clock(props: Props) {
  let clockPosition = <></>

  switch (props.time) {
    case '1':
      clockPosition = <img className={styles.clock} src={clock1} alt={'clock in position 1'} />
      break
    case '2':
      clockPosition = <img className={styles.clock} src={clock2} alt={'clock in position 2'} />
      break
    case '3':
      clockPosition = <img className={styles.clock} src={clock3} alt={'clock in position 3'} />
      break
    case '4':
      clockPosition = <img className={styles.clock} src={clock4} alt={'clock in position 4'} />
      break
    case '5':
      clockPosition = <img className={styles.clock} src={clock5} alt={'clock in position 5'} />
      break
    case '6':
      clockPosition = <img className={styles.clock} src={clock6} alt={'clock in position 6'} />
      break
    default:
      clockPosition = <img className={styles.clock} src={clock1} alt={'clock in position 1'} />
  }

  return (
    <>
      {clockPosition}
    </>
  )
}