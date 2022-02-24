import React from 'react'
import styles from './text.module.css'
import utils from '../../utils/utils.module.css'

type Type = 'title' | 'section'

interface Props {
  type: Type
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
  return (
    <h1 className={stylesArray.join(' ')}>
      {props.children}
    </h1>
  )
}
