import React, {useState} from 'react'
import Plot from '../../component/container/Plot/Plot'
import StateMediator, {State} from './NurturingStateMediator'
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

  React.useEffect(() => {
    let timerID = setInterval(() => {
      let remainingTimes = times.slice(1)
      if (remainingTimes) {
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
        />

      <CheckList
        {...checkedItems}
      />
      <ToolBox behaviorHandler={stateMediator} />
    </>
  )
}