import React from 'react';
import styles from './NavButton.module.css'
import utils from '../../../utils/utils.module.css'
import {NavLink} from 'react-router-dom'

interface Props {
  destination: string
  centered?: boolean
  className?: string
}

export default function NavButton(props: React.PropsWithChildren<Props>) {
  let classes: string[] = [];

  if (props.centered) classes.push(utils['block-horiz-centered'])

  classes.push(utils.allCaps)
  classes.push(styles.container)

  return (
    <div className={classes.join(' ')}>
      <NavLink className={styles.link} to={props.destination}>
        {props.children}
      </NavLink>
    </div>
  )
}