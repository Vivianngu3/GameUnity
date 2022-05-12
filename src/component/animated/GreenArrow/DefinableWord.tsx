import React from 'react'
import styles from './DefinableWord.module.css'
import greenArrow from '../../../res/images/green-arrow.svg'
import utils from '../../../utils/utils.module.css'

interface Props {
  onClick?: () => void
  secondsDelay?: number
}

export default function DefinableWord(props: React.PropsWithChildren<Props>) {

  const [showGreenArrow, setShowGreenArrow] = React.useState(false)

  React.useEffect(() => {
    let timeoutID = setTimeout(() => {
     setShowGreenArrow(true)
    }, ( props.secondsDelay || 5 ) * 1000)
    return () => {clearTimeout(timeoutID)}
  }, [props.secondsDelay])

  let spanClasses = [styles.wrapper, utils.underline, utils.clickable]

  return (
    <span
      onClick={props.onClick}
      className={spanClasses.join(' ')}
    >
      {props.children}
      {showGreenArrow &&
        <img src={greenArrow} className={styles.greenArrow} alt={'a green arrow pointing at vocabulary word'}/>
      }
    </span>
  )
}