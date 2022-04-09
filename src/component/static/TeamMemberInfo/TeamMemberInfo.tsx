import React from 'react'
import styles from './TeamMemberInfo.module.css'
import Block from '../../text/Block'
import Caption from '../../text/Caption'
import Icon from '../../text/Icon'

interface Props {
  src: string
  alt: string
  name: string
  role: string
  email: string
  github: string
  linkedin: string
}

export default function TeamMemberInfo(props: Props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      <Block>{props.name}</Block>
      <Caption>{props.role}</Caption>
      {/*<Icon>{props.email} {props.github} {props.linkedin}</Icon>*/}
    </div>
  )
}