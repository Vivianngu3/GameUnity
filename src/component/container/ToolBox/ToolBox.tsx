import React from 'react';

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
import Tool from './Tool/Tool'

interface Tool {
  name: string
  onClick: () => {}
  icon: any
  open: boolean
}

export default function ToolBox() {
  let tools = [
    {name: 'toolbox', onClick: () => {}, icon: toolbox},
    {name: 'scissors', onClick: () => {}, icon: scissors},
    {name: 'shovel', onClick: () => {}, icon: shovel},
    {name: 'water', onClick: () => {}, icon: water},
    {name: 'pesticide', onClick: () => {}, icon: pesticide},
    {name: 'seeds', onClick: () => {}, icon: seeds},
    {name: 'fence', onClick: () => {}, icon: fence},
    {name: 'worms', onClick: () => {}, icon: worms},
    {name: 'fertilizer', onClick: () => {}, icon: fertilizer}
  ]

  tools.map(tool => {
    return (
      <div>

      </div>
    )})

  return (
    //return when open
    <div className={styles.toolBox}>
      <div className={styles.toolBoxIconOpen}>
        <img src={toolbox} />
      </div>
      <div className={styles.toolsContainerOpen}>
        <Tool img={scissors} tool={'Scissors'} />
        <Tool img={shovel} tool={'Shovel'} />
        <Tool img={water} tool={'Water'} />
        <Tool img={pesticide} tool={'Pesticide'} />
        <Tool img={seeds} tool={'Seeds'} />
        <Tool img={fence} tool={'Fence'} />
        <Tool img={worms} tool={'Worms'} />
        <Tool img={fertilizer} tool={'Fertilizer'} />
      </div>

    </div>
    // Return when closed
    // <div className={styles.toolsContainerClosed}>
    //    <div className={styles.toolBoxIconClosed}>
    //       <img src={toolbox} />
    //    </div>
    // </div>
  )
}
