import React, {Dispatch, SetStateAction, useState} from 'react'
import Plot, {Progress as PlotProgress} from '../../component/container/Plot/Plot'
import {GamePageState, State} from '../../utils/GameStateMediator'
import NurturingStateMediator from './NurturingStateMediator'
import CheckList, {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'
import ToolBox from '../../component/container/ToolBox/ToolBox'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import Timmy from '../../component/static/Timmy/Timmy'
import {useNavigate} from 'react-router-dom'
import {GAME, TIME_LAPSE} from '../../res/constants/url-endpoints'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import DirectedDialog from '../../component/static/DirectedDialog/DirectedDialog'
import ShovelAnimation from '../../component/animated/ShovelAnimation/ShovelAnimation'
import WaterAnimation from '../../component/animated/WaterAnimation/WaterAnimation'
import { ToolName } from '../../component/container/ToolBox/Tool/Tool'

export interface NurturingState extends GamePageState {
  setShowNextArrow: Dispatch<SetStateAction<boolean>>
  showChecklistExplanation: State<boolean>
  showShovelAnimation: State<boolean>
  showWaterAnimation: State<boolean>
  setHighlightedTool: Dispatch<SetStateAction<ToolName | undefined>>
}

export default function Nurturing() {
  const [timmyContents, setTimmyContents] = React.useState<JSX.Element | null>(null)
  const [showArrow, setShowArrow] = React.useState(false)
  const [showChecklistExplanation, setShowChecklistExplanation] = React.useState(true)
  const [toolboxOpen, setToolboxOpen] = React.useState(false)
  const [toolboxDisabled, setToolboxDisabled] = React.useState(false)
  const [showShovelAnimation, setShowShovelAnimation] = React.useState(false)
  const [showWaterAnimation, setShowWaterAnimation] = React.useState(false)

  const animations = [showShovelAnimation, showWaterAnimation]

  // See here for an explanation of why this needs a function that returns a function in order to have a simple function in state:
  // https://stackoverflow.com/questions/55621212/is-it-possible-to-react-usestate-in-react
  const [toolboxToggleSideEffect, setToolboxToggleSideEffect] =
    React.useState<() => void>(() => () => {setHighlightToolboxButton(false)})

  const navigate = useNavigate()

  let initialNextArrowCallbacks = [
    () => {
      console.log('first callback')
      setTimmyContents(<>Let's take a break and watch your seed grow!</>)
    },
    () => {
      console.log('navigation callback')
      navigate('/' + GAME + TIME_LAPSE)
    }
  ]

  const [nextArrowCallbacks, setNextArrowCallbacks] = React.useState(initialNextArrowCallbacks)

  const [plotProgress, setPlotProgress] = useState<PlotProgress>('start')
  const [checkedItems, setCheckedItems] = useState<ChecklistProps>({})

  const [disabledTools, setDisabledTools] = useState<ToolName[]>([])

  const [highlightedTool, setHighlightedTool] = useState<ToolName | undefined>('Shovel')
  const [highlightToolboxButton, setHighlightToolboxButton] = useState(true)

  const stateMediator = new NurturingStateMediator({
    plotProgress: {'value': plotProgress, 'set': setPlotProgress},
    checkedItems: {'value': checkedItems, 'set': setCheckedItems},
    disabledTools: {'value': disabledTools, 'set': setDisabledTools},
    timmyContents: {'value': timmyContents, 'set': setTimmyContents},
    showChecklistExplanation: {'value': showChecklistExplanation, 'set': setShowChecklistExplanation},
    showShovelAnimation: {'value': showShovelAnimation, 'set': setShowShovelAnimation},
    showWaterAnimation: {'value': showWaterAnimation, 'set': setShowWaterAnimation},
    setToolboxOpen: setToolboxOpen,
    setToolboxDisabled: setToolboxDisabled,
    setToolboxToggleSideEffect: setToolboxToggleSideEffect,
    setHighlightedTool: setHighlightedTool,
    setShowNextArrow: setShowArrow,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {return () => {stateMediator.stopUpdates()}}, [])

  let currentAnimation: JSX.Element
  if (showShovelAnimation) {
    currentAnimation = <ShovelAnimation />
  } else if (showWaterAnimation) {
    currentAnimation = <WaterAnimation />
  } else {
    currentAnimation = <></>
  }

  return (
    <>
      <GameBackground />

      <Plot
        progress={plotProgress}
        coverSeed={() => {stateMediator.coverSeeds()}}
        animation={currentAnimation}
      />

      {showChecklistExplanation ?
        <DirectedDialog
          side={'left'}
          closenessCoordinates={{ x:0, y:180 }}
          anchor={
            <CheckList {...checkedItems} />
          }>
          Try completing your checklist in order!
        </DirectedDialog> :
        <CheckList {...checkedItems} />
      }

      {/* When timmyContents === null, it is falsey, and this <Timmy /> is not displayed */}
      {!toolboxOpen && timmyContents &&
        <Timmy>{timmyContents}</Timmy>
      }

      {showArrow &&
        <NextArrow
          callbacks={nextArrowCallbacks}
          setCallbacks={setNextArrowCallbacks}
        />
      }

      {/* If any animation is playing, the toolbox is disabled */}
      {!toolboxDisabled && !animations.some((elem) => elem) &&
        <ToolBox
          disabledTools={disabledTools}
          highlightedTool={highlightedTool}
          highlightOpenButton={highlightToolboxButton}
          behaviorHandler={stateMediator}
          openState={{value: toolboxOpen, set: setToolboxOpen}}
          toggleSideEffect={() => {toolboxToggleSideEffect()}}
        />
      }
    </>
  )
}