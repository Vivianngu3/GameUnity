import React from 'react'
import next from '../../../res/images/next-arrow.svg'
import Label from '../../text/Label'
import styles from './NextArrow.module.css'

interface Props {
  callbackArray: (() => void)[]
}

export default function NextArrow(props: Props) {
  let callbacksCopy = [...props.callbackArray]
  const [callbackArray, setCallbackArray] = React.useState(callbacksCopy)

  let onClick = () => {
    console.log('Callbacks before:')
    console.log(callbackArray)
    // let currentCallback = reversed.pop()
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
    <div
      className={styles.container}
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