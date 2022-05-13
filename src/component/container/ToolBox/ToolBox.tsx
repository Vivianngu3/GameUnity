import React from 'react'
import toolboxIcon from '../../../res/images/toolbox-button.svg'
import scissors from '../../../res/images/scissors.svg'
import shovel from '../../../res/images/shovel.svg'
import water from '../../../res/images/water.svg'
import pesticide from '../../../res/images/pesticide.svg'
import seeds from '../../../res/images/seeds.svg'
import fence from '../../../res/images/fence.svg'
import worms from '../../../res/images/worms.svg'
import fertilizer from '../../../res/images/fertilizer.svg'
import highlight from '../../../res/images/onboarding-highlight.svg'
import styles from './ToolBox.module.css'
import Tool, {DescriptionProps, Props as ToolProps, ToolName} from './Tool/Tool'
import {State} from '../../../utils/GameStateMediator'

export interface ToolBehaviorHandler {
  cut(): void;
  dig(): void;
  water(): void;
  pesticide(): void;
  sowSeeds(): void;
  postFence(): void;
  improveSoil(): void;
  fertilizer(): void;
}

interface Props {
  behaviorHandler: ToolBehaviorHandler
  openState: State<boolean>
  toggleSideEffect?: () => void
  disabledTools?: ToolName[]
  describedTool?: {name: ToolName, descriptionProps: DescriptionProps},
  highlightedTool?: ToolName
  highlightOpenButton?: boolean
}

export default function ToolBox(props: Props) {
  let callbacks = props.behaviorHandler
  let tools: ToolProps[] = [
    {name: 'Scissors', onClick: () => {callbacks.cut()}, icon: scissors},
    {name: 'Shovel', onClick: () => {callbacks.dig()}, icon: shovel},
    {name: 'Water', onClick: () => {callbacks.water()}, icon: water},
    {name: 'Pesticide', onClick: () => {callbacks.pesticide()}, icon: pesticide},
    {name: 'Seeds', onClick: () => {callbacks.sowSeeds()}, icon: seeds},
    {name: 'Fence', onClick: () => {callbacks.postFence()}, icon: fence},
    {name: 'Worms', onClick: () => {callbacks.improveSoil()}, icon: worms},
    {name: 'Fertilizer', onClick: () => {callbacks.fertilizer()}, icon: fertilizer}
  ]

  let toolsArray = tools.map(tool =>
    <Tool
      disabled={props.disabledTools?.includes(tool.name)}
      highlighted={tool.name === props.highlightedTool}
      directedDescription={props.describedTool?.name === tool.name ? props.describedTool?.descriptionProps : undefined}
      name={tool.name} alt={tool.name} key={tool.name}
      icon={tool.icon} onClick={tool.onClick}
    />
  )

  const openButtonHandler = () => {
    props.openState.set(!props.openState.value)
    props.toggleSideEffect && props.toggleSideEffect()
  }

  let buttonHighlight = props.highlightOpenButton ? (
    <div className={styles.buttonHighlightWrapper}>
      <img
        src={highlight} alt={''}
        className={styles.buttonHighlight}
        onClick={() => {openButtonHandler()}}
        draggable={false}
      />
    </div>
  ) : <></>

  return (
    <div className={props.openState.value ? styles.toolBox : styles.toolsContainerClosed}>
      <div className={props.openState.value ? styles.toolBoxIconOpen : styles.toolBoxIconClosed}>
        <img draggable={false} onClick={() => {openButtonHandler()}} src={toolboxIcon} alt={'Click to open or close toolbox'} />
        {buttonHighlight}
      </div>
      { props.openState.value &&
        <div className={styles.toolsContainerOpen}>
          {toolsArray}
        </div>
      }
    </div>
  )
}
