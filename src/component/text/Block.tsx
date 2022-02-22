import React from 'react'
import styles from './text.module.css'

type Align = 'center' | 'left'

interface Props {
    align?: Align
}

export default function Block(props: React.PropsWithChildren<Props>) {
    if (props.align === 'left') {
        return <p className={styles.left}>{props.children}</p>
    } else {
        return <p className={styles.center}>{props.children}</p>
    }
}
