import React, {useState} from 'react'
import Plot from '../../component/container/Plot/Plot'
import StateMediator, {State} from './NurturingStateMediator'
import {Progress} from '../../component/container/Plot/Plot'
import CheckList from '../../component/container/CheckList/CheckList'

export interface NurturingState {
  plotFence: State<boolean>
  plotProgress: State<Progress>
}

export default function Nurturing() {
  const [plotFence, setPlotFence] = useState(false)
  const [plotProgress, setPlotProgress] = useState<Progress>('start')

  const stateMediator = new StateMediator({
    plotFence: {'state': plotFence, 'set': setPlotFence},
    plotProgress: {'state': plotProgress, 'set': setPlotProgress},
  })

  return (
    <>
      <Plot
        fence={plotFence}
        progress={plotProgress}
        />

      <CheckList
        dug
        planted
        improved
      />
      <button onClick={() => {stateMediator.dig()}}>Dig!</button>
      {/*<ToolBox />*/}
    </>
  )
}