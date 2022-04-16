import React from 'react'

import toolbox from '../../../res/images/toolbox.svg'
import scissors from '../../../res/images/scissors.svg'
import shovel from '../../../res/images/shovel.svg'
import water from '../../../res/images/water.svg'
import pesticide from '../../../res/images/pesticide.svg'
import seeds from '../../../res/images/seeds.svg'
import fence from '../../../res/images/fence.svg'
import worms from '../../../res/images/worms.svg'
import fertilizer from '../../../res/images/fertilizer.svg'
import styles from './ToolBox.module.css'
import Tool, {Props as ToolProps} from './Tool/Tool'
import {State} from '../../../utils/StateMediator'

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
  toggleSideEffect: () => void
}

export default function ToolBox(props: Props) {
  let callbacks = props.behaviorHandler
  let tools: ToolProps[] = [
    {name: 'scissors', onClick: () => {callbacks.cut()}, icon: scissors},
    {name: 'shovel', onClick: () => {callbacks.dig()}, icon: shovel},
    {name: 'water', onClick: () => {callbacks.water()}, icon: water},
    {name: 'pesticide', onClick: () => {callbacks.pesticide()}, icon: pesticide},
    {name: 'seeds', onClick: () => {callbacks.sowSeeds()}, icon: seeds},
    {name: 'fence', onClick: () => {callbacks.postFence()}, icon: fence},
    {name: 'worms', onClick: () => {callbacks.improveSoil()}, icon: worms},
    {name: 'fertilizer', onClick: () => {callbacks.fertilizer()}, icon: fertilizer}
  ]

  let toolsArray = tools.map(tool => {
    return (
      <Tool
        name={tool.name} alt={tool.name} key={tool.name}
        icon={tool.icon} onClick={tool.onClick}
      />
    )})

  const openButtonHandler = () => {
    console.log("Toolbox open handler called")
    props.openState.set(!props.openState.value)
    props.toggleSideEffect()
  }

  return (
    <div className={styles.toolBox}>
      <div className={props.openState.value ? styles.toolBoxIconOpen : styles.toolsContainerClosed}>
        <img onClick={() => {openButtonHandler()}} src={toolbox} alt={'Click to open or close toolbox'} />
      </div>
      { props.openState.value &&
        <div className={styles.toolsContainerOpen}>
          {toolsArray}
        </div>
      }
    </div>
  )
}
