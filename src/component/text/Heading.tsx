import React from 'react'
import styles from './text.module.css'

type Type = 'title' | 'section'

interface Props {
  type: Type
  allCaps?: Boolean
}

function Heading(props: React.PropsWithChildren<Props>) {

  let stylesArray = []
  
  if (props.allCaps) stylesArray.push(styles.allCaps)

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

export default Heading
