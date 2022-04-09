import React, {useState} from 'react'
import Plot from '../../component/container/Plot/Plot'
import StateMediator, {State} from './NurturingStateMediator'
import {Progress} from '../../component/container/Plot/Plot'
import CheckList, {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'
import ToolBox from "../../component/container/ToolBox/ToolBox";


export interface NurturingState {
  plotFence: State<boolean>
  plotProgress: State<Progress>
  checkedItems: State<ChecklistProps>
}

export default function Nurturing() {
  const [plotFence, setPlotFence] = useState(false)
  const [plotProgress, setPlotProgress] = useState<Progress>('start')
  const [checkedItems, setCheckedItems] = useState<ChecklistProps>({})

  const stateMediator = new StateMediator({
    plotFence: {'state': plotFence, 'set': setPlotFence},
    plotProgress: {'state': plotProgress, 'set': setPlotProgress},
    checkedItems: {'state': checkedItems, 'set': setCheckedItems},
  })

  return (
    <>
      <Plot
        fence={plotFence}
        progress={plotProgress}
        />

      <CheckList
        {...checkedItems}
      />
      <button onClick={() => {stateMediator.dig()}}>Dig!</button>
      <button onClick={() => {stateMediator.sowSeeds()}}>Sow Seeds!</button>
      <ToolBox />
    </>
  )
}