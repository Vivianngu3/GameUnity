import React from 'react'
import utils from '../../utils/utils.module.css'
import styles from './text.module.css'

type Color = 'black' | 'color-primary'
type Boldness = 'light' | 'bold'

interface Props {
  allCaps?: boolean // default false
  color?: Color // default 'text-on-background'
  boldness?: Boldness // default 'light'
}

export default function Label(props: React.PropsWithChildren<Props>) {

  let stylesArray = []

  stylesArray.push(styles['labelSize'])
  stylesArray.push(styles['labelMargin'])

  if (props.allCaps) stylesArray.push(utils.allCaps)

  switch (props.color) {
    case 'black':
      stylesArray.push(styles['black'])
      break
    case 'color-primary':
      stylesArray.push(styles['color-one'])
      break
    default:
      stylesArray.push(styles['black'])
  }

  switch (props.boldness) {
    case 'light':
      stylesArray.push(styles['light'])
      break
    case 'bold':
      stylesArray.push(styles['bold'])
      break
    default:
      stylesArray.push(styles['light'])
  }

  return (
    <p className={stylesArray.join(' ')}>{props.children}</p>
    )
}