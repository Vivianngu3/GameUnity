import React from 'react'
import Block from '../../text/Block'

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
      <Block>{props.role}</Block>
      <Block>{props.email} {props.github} {props.linkedin}</Block>
    </div>
  )
}