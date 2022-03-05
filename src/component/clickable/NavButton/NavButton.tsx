import React from 'react';
import styles from './NavButton.module.css'
import utils from '../../../utils/utils.module.css'
import {NavLink} from 'react-router-dom'

type Color = 'secondary' | 'tertiary'

interface Props {
  color: Color
  destination: string
  centered?: boolean
  className?: string
}

export default function NavButton(props: React.PropsWithChildren<Props>) {
  let classes: string[] = [];
  switch (props.color) {
    case 'secondary':
      classes.push(styles['color-secondary'])
      break
    case 'tertiary':
      classes.push(styles['color-tertiary'])
      break
  }

  if (props.centered) classes.push(utils['block-horiz-centered'])

  classes.push(utils.allCaps)
  classes.push(styles.nav)

  return (
    <div className={classes.join(' ')}>
      <NavLink className={styles.link} to={props.destination}>
        {props.children}
      </NavLink>
    </div>
  )
}