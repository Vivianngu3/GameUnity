import React from 'react'
import styles from './text.module.css'

export default function Caption(props: React.PropsWithChildren<{}>) {
  let classes: string[] = []

  classes.push(styles.caption)

  return (
    <p className={classes.join (' ')}> {props.children}</p>
  )
}