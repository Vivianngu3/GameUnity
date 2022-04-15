import React, {useState} from 'react';

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
      <Tool icon={tool.icon} name={tool.name} onClick={tool.onClick} key={tool.name} />
    )})

  const [showDisplay, setShowDisplay] = useState(false)

  let display =
    <div className={styles.toolsContainerClosed}>
      <div className={styles.toolBoxIconClosed}>
        <img onClick={() => {setShowDisplay(true)}} src={toolbox} />
      </div>
    </div>

  if (showDisplay) {
    display =
    <div className={styles.toolBox}>
      <div className={styles.toolBoxIconOpen}>
        <img onClick={() => {setShowDisplay(false)}} src={toolbox} />
      </div>
      <div className={styles.toolsContainerOpen}>
        {toolsArray}
      </div>
    </div>
  }

  return (
    <>
    {display}
    </>
  )
}
