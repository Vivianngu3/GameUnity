import React from 'react'
import styles from './GreenArrow.module.css'
import greenArrow from '../../../res/images/green-arrow.svg'

interface Props {
  timeout: number
}

export default function GreenArrow(props: Props) {

  const [showGreenArrow, setShowGreenArrow] = React.useState(false)

  React.useEffect(() => {
    let timeoutID = setTimeout(() => {
     setShowGreenArrow(true)
    }, props.timeout)
    return () => {clearTimeout(timeoutID)}
  }, [])

  return (
    <>
    {showGreenArrow &&
      <img src={greenArrow} className={styles.greenArrow} alt={'a green arrow pointing at vocabulary word'}/>
    }
    </>
  )
}