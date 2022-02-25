import React from 'react';
import styles from './Button.module.css'
import utils from '../../../utils/utils.module.css'

type Shade = 'color-secondary' | 'color-tertiary'

interface Props {
  shade: Shade
}

export default function Button(props: React.PropsWithChildren<Props>) {
  let classes: string[] = [];
  switch (props.shade) {
    case 'color-secondary':
      classes.push(styles['color-secondary'])
      break
    case 'color-tertiary':
      classes.push(styles['color-tertiary'])
      break
  }
  
  classes.push(utils.allCaps)
  classes.push(styles.button)

  return (
    <button className={classes.join(' ')}>{props.children}</button>
  )
}