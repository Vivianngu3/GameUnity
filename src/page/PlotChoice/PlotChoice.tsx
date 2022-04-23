import React from 'react'
import styles from './PlotChoice.module.css'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import Dialog from '../../component/static/Dialog/Dialog'
import ChoicePlot from '../../component/container/Plot/ChoicePlot/ChoicePlot'

export default function PlotChoice() {

  return (
    <>
      <GameBackground />
      <Dialog />
      <div className={styles.plotsContainer}>
        {/*{showPlot1 &&*/}
          <ChoicePlot wetness={'dry'} />
          <ChoicePlot wetness={'medium'} />
          <ChoicePlot wetness={'wet'} />
      </div>
    </>
  )
}
