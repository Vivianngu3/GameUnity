import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'
import {NewSproutState} from './NewSprout'
import {COLLECT_PLANT, GAME} from '../../res/constants/url-endpoints'
import {SCISSORS, WORMS} from '../../theme/animation-durations'
import DefinableWord from '../../component/animated/DefinableWord/DefinableWord'

export enum UnorderedProgress {
  SCISSORS_LEARNED,
  PESTICIDE_LEARNED,
  FERTILIZER_LEARNED,
}

export default class NewSproutStateMediator extends GameStateMediator<NewSproutState> implements ToolBehaviorHandler {

  fertilizer(): void {
    if (this.isCompleted('protected')) {
      this.learnFertilizer()
    } else {
      this.toolTooEarly()
    }
  }

  private learnFertilizer() {
    this.state?.setShowFertilizerTool(true)
    this.addLearnedTool(UnorderedProgress.FERTILIZER_LEARNED)
    this.addDisabledTool('Fertilizer')

    this.state?.timmyContents.set(<>Fertilizers are not always a good way to help your plant grow.</>)
    this.state?.setToolboxOpen(false)
    let callbacks = [
      () => {
        this.state?.timmyContents.set(<>Some of the bad chemicals in fertilizer can sink underground and get into the
          water you drink!</>)
      },
      () => {
        this.state?.timmyContents.set(<>We don’t want to drink fertilizer!</>)
      },
    ]
    if (this.state?.soilImproved.value) {
      callbacks.push(() => this.moveOnIfAllToolsLearned())
    } else {
      callbacks.push(() => this.state?.timmyContents.set(<>You should find a different tool to improve the soil.</>))
    }
    this.setNextArrowCallbacks(callbacks, true)
  }

  improveSoil(): void {
    if (this.isCompleted('protected')) {
      this.state?.setToolboxDisabled(true)
      this.state?.showWormsAnimation.set(true)
      setTimeout(() => {
        this.state?.showWormsAnimation.set(false)
        // TODO: Use checked items to track improved soil instead of dedicated state
        this.state?.soilImproved.set(true)
        this.addCheckedItem('improved')
        this.addDisabledTool('Worms')

        this.state?.timmyContents.set(<>Woohoo!</>)
        this.state?.setToolboxOpen(false)
        this.setNextArrowCallbacks([
          () => {
            this.state?.timmyContents.set(<>Now try learning about the other tools while your plant grows!</>)
          },
        ], true)
      }, WORMS * 1000)
    } else {
      this.toolTooEarly()
    }
  }

  pesticide(): void {
    this.state?.setShowPesticideTool(true)
    this.state?.timmyContents.set(<>Even if pesticides could help keep away bugs and insects...</>)
    this.state?.setToolboxOpen(false)
    this.addDisabledTool('Pesticide')
    let callbacks = [
      () => {
        this.state?.timmyContents.set(<>
          They can also harm people, plants, animals, and the <DefinableWord
          onClick={() => this.state?.setShowEnvironmentDefinition(true)}
        >environment</DefinableWord>.
        </>)
      },
      () => {
        this.state?.timmyContents.set(<>
          That’s because pesticides are made up of bad <DefinableWord
          onClick={() => this.state?.setShowChemicalDefinition(true)}
        >chemicals</DefinableWord>.
        </>)
      },
      () => {
        this.state?.timmyContents.set(<>
          If these chemicals hurt the bees that <DefinableWord
          onClick={() => this.state?.setShowPollinateDefinition(true)}
        >pollinate</DefinableWord>
          the plants, then your seed won't grow!
        </>)
        this.addLearnedTool(UnorderedProgress.PESTICIDE_LEARNED)
      },
    ]
    if (!this.isCompleted('protected')) {
      callbacks.push(
        () => {
          this.state?.timmyContents.set(<>Open up your toolbox to find something else to protect your plant.</>)
        },
      )
    } else {
      callbacks.push(
        () => {
          this.state?.timmyContents.set(<>That's why it's better find a different way to protect your plant.</>)
        },
      )
      if (!this.state?.soilImproved.value) {
        callbacks.push(() => this.moveOnIfAllToolsLearned())
      }
    }
    this.setNextArrowCallbacks(callbacks, true)
  }

  postFence(): void {
    if (!this.isCompleted('protected')) {
      this.setPlotCompleted('protected')
      this.addDisabledTool('Fence')
      this.addCheckedItem('protected')

      console.log("before set timmy contents")
      this.state?.timmyContents.set(<>Awesome! Open up your tool box to improve the area your plant is growing in.</>)
      console.log("after set timmy contents")
      setTimeout(() => {
        console.log("before inside callback")
        this.state?.setToolboxOpen(false)
        console.log("after inside callback")
      }, 1000)
    }
  }

  removeFence() {
    this.setPlotCompleted('tomato')
    this.state?.setToolboxDisabled(false)
    this.state?.timmyContents.set(null)
    this.state?.setPlotDialog({
      side: 'left',
      closenessCoordinates: {x: 50, y: -150},
      text: "There is one more tool left to help you take off the tomatoes!"
    })
  }

  cut(): void {
    if (this.state?.soilImproved.value) {
      if (this.isCompleted('tomato')) {
        this.proceedWithCut()
      } else {
        this.learnScissors()
      }
    } else {
      this.toolTooEarly()
    }
  }

  private proceedWithCut() {
    this.state?.setToolboxOpen(false)
    this.addDisabledTool('Scissors')
    this.state?.setPlotDialog({text: ''})
    this.state?.showScissorsAnimation.set(true)
    this.state?.timmyContents.set(null)
    setTimeout(() => {
      this.state?.showScissorsAnimation.set(false)
      this.state?.navigate('/' + GAME + COLLECT_PLANT)
    }, SCISSORS * 1000)
  }

  private learnScissors() {
    this.addLearnedTool(UnorderedProgress.SCISSORS_LEARNED)
    this.state?.timmyContents.set(<>Scissors can be used to keep plants healthy.</>)
    this.state?.setToolboxOpen(false)
    this.setNextArrowCallbacks([
      () => {
        this.state?.timmyContents.set(<>Cutting off dead parts of a plant can help the rest of the plant grow.</>)
      },
      () => {
        this.state?.timmyContents.set(<>Scissors are also good for collecting fruits and veggies from a plant that has
          finished growing.</>)
      },
      () => {
        this.moveOnIfAllToolsLearned()
      },
    ], true)
  }

  dig(): void { }
  sowSeeds(): void { }
  water(): void { }

  private setNextArrowCallbacks(callbacks: (() => void)[], disableToolbox?: boolean) {
    let end = callbacks.length - 1
    let lastCallback = callbacks[end]
    if (disableToolbox) this.state?.setToolboxDisabled(true)
    callbacks[end] = () => {
      // It is important that the last callback is called after we re-enable the toolbox, because the last callback
      // wouldn't be able to disable the toolbox otherwise
      if (disableToolbox) this.state?.setToolboxDisabled(false)
      lastCallback()
      this.state?.nextArrowCallbacks.set([])
    }
    this.state?.nextArrowCallbacks.set(callbacks)
  }

  addLearnedTool(tool: UnorderedProgress) {
    if (this.state) {
      let alreadyLearned = this.state.unorderedToolsLearned.value
      alreadyLearned.push(tool)
      this.state.unorderedToolsLearned.set(alreadyLearned)
    }
  }

  private moveOnIfAllToolsLearned() {
    // TODO: get UnorderedProgress values dynamically
    // let unorderedTools: UnorderedProgress[] = Object.keys(UnorderedProgress).map((i) => UnorderedProgress[i])

    // let unorderedTools = Object.values(UnorderedProgress)
    // // enums get converted to the format ['key1', 'key2', 'value1', 'value2'], so we want only the half with the values in it
    // unorderedTools = unorderedTools.slice(unorderedTools.length / 2)

    let unorderedTools: UnorderedProgress[] = [
      UnorderedProgress.PESTICIDE_LEARNED,
      UnorderedProgress.SCISSORS_LEARNED,
      UnorderedProgress.FERTILIZER_LEARNED,
    ]
    console.log("UnorderedToolsLearned:")
    console.log(this.state?.unorderedToolsLearned.value)
    if (this.state?.unorderedToolsLearned.value.hasAll(unorderedTools)) {
      this.state?.setToolboxDisabled(true)
      // TODO: Change to directed dialog
      this.state?.timmyContents.set(<>
        Your plant has finished growing!<br/>
        It's time to take off the fence. Click it!
      </>)
      this.state?.setToolboxOpen(false)
      this.setPlotCompleted('protected-tomato')
      this.addCheckedItem('learned')
    } else {
      this.state?.timmyContents.set(<>Keep learning tools by clicking on them!</>)
    }
  }
}