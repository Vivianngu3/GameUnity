import React from 'react'
import styles from './Icon.module.css'


interface Props {
  src: string
  alt: string
  destination: string
}

export default function Icon(props: Props) {
  return (
    <a href={props.destination}>
      <img className={styles.Icon} src={props.src} alt={props.alt} />
    </a>
  )

}

