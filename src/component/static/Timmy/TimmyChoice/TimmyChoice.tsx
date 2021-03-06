import React from 'react'
import Label from '../../../text/Label'
import styles from './TimmyChoice.module.css'
import utils from '../../../../utils/utils.module.css'

export interface Props {
  src: string
  onClick: () => void
}

export default function TimmyChoice(props: Props) {
  return (
    <div>
      <img
        draggable={false}
        className={styles.timmy + ' ' + utils.clickable}
        onClick={() => {props.onClick()}}
        src={props.src} alt={'directions-giver timmy'}
        width={'360'}
        height={'400'}
      />
      <Label boldness={'bold'}>Timmy</Label>
    </div>
  )
}

