import React from 'react'
import styles from './text.module.css'
import utils from '../../utils/utils.module.css'

type Type = 'title' | 'section'
type Color = 'on-primary' | 'on-secondary' | 'on-tertiary'

interface Props {
  type: Type
  color?: Color
  allCaps?: Boolean
}

export default function Heading(props: React.PropsWithChildren<Props>) {

  let stylesArray = []
  
  if (props.allCaps) stylesArray.push(utils.allCaps)

  switch (props.type) {
    case 'title':
      stylesArray.push(styles.title)
      break
    case 'section':
      stylesArray.push(styles.section)
      break
  }

  switch (props.color) {
    case 'on-primary':
      stylesArray.push(styles['on-primary'])
      break
    case 'on-secondary':
      stylesArray.push(styles['on-primary'])
      break
    case 'on-tertiary':
      stylesArray.push(styles['on-primary'])
      break
    default:
      stylesArray.push(styles['on-page-background'])
  }

  return (
    <h1 className={stylesArray.join(' ')}>
      {props.children}
    </h1>
  )
}
