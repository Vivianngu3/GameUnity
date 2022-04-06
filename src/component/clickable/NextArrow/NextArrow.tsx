import React from 'react'
import styles from './NextArrow.module.css'
import utils from '../../../utils/utils.module.css'
import next from '../../../res/images/next-arrow.svg'
import { Navigate } from 'react-router-dom'
import Label from '../../text/Label'

interface Props {
  callbackArray: (() => void)[]
  nextPage?: string // Should be a page endpoint like 'game/welcome'
}

export default function NextArrow(props: Props) {
  let callbacksCopy = [...props.callbackArray]
  const [callbackArray, setCallbackArray] = React.useState(callbacksCopy)

  const [navigateNext, setNavigateNext] = React.useState(false)
  if (props.nextPage) callbacksCopy.push(() => {setNavigateNext(true)})

  let onClick = () => {
    console.log('Callbacks before:')
    console.log(callbackArray)
    if (callbackArray.length > 0) {
      let currentCallback = callbackArray[0]
      currentCallback()
      if (callbackArray.length > 1) {
        setCallbackArray(callbackArray.slice(1))
      } else if (callbackArray.length === 1) {
        setCallbackArray([])
      }
    }
    console.log('Callbacks after:')
    console.log(callbackArray)
  }
  return (
    <>
      {navigateNext && props.nextPage ? (
        <Navigate to={props.nextPage} />
      ) : (
        <div
          className={utils.clickable + ' ' + styles.container}
          onClick={onClick}
        >
          <img src={next} alt={'Next arrow'} />
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