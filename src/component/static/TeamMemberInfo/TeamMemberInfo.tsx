import React from 'react'
import styles from './TeamMemberInfo.module.css'
import Block from '../../text/Block'
import Caption from '../../text/Caption'
import Icon from '../../clickable/Icon/Icon'
import email  from '../../../res/images/email-icon.svg'
import github from '../../../res/images/github-icon.svg'
import linkedin from '../../../res/images/linkedin-icon.svg'

interface Props {
  memberImageSrc: string
  memberImageAlt: string
  memberName: string
  memberRole: string
  emailSrc: string
  githubSrc: string
  linkedinSrc: string
}

export default function TeamMemberInfo(props: Props) {
  return (
    <div>
      <img src={props.memberImageSrc} alt={props.memberImageAlt} />
      <Block>{props.memberName}</Block>
      <Caption>{props.memberRole}</Caption>
      <div className={styles.row}>
        <Icon src={email} alt={props.memberImageAlt} destination={'mailto:' + props.emailSrc} />
        <Icon src={github} alt={props.memberImageAlt} destination={'https://' + props.githubSrc} />
        <Icon src={linkedin} alt={props.memberImageAlt} destination={'https://' + props.linkedinSrc} />
      </div>
    </div>
  )
}