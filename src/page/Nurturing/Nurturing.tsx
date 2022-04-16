import React, {Dispatch, SetStateAction, useRef, useState} from 'react'
import Plot, {Progress} from '../../component/container/Plot/Plot'
import {State} from '../../utils/StateMediator'
import StateMediator from './NurturingStateMediator'
import CheckList, {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'
import ToolBox from '../../component/container/ToolBox/ToolBox'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import Timmy from '../../component/static/Timmy/Timmy'
import {useNavigate} from 'react-router-dom'
import {GAME, TIME_LAPSE} from '../../res/constants/url-endpoints'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'

export interface NurturingState {
  plotFence: State<boolean>
  plotProgress: State<Progress>
  checkedItems: State<ChecklistProps>
  setTimmyText: Dispatch<SetStateAction<string>>
  setShowNextArrow: Dispatch<SetStateAction<boolean>>
  setToolboxOpen: Dispatch<SetStateAction<boolean>>
  setToolboxToggleSideEffect: Dispatch<SetStateAction<() => void>>
}

export default function Nurturing() {
  const [timmyText, setTimmyText] = React.useState('Try completing your checklist in order!')
  const [showArrow, setShowArrow] = React.useState(false)
  const [toolboxOpen, setToolboxOpen] = React.useState(false)

  const initialSideEffect = () => { setTimmyText('') }
  // See here for an explanation of why this needs a function that returns a function in order to have a simple function in state:
  // https://stackoverflow.com/questions/55621212/is-it-possible-to-react-usestate-in-react
  const [toolboxToggleSideEffect, setToolboxToggleSideEffect] =
    React.useState<() => void>(() => initialSideEffect)

  const navigate = useNavigate()

  let initialNextArrowCallbacks = [
    () => {
      console.log('first callback')
      setTimmyText("Let's take a break and watch your seed grow!")
    },
    () => {
      console.log('navigation callback')
      navigate('/' + GAME + TIME_LAPSE)
    }
  ]

  const [nextArrowCallbacks, setNextArrowCallbacks] = React.useState(initialNextArrowCallbacks)

  const [plotFence, setPlotFence] = useState(false)
  const [plotProgress, setPlotProgress] = useState<Progress>('start')
  const [checkedItems, setCheckedItems] = useState<ChecklistProps>({})

  const stateMediator = new StateMediator({
    plotFence: {'value': plotFence, 'set': setPlotFence},
    plotProgress: {'value': plotProgress, 'set': setPlotProgress},
    checkedItems: {'value': checkedItems, 'set': setCheckedItems},
    setTimmyText: setTimmyText,
    setShowNextArrow: setShowArrow,
    setToolboxOpen: setToolboxOpen,
    setToolboxToggleSideEffect: setToolboxToggleSideEffect,
  }, console.log)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {return () => {stateMediator.stopUpdates()}}, [])

  return (
    <>
      <GameBackground />
      <Plot
        fence={plotFence}
        progress={plotProgress}
        coverSeed={() => {stateMediator.coverSeeds()}}
        />

      <CheckList
        {...checkedItems}
      />

      {/* When timmyText === '', it is falsey, and this <Timmy /> is not displayed */}
      {timmyText &&
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