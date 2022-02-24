import React from 'react';
import styles from './Button.module.css'
import utils from '../../../utils/utils.module.css'

type Shade = 'light' | 'medium'

interface Props {
  shade: Shade
  allCaps?: Boolean
}

export default function Button(props: React.PropsWithChildren<Props>) {
  let classes: string[] = [];
  switch (props.shade) {
    case 'light':
      classes.push(styles.light)
      break
    case 'medium':
      classes.push(styles.medium)
      break
  }
  
  if (props.allCaps) {
    classes.push(utils.allCaps)
  }

  return (
    <button className={classes.join(' ')}>{props.children}</button>
  )
}