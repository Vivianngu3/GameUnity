import React, {Dispatch, SetStateAction} from 'react'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import {GamePageState, State} from '../../utils/GameStateMediator'
import Plot, {Progress as PlotProgress} from '../../component/container/Plot/Plot'
import CheckList, {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'
import Timmy from '../../component/static/Timmy/Timmy'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import ToolBox from '../../component/container/ToolBox/ToolBox'
import {useNavigate} from 'react-router-dom'
import NewSproutStateMediator from './NewSproutStateMediator'

export interface NewSproutState extends GamePageState {
  plotFence: State<boolean>
  setShowNextArrow: Dispatch<SetStateAction<boolean>>
}

export default function NewSprout() {
  const [timmyText, setTimmyText] = React.useState('Oh look! Some new friends have joined us.')
  const [showArrow, setShowArrow] = React.useState(true)
  const [toolboxOpen, setToolboxOpen] = React.useState(false)

  const [toolboxToggleSideEffect, setToolboxToggleSideEffect] =
    React.useState<() => void>(() => () => {})

  const navigate = useNavigate()

  const initialNextArrowCallbacks = [
    () => {
      setTimmyText('With this many new faces, it might be a good idea to protect your plant.')
    },
    () => {
      setTimmyText('Look in your tool box and pick the tool that would help protect your plant.')
      setShowArrow(false)
    },
    () => {
      navigate('/')
    },
  ]
  const [nextArrowCallbacks, setNextArrowCallbacks] = React.useState(initialNextArrowCallbacks)

  const [plotProgress, setPlotProgress] = React.useState<PlotProgress>('grown')
  const [checkedItems, setCheckedItems] = React.useState<ChecklistProps>({
    dug: true,
    planted: true,
    watered: true,
  })
  const [plotFence, setPlotFence] = React.useState(false)

  const stateMediator = new NewSproutStateMediator({
    plotProgress: {'value': plotProgress, 'set': setPlotProgress},
    checkedItems: {'value': checkedItems, 'set': setCheckedItems},
    timmyText: {'value': timmyText, 'set': setTimmyText},
    setToolboxOpen: setToolboxOpen,
    setToolboxToggleSideEffect: setToolboxToggleSideEffect,
    plotFence: {'value': plotFence, 'set': setPlotFence},
    setShowNextArrow: setShowArrow,
  })


  return (
    <>
      <GameBackground animalsPosition={1} />
      <Plot
        progress={plotProgress}
      />

      <CheckList
        {...checkedItems}
      />

      {/* When timmyText === '', it is falsey, and this <Timmy /> is not displayed */}
      {!toolboxOpen && timmyText &&
        <Timmy>{timmyText}</Timmy>
      }

      {showArrow &&
        <NextArrow
          callbacks={nextArrowCallbacks}
          setCallbacks={setNextArrowCallbacks}
        />
      }

      <ToolBox
        behaviorHandler={stateMediator}
        openState={{value: toolboxOpen, set: setToolboxOpen}}
        toggleSideEffect={() => {toolboxToggleSideEffect()}}
      />
    </>
  )
}
