import React, {Dispatch, SetStateAction} from 'react'
import Dialog from '../../component/static/Dialog/Dialog'
import Timmy from '../../component/static/Timmy/Timmy'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import {GAME, NURTURING} from '../../res/constants/url-endpoints'
import {useNavigate} from 'react-router-dom'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import ToolBox from '../../component/container/ToolBox/ToolBox'
import {State} from '../../utils/GameStateMediator'
import OnboardingStateMediator from './OnboardingStateMediator'
import WaterAnimation from '../../component/animated/WaterAnimation/WaterAnimation'

export interface OnboardingState {
  showToolbox: State<boolean>
  showWaterAnimation: State<boolean>
  setShowNextArrow: Dispatch<SetStateAction<boolean>>
  setTimmyText: Dispatch<SetStateAction<string>>
}

export default function Onboarding() {

  const [dialogText, setDialogText] = React.useState<string>("Now it's time to grow your seed!")
  const [timmyText, setTimmyText] = React.useState<string>('')
  const [showArrow, setShowArrow] = React.useState(true)
  const [showToolbox, setShowToolbox] = React.useState(false)
  const [toolboxOpen, setToolboxOpen] = React.useState(false)
  const [showWaterAnimation, setShowWaterAnimation] = React.useState(false)
  const [highlightToolboxButton, setHighlightToolboxButton] = React.useState(false)
  const [onOpenToolbox, setOnOpenToolbox] = React.useState<() => void>(() => () => {})

  const navigate = useNavigate()

  let initialNextArrowCallbacks = [
    () => {
      setDialogText("But first, we will show you the new tools you have!")
    },
    () => {
      setDialogText("")
      setTimmyText('This bar on the bottom is your tool box!')
      setShowToolbox(true)
    },
    () => {
      setTimmyText('Click on that button and look inside!')
      setHighlightToolboxButton(true)
      setOnOpenToolbox(() => () => {
        setToolboxOpen(true)
        setHighlightToolboxButton(false)
      })
      setShowArrow(false)
    },
    /* TOOL BOX TUTORIAL HERE */
    () => {
      setTimmyText('Now I will let you begin your journey!')
    },
    () => {
      setTimmyText('Finish the tasks in the "to-do" list!')
    },
    () => {
      navigate('/' + GAME + NURTURING)
    }
  ]
  const [nextArrowCallbacks, setNextArrowCallbacks] = React.useState(initialNextArrowCallbacks)

  let stateMediator = new OnboardingStateMediator({
    showToolbox: {value: showToolbox, set: setShowToolbox},
    showWaterAnimation: {value: showWaterAnimation, set: setShowWaterAnimation},
    setShowNextArrow: setShowArrow,
    setTimmyText: setTimmyText,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {return () => {stateMediator.stopUpdates()}}, [])

  const disabledToolboxOpener = (newState: boolean) => {}

  return (
    <>
      <GameBackground />
      
      {dialogText &&
        <Dialog>{dialogText}</Dialog>
      }
      
      {timmyText && (!toolboxOpen || !showToolbox ) &&
        <Timmy>{timmyText}</Timmy>
      }
      
      {showArrow &&
        <NextArrow
          callbacks={nextArrowCallbacks}
          setCallbacks={setNextArrowCallbacks}
        />
      }

      {showWaterAnimation &&
        <WaterAnimation />
      }

      {showToolbox &&
        <ToolBox
          behaviorHandler={stateMediator}
          openState={{value: toolboxOpen, set: disabledToolboxOpener}}
          toggleSideEffect={() => { onOpenToolbox() }}
          highlightOpenButton={highlightToolboxButton}
          describedTool={{
            name: 'Water',
            descriptionProps: { side: 'right', contents: 'Click on the tool to use it!' },
          }}
          disabledTools={['Seeds', 'Shovel', 'Pesticide', 'Fertilizer', 'Worms', 'Fence', 'Scissors']}
        />
      }
    </>
  )
}