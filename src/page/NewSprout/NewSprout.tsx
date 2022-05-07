import React from 'react'
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


export interface NewSproutState extends GamePageState {
  nextArrowCallbacks: State<(() => void)[]>
  unorderedToolsLearned: State<MyArray<UnorderedProgress>>
  navigate: NavigateFunction
}

export default function NewSprout() {
  const [timmyText, setTimmyText] = React.useState('Oh look! Some new friends have joined us.')
  const [toolboxOpen, setToolboxOpen] = React.useState(false)
  const [toolboxDisabled, setToolboxDisabled] = React.useState(true)
  const [nextArrowVariation, setNextArrowVariation] = React.useState(false)
  const [checkListVariation, setCheckListVariation] = React.useState(false)
  const [showWormsAnimation, setShowWormsAnimation] = React.useState(false)
  const [showScissorsAnimation, setShowScissorsAnimation] = React.useState(false)

  const [showPesticideTool, setShowPesticideTool] = React.useState(false)
  const [showFertilizerTool, setShowFertilizerTool] = React.useState(false)

  const [showOrganismDefinition, setShowOrganismDefinition] = React.useState(false)
  const [showEnvironmentDefinition, setShowEnvironmentDefinition] = React.useState(false)
  const [showChemicalDefinition, setShowChemicalDefinition] = React.useState(false)
  const [showPollinateDefinition, setShowPollinateDefinition] = React.useState(false)



  const [toolboxToggleSideEffect, setToolboxToggleSideEffect] =
    React.useState<() => void>(() => () => {})

  const navigate = useNavigate()

  const initialNextArrowCallbacks = [
    () => {
      setTimmyText('With this many new faces, it might be a good idea to protect your plant.')
    },
    () => {
      setTimmyText('It seems like the bunny looks hungry.')
    },
    () => {
      setTimmyText('We need to protect your plant so the bunny can’t eat it!.')
    },
    () => {
      setTimmyText('Look in your tool box and pick the tool that would help protect your plant.')
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

  const stateMediator = new NewSproutStateMediator({
    plotProgress: {'value': plotProgress, 'set': setPlotProgress},
    checkedItems: {'value': checkedItems, 'set': setCheckedItems},
    timmyText: {'value': timmyText, 'set': setTimmyText},
    setToolboxOpen: setToolboxOpen,
    setToolboxDisabled: setToolboxDisabled,
    setToolboxToggleSideEffect: setToolboxToggleSideEffect,
    nextArrowCallbacks: {'value': nextArrowCallbacks, 'set': setNextArrowCallbacks},
    unorderedToolsLearned: {'value': unorderedToolsLearned, 'set': setUnorderedToolsLearned},
    navigate: navigate
  })

  return (
    <>
      {showPesticideTool &&
        <Tool
          hide={() => {
            setShowPesticideTool(false)
          }
          }
          definition={'Used to keep away organisms from harming your plant'}
          img={pesticide}
          pronunciation={'peh • stuh • side'}
          partOfSpeech={'Noun'}
          toolName={'Pesticide'}
        />
      }
      {showFertilizerTool &&
        <Tool
          hide={() => {
            setShowFertilizerTool(false)
          }
          }
          definition={'Used to speed up the growth of your plant'}
          img={fertilizer}
          pronunciation={'fur • till • eye • zur'}
          partOfSpeech={'Noun'}
          toolName={'Fertilizer'}
        />
      }
      {showOrganismDefinition &&
        <Definition
          hide={() => {
            setShowOrganismDefinition(false)
          }
          }
          pronunciation={'or • guh • niz •um'}
          word={'Organism'}
          partOfSpeech={'Noun'}
          definition={'A single living thing'}
        />
      }
      {showEnvironmentDefinition &&
        <Definition
          hide={() => {
            setShowEnvironmentDefinition(false)
          }
          }
          pronunciation={'en • vy • urn • ment'}
          word={'Environment'}
          partOfSpeech={'Noun'}
          definition={'Everything that is around us'}
        />
      }
      {showChemicalDefinition &&
        <Definition
          hide={() => {
            setShowChemicalDefinition(false)
          }
          }
          pronunciation={'kehm • ih • cull'}
          word={'Chemical'}
          partOfSpeech={'Noun'}
          definition={'Something that is made up of two or more things'}
        />
      }
      {showPollinateDefinition &&
        <Definition
          hide={() => {
            setShowPollinateDefinition(false)
          }
          }
          pronunciation={'paw • lihn • ate'}
          word={'Pollinate'}
          partOfSpeech={'Verb'}
          definition={'Moving a plant\'s powder to another plant so that new seeds can be made'}
        />
      }
      <GameBackground rabbitPosition={1} beePosition={1} />
      <Plot
        progress={plotProgress}
        removeFence={() => { stateMediator.removeFence() }}
      />

      <CheckList
        {...checkedItems}
        modalVariation={checkListVariation}
      />

      {/* When timmyText === '', it is falsey, and this <Timmy /> is not displayed */}
      {!toolboxOpen && timmyText &&
        <Timmy>{timmyText}</Timmy>
      }

      {nextArrowCallbacks.length > 0 &&
        <NextArrow
          callbacks={nextArrowCallbacks}
          setCallbacks={setNextArrowCallbacks}
          modalVariation={nextArrowVariation}
        />
      }

      {!toolboxDisabled &&
        <ToolBox
          disabledTools={['Water', 'Shovel', 'Seeds']}
          behaviorHandler={stateMediator}
          openState={{value: toolboxOpen, set: setToolboxOpen}}
          toggleSideEffect={() => {toolboxToggleSideEffect()}}
        />
      }
    </>
  )
}
