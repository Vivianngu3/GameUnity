import React, {Dispatch, SetStateAction} from 'react'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import {GamePageState, State} from '../../utils/GameStateMediator'
import Plot, {Progress as PlotProgress} from '../../component/container/Plot/Plot'
import CheckList, {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'
import Timmy from '../../component/static/Timmy/Timmy'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import ToolBox from '../../component/container/ToolBox/ToolBox'
import {NavigateFunction, useNavigate} from 'react-router-dom'
import NewSproutStateMediator, {UnorderedProgress} from './NewSproutStateMediator'
import {MyArray} from '../../utils/MyArray'
import Tool from '../../component/modal/Tool/Tool'
import Definition from '../../component/modal/Definition/Definition'
import pesticide from '../../res/images/pesticide.svg'
import fertilizer from '../../res/images/fertilizer.svg'
import WormsAnimation from '../../component/animated/WormsAnimation/WormsAnimation'
import ScissorsAnimation from '../../component/animated/ScissorsAnimation/ScissorsAnimation'
import {ToolName} from '../../component/container/ToolBox/Tool/Tool'
import DirectedDialog, {Side} from '../../component/static/DirectedDialog/DirectedDialog'
import DefinableWord from '../../component/animated/DefinableWord/DefinableWord'

interface PlotDialog {
  closenessCoordinates?: {x:number, y:number}
  side?: Side
  text: string
}

export interface NewSproutState extends GamePageState {
  soilImproved: State<boolean>
  
  setPlotDialog: Dispatch<SetStateAction<any>>
  nextArrowCallbacks: State<(() => void)[]>
  unorderedToolsLearned: State<MyArray<UnorderedProgress>>
  navigate: NavigateFunction

  showWormsAnimation: State<boolean>
  showScissorsAnimation: State<boolean>

  setShowPesticideTool: Dispatch<SetStateAction<boolean>>
  setShowFertilizerTool: Dispatch<SetStateAction<boolean>>

  setShowOrganismDefinition: Dispatch<SetStateAction<boolean>>
  setShowEnvironmentDefinition: Dispatch<SetStateAction<boolean>>
  setShowChemicalDefinition: Dispatch<SetStateAction<boolean>>
  setShowPollinateDefinition: Dispatch<SetStateAction<boolean>>
}

export default function NewSprout() {
  const [timmyContents, setTimmyContents] = React.useState<JSX.Element | null>(<>Oh look! Some new friends have joined us.</>)
  const [plotDialog, setPlotDialog] = React.useState<PlotDialog>({text: ''})
  const [toolboxOpen, setToolboxOpen] = React.useState(false)
  const [toolboxDisabled, setToolboxDisabled] = React.useState(true)
  const [showWormsAnimation, setShowWormsAnimation] = React.useState(false)
  const [showScissorsAnimation, setShowScissorsAnimation] = React.useState(false)

  const animations = [showWormsAnimation, showScissorsAnimation]
  const animationInProgress = animations.some((elem) => elem)

  const [showPesticideTool, setShowPesticideTool] = React.useState(false)
  const [showFertilizerTool, setShowFertilizerTool] = React.useState(false)

  const [showOrganismDefinition, setShowOrganismDefinition] = React.useState(false)
  const [showEnvironmentDefinition, setShowEnvironmentDefinition] = React.useState(false)
  const [showChemicalDefinition, setShowChemicalDefinition] = React.useState(false)
  const [showPollinateDefinition, setShowPollinateDefinition] = React.useState(false)

  const modals = [showPesticideTool, showFertilizerTool, showOrganismDefinition, showEnvironmentDefinition, showChemicalDefinition, showPollinateDefinition]
  const modalOpen = modals.some((elem) => elem)

  const [soilImproved, setSoilImproved] = React.useState(false)

  const [toolboxToggleSideEffect, setToolboxToggleSideEffect] =
    React.useState<() => void>(() => () => {})

  const navigate = useNavigate()

  const initialNextArrowCallbacks = [
    () => {
      setTimmyContents(<>With this many new faces, it might be a good idea to protect your plant.</>)
    },
    () => {
      setTimmyContents(<>It seems like the bunny looks hungry.</>)
    },
    () => {
      setTimmyContents(<>We need to protect your plant so the bunny can’t eat it!.</>)
    },
    () => {
      setTimmyContents(<>Look in your tool box and pick the tool that would help protect your plant.</>)
      setToolboxDisabled(false)
      setNextArrowCallbacks([])
    }
  ]
  const [nextArrowCallbacks, setNextArrowCallbacks] = React.useState(initialNextArrowCallbacks)

  const [plotProgress, setPlotProgress] = React.useState<PlotProgress>('grown')
  const [checkedItems, setCheckedItems] = React.useState<ChecklistProps>({
    dug: true,
    planted: true,
    watered: true,
  })
  const [unorderedToolsLearned, setUnorderedToolsLearned] = React.useState<MyArray<UnorderedProgress>>(new MyArray())
  const [disabledTools, setDisabledTools] = React.useState<ToolName[]>(['Water', 'Shovel', 'Seeds'])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {return () => {stateMediator.stopUpdates()}}, [])

  const stateMediator = new NewSproutStateMediator({
    plotProgress: {'value': plotProgress, 'set': setPlotProgress},
    soilImproved: {'value': soilImproved, 'set': setSoilImproved},
    checkedItems: {'value': checkedItems, 'set': setCheckedItems},
    disabledTools: {'value': disabledTools, 'set': setDisabledTools},
    timmyContents: {'value': timmyContents, 'set': setTimmyContents},
    setToolboxOpen: setToolboxOpen,
    setToolboxDisabled: setToolboxDisabled,
    setToolboxToggleSideEffect: setToolboxToggleSideEffect,
    setPlotDialog: setPlotDialog,
    nextArrowCallbacks: {'value': nextArrowCallbacks, 'set': setNextArrowCallbacks},
    unorderedToolsLearned: {'value': unorderedToolsLearned, 'set': setUnorderedToolsLearned},
    navigate: navigate,

    showWormsAnimation: {'value': showWormsAnimation, 'set': setShowWormsAnimation},
    showScissorsAnimation: {'value': showScissorsAnimation, 'set': setShowScissorsAnimation},

    setShowPesticideTool: setShowPesticideTool,
    setShowFertilizerTool: setShowFertilizerTool,

    setShowOrganismDefinition: setShowOrganismDefinition,
    setShowEnvironmentDefinition: setShowEnvironmentDefinition,
    setShowChemicalDefinition: setShowChemicalDefinition,
    setShowPollinateDefinition: setShowPollinateDefinition,
  })

  let currentAnimation: JSX.Element
  if (showScissorsAnimation) {
    currentAnimation = <ScissorsAnimation />
  } else if (showWormsAnimation) {
    currentAnimation = <WormsAnimation />
  } else {
    currentAnimation = <></>
  }

  let plot = (
    <Plot
      progress={plotProgress}
      removeFence={() => { stateMediator.removeFence() }}
      animation={currentAnimation}
    />
  )

  return (
    <>
      <GameBackground rabbitPosition={1} beePosition={1} />

      {plotDialog.text ? (
        <DirectedDialog
          side={plotDialog.side}
          closenessCoordinates={plotDialog.closenessCoordinates}
          anchor={plot}
        >{ plotDialog.text }</DirectedDialog>
      ) : plot
      }

      <CheckList
        {...checkedItems}
      />

      {/* When timmyContents === null, it is falsey, and this <Timmy /> is not displayed */}
      {!toolboxOpen && !animationInProgress && !modalOpen && timmyContents &&
        <Timmy>{timmyContents}</Timmy>
      }

      {nextArrowCallbacks.length > 0 &&
        <NextArrow
          callbacks={nextArrowCallbacks}
          setCallbacks={setNextArrowCallbacks}
        />
      }

      {/* If any animation is playing, the toolbox is disabled */}
      {!toolboxDisabled && !animations.some((elem) => elem) &&
        <ToolBox
          disabledTools={disabledTools}
          behaviorHandler={stateMediator}
          openState={{value: toolboxOpen, set: setToolboxOpen}}
          toggleSideEffect={() => {toolboxToggleSideEffect()}}
        />
      }

      {showFertilizerTool &&
        <Tool
          hide={() => setShowFertilizerTool(false)}
          definition={'Used to speed up the growth of your plant'}
          img={fertilizer}
          pronunciation={'fur • till • eye • zur'}
          partOfSpeech={'Noun'}
          toolName={'Fertilizer'}
        />
      }

      {showPesticideTool &&
        <Tool
          hide={() => setShowPesticideTool(false)}
          definition={<>
            Used to keep <DefinableWord
              onClick={() => {
                setShowPesticideTool(false)
                setShowOrganismDefinition(true)
              }}
            >organisms</DefinableWord> from harming your plant
          </>}
          img={pesticide}
          pronunciation={'peh • stuh • side'}
          partOfSpeech={'Noun'}
          toolName={'Pesticide'}
        />
      }

      {showOrganismDefinition &&
        <Definition
          hide={() => {
            setShowOrganismDefinition(false)
            setShowPesticideTool(true)
          }}
          pronunciation={'or • guh • niz •um'}
          word={'Organism'}
          partOfSpeech={'Noun'}
          definition={'A single living thing'}
        />
      }

      {showEnvironmentDefinition &&
        <Definition
          hide={() => setShowEnvironmentDefinition(false)}
          pronunciation={'en • vy • run • ment'}
          word={'Environment'}
          partOfSpeech={'Noun'}
          definition={'Everything that is around us'}
        />
      }

      {showChemicalDefinition &&
        <Definition
          hide={() => setShowChemicalDefinition(false)}
          pronunciation={'kehm • ih • cull'}
          word={'Chemical'}
          partOfSpeech={'Noun'}
          definition={'Something that is made up of two or more things'}
        />
      }

      {showPollinateDefinition &&
        <Definition
          hide={() => setShowPollinateDefinition(false)}
          pronunciation={'paw • lihn • ate'}
          word={'Pollinate'}
          partOfSpeech={'Verb'}
          definition={'Moving a plant\'s pollen to another plant so that new seeds can be made'}
        />
      }
    </>
  )
}
