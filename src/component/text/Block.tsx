import React from 'react'
import styles from './text.module.css'
import utils from '../../utils/utils.module.css'

type Align = 'center' | 'left'
type Size = 'medium' | 'small'

interface Props {
    align?: Align // centered is default
    size?: Size // medium is default
}

export default function Block(props: React.PropsWithChildren<Props>) {
    let classes: string[] = []

    classes.push(props.align === 'left' ? utils['left-align'] : utils['center-align'])
    if (props.size === 'small') classes.push(styles.small)
    classes.push(styles.block)

    return (
      <p className={classes.join(' ')}>{props.children}</p>
    )
}
