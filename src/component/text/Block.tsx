import React from 'react'
import styles from './text.module.css'
import utils from '../../utils/utils.module.css'

type Align = 'center' | 'left'

interface Props {
    align?: Align
}

export default function Block(props: React.PropsWithChildren<Props>) {
    let classes: string[] = []

    classes.push(props.align === 'left' ? utils['left-align'] : utils['center-align'])
    classes.push(styles.block)

    return (
      <p className={classes.join(' ')}>{props.children}</p>
    )
}
