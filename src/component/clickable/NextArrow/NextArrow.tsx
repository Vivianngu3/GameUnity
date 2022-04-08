import React, {Dispatch, SetStateAction, useEffect} from 'react'
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
  let callbacks = [...props.callbacks]
  let setCallbacks = props.setCallbacks
  let nextPage = props.nextPage

  let containerClasses = [utils.clickable, styles.container]

  React.useEffect(() => {
    if (nextPage) callbacks.push(() => {
      setNavigateNext(true)
    })
    let onClick = () => {
      console.log('Callbacks:')
      console.log(callbacks)
      if (callbacks.length > 0) {
        let currentCallback = callbacks[0]
        currentCallback()
        if (callbacks.length > 1) {
          setCallbacks(callbacks.slice(1))
        } else if (callbacks.length === 1) {
          setCallbacks([])
        }
      }
    }
    let container = document.querySelector('div.' + containerClasses.join('.'))
    container && container.addEventListener('click', onClick)
  }, [callbacks, setCallbacks, nextPage])


  return (
    <>
      {navigateNext && props.nextPage ? (
        <Navigate to={props.nextPage}/>
      ) : (
        <div className={containerClasses.join(' ')}>
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