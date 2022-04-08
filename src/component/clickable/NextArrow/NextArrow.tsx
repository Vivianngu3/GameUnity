import React, {Dispatch, SetStateAction} from 'react'
import styles from './NextArrow.module.css'
import utils from '../../../utils/utils.module.css'
import next from '../../../res/images/next-arrow.svg'
import { Navigate } from 'react-router-dom'
import Label from '../../text/Label'

type CallbackArray = (() => void)[]

interface Props {
  callbacks: CallbackArray
  setCallbacks: Dispatch<SetStateAction<CallbackArray>>
  nextPage?: string // Should be a page endpoint like 'game/welcome'
}

export default function NextArrow(props: Props) {
  const [navigateNext, setNavigateNext] = React.useState(false)
  if (props.nextPage) props.callbacks.push(() => {
    setNavigateNext(true)
  })

  let onClick = () => {
    console.log('Callbacks:')
    console.log(props.callbacks)
    if (props.callbacks.length > 0) {
      let currentCallback = props.callbacks[0]
      currentCallback()
      if (props.callbacks.length > 1) {
        props.setCallbacks(props.callbacks.slice(1))
      } else if (props.callbacks.length === 1) {
        props.setCallbacks([])
      }
    }
  }
  return (
    <>
      {navigateNext && props.nextPage ? (
        <Navigate to={props.nextPage}/>
      ) : (
        <div
          className={utils.clickable + ' ' + styles.container}
          onClick={onClick}
        >
          <img src={next} alt={'Next arrow'}/>
          <Label
            allCaps={true}
            color={'color-primary'}
            boldness={'bold'}
          >
            Next
          </Label>
        </div>
      )
      }
    </>
  )
}