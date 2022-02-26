import React from 'react'
import styles from './Link.module.css'
import utils from '../../../utils/utils.module.css'
import {NavLink} from 'react-router-dom'

interface Props {
  destination: string
  disabled?: Boolean
  onClick?: () => void
}

export default function Link(props: React.PropsWithChildren<Props>) {
  let classes: String[] = []
  classes.push(props.disabled ? styles.disabled : styles.enabled)
  classes.push(utils.allCaps)
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