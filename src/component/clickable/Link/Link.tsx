import React from 'react';
import styles from './Link.module.css'

interface Props {
  disabled: Boolean
}

export default function Link(props: React.PropsWithChildren<Props>) {
  let classes: String[] = []
  if (props.disabled) classes.push(styles.disabled)
  return (
    <button className={classes.join(' ')}>{props.children}</button>
  )
}