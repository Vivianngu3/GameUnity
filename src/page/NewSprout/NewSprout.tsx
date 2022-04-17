import React, {Dispatch, SetStateAction, useState} from 'react'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import {GamePageState, State} from '../../utils/GameStateMediator'
import Plot, {Progress} from '../../component/container/Plot/Plot'
import {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'

export interface NewSproutState extends GamePageState {
  plotFence: State<boolean>
  plotProgress: State<Progress>
  checkedItems: State<ChecklistProps>
  setTimmyText: Dispatch<SetStateAction<string>>
  setShowNextArrow: Dispatch<SetStateAction<boolean>>
  setToolboxOpen: Dispatch<SetStateAction<boolean>>
}

export default function NewSprout() {
  const [timmyText, setTimmyText] = React.useState('Oh look! Some new friends have joined us.')
  const [showArrow, setShowArrow] = React.useState(false)
  const [toolboxOpen, setToolboxOpen] = React.useState(false)

  const initialNextArrowCallbacks = [
    () => {
      setTimmyText('With this many new faces, it might be a good idea to protect your plant.')
    },
  ]
  const [nextArrowCallbacks, setNextArrowCallbacks] = React.useState(initialNextArrowCallbacks)

  const [plotProgress, setPlotProgress] = useState<Progress>('grown')
  const [checkedItems, setCheckedItems] = useState<ChecklistProps>({})

  return (
    <>
      <GameBackground animalsPosition={1} />
      <Plot progress={plotProgress} />
    </>
  )
}