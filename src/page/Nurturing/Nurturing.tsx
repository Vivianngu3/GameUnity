import React, {useState} from 'react'
import Plot from '../../component/container/Plot/Plot'
import {State} from '../../utils/StateMediator'
import StateMediator from './NurturingStateMediator'
import {Progress} from '../../component/container/Plot/Plot'
import CheckList, {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'
import ToolBox from "../../component/container/ToolBox/ToolBox";
import GameBackground, {Time} from '../../component/animated/GameBackground/GameBackground'

export interface NurturingState {
  plotFence: State<boolean>
  plotProgress: State<Progress>
  checkedItems: State<ChecklistProps>
}

export default function Nurturing() {
  const [plotFence, setPlotFence] = useState(false)
  const [plotProgress, setPlotProgress] = useState<Progress>('start')
  const [checkedItems, setCheckedItems] = useState<ChecklistProps>({})

  const [times, setTimes] = useState<Time[]>(['noon', 'afternoon', 'evening', 'twilight'])

  const stateMediator = new StateMediator({
    plotFence: {'state': plotFence, 'set': setPlotFence},
    plotProgress: {'state': plotProgress, 'set': setPlotProgress},
    checkedItems: {'state': checkedItems, 'set': setCheckedItems},
  }, console.log)

  React.useEffect(() => {return () => {stateMediator.stopUpdates()}}, [])

  React.useEffect(() => {
    let timerID = setTimeout(() => {
      let remainingTimes = times.slice(1)
      if (remainingTimes.length > 0) {
        setTimes(remainingTimes)
      } else {
        clearTimeout(timerID)
      }
    }, 1500)
    return () => { clearTimeout(timerID) }
  })

  return (
    <>
      <GameBackground
        time={times[0]}
        />
      <Plot
        fence={plotFence}
        progress={plotProgress}
        coverSeed={() => {stateMediator.coverSeeds()}}
        />

      <CheckList
        {...checkedItems}
      />
      <ToolBox behaviorHandler={stateMediator} />
    </>
  )
}