import React, {Dispatch, SetStateAction} from 'react'
import styles from './NextArrow.module.css'
import utils from '../../../utils/utils.module.css'
import next from '../../../res/images/next-arrow.svg'
import next2 from '../../../res/images/next-arrow2.svg'
import Label from '../../text/Label'

type CallbackArray = (() => void)[]

interface Props {
  modalVariation?: boolean
  callbacks: CallbackArray
  setCallbacks: Dispatch<SetStateAction<CallbackArray>>
}

export default function NextArrow(props: Props) {
  let callbacks = [...props.callbacks]

  const containerClasses = [utils.clickable, styles.container]

  let onClick = () => {
    if (callbacks.length > 0) {
      let currentCallback = callbacks[0]
      currentCallback()
      if (callbacks.length > 1) {
        props.setCallbacks(callbacks.slice(1))
      } else if (callbacks.length === 1) {
        props.setCallbacks([])
      }
    }
  }

  React.useEffect(() => {
    let container = document.querySelector('div.' + containerClasses.join('.'))
    container && container.addEventListener('click', onClick)
    return () => {container && container.removeEventListener('click', onClick)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClick])

  if (props.modalVariation) {
    const containerClasses = [utils.clickable, styles.container, styles.priority]
    return (
      <div className={containerClasses.join(' ')}>
        <img src={next2} alt={'Next arrow'}/>
        <Label
          allCaps={true}
          color={'color-five'}
          boldness={'bold'}
        >
          Next
        </Label>
      </div>
    )
  } else {
    return (
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
}