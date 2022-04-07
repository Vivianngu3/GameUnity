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
  const [navigateNext, setNavigateNext] = React.useState(false)
  if (props.nextPage) props.callbackArray.push(() => {setNavigateNext(true)})
  // TODO: continue
  props.callbackArray.reverse()

  let onClick = () => {
    console.log('Callbacks:')
    console.log(props.callbackArray)
    let currentCallback = props.callbackArray.pop()
    if (currentCallback) {currentCallback()}
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