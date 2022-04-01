import React from 'react'
import styles from './Link.module.css'
import utils from '../../../utils/utils.module.css'
import {NavLink} from 'react-router-dom'

interface Props {
  destination: string
  disabled?: Boolean
  onClick?: () => void
  className?: string
}

export default function Link(props: React.PropsWithChildren<Props>) {
  let classes: String[] = []
  classes.push(props.disabled ? styles.disabled : styles.enabled)
  classes.push(utils.allCaps)
  if (props.className) classes.push(props.className)
  classes.push(styles.link)
  return (
    <NavLink
      className={classes.join(' ')}
      to={props.destination}
      onClick={props.onClick}
    >
      {props.children}
    </NavLink>
  )
}