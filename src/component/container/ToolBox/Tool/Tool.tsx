import React from 'react'
import styles from './Tool.module.css'
import highlight from '../../../../res/images/onboarding-highlight.svg'
import DirectedDialog, {Side} from '../../../static/DirectedDialog/DirectedDialog'

export type ToolName = 'Scissors' | 'Shovel' | 'Water' | 'Pesticide' | 'Seeds' | 'Fence' | 'Worms' | 'Fertilizer'

export interface DescriptionProps {
  contents: string | JSX.Element
  side: Side
}

export interface Props {
  icon: string
  name: ToolName
  alt?: string
  onClick: () => void
  disabled?: boolean
  highlighted?: boolean
  directedDescription?: DescriptionProps
}

export default function Tool(props: Props) {
  let toolHighlight = props.highlighted ? (
      <img
        className={styles.highlight}
        src={highlight}
        alt={'Highlight on top of tool'}
      />
    ) : <></>

  let tool = !props.disabled ? (
      <div
        className={styles.tool}
        onClick={() => {props.onClick()}}
      >
        <div>
          <img draggable={false} className={styles.toolIcon} src={props.icon} alt={props.alt} />
        </div>
        <div className={styles.toolLabel}>
          {props.name}
        </div>
        {toolHighlight}
      </div>
    ) : <div className={styles.disabled} />

  if (props.directedDescription) {
    return (
      <DirectedDialog
        side={props.directedDescription.side}
        anchor={tool}
      >
        {props.directedDescription.contents}
      </DirectedDialog>
    )
  } else {
    return tool
  }
}
