import React, {PropsWithChildren} from 'react'
import Block from '../../text/Block'

interface Props {
  src: string
  alt: string
}

export default function ImageWithText(props: PropsWithChildren<Props>) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      <Block>{props.children}</Block>
    </div>
  )
}
