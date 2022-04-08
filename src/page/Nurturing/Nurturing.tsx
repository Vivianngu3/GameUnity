import React, {useState} from 'react'
import Plot from '../../component/container/Plot/Plot'
import StateHandler from './StateHandler'
import {Progress} from '../../component/container/Plot/Plot'
import {State} from './StateHandler'

export interface NurturingState {
  plotFence: State<boolean>
  plotProgress: State<Progress>
}

export default function Nurturing() {
  const [plotFence, setPlotFence] = useState(false)
  const [plotProgress, setPlotProgress] = useState<Progress>('start')

  const stateHandler = new StateHandler({
    plotFence: {'state': plotFence, 'set': setPlotFence},
    plotProgress: {'state': plotProgress, 'set': setPlotProgress},
  })

  return (
    <>
      {plotFence &&
        <Plot />
      }

      <button onClick={() => {stateHandler.dig()}}>add plot</button>
      {/*<ToolBox />*/}
    </>
  )
}