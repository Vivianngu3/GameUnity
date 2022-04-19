import React, {Dispatch, SetStateAction, useState} from 'react'
import Plot, {Progress as PlotProgress} from '../../component/container/Plot/Plot'
import {GamePageState} from '../../utils/GameStateMediator'
import NurturingStateMediator from './NurturingStateMediator'
import CheckList, {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'
import ToolBox from '../../component/container/ToolBox/ToolBox'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import Timmy from '../../component/static/Timmy/Timmy'
import {useNavigate} from 'react-router-dom'
import {GAME, TIME_LAPSE} from '../../res/constants/url-endpoints'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'

export interface NurturingState extends GamePageState {
  setShowNextArrow: Dispatch<SetStateAction<boolean>>
}

export default function Nurturing() {
  const [timmyText, setTimmyText] = React.useState('Try completing your checklist in order!')
  const [showArrow, setShowArrow] = React.useState(false)
  const [toolboxOpen, setToolboxOpen] = React.useState(false)

  // See here for an explanation of why this needs a function that returns a function in order to have a simple function in state:
  // https://stackoverflow.com/questions/55621212/is-it-possible-to-react-usestate-in-react
  const [toolboxToggleSideEffect, setToolboxToggleSideEffect] =
    React.useState<() => void>(() => () => {})

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

  const [plotProgress, setPlotProgress] = useState<PlotProgress>('start')
  const [checkedItems, setCheckedItems] = useState<ChecklistProps>({})

  const stateMediator = new NurturingStateMediator({
    plotProgress: {'value': plotProgress, 'set': setPlotProgress},
    checkedItems: {'value': checkedItems, 'set': setCheckedItems},
    timmyText: {'value': timmyText, 'set': setTimmyText},
    setToolboxOpen: setToolboxOpen,
    setToolboxToggleSideEffect: setToolboxToggleSideEffect,
    setShowNextArrow: setShowArrow,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {return () => {stateMediator.stopUpdates()}}, [])

  return (
    <>
      <GameBackground />
      <Plot
        progress={plotProgress}
        coverSeed={() => {stateMediator.coverSeeds()}}
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