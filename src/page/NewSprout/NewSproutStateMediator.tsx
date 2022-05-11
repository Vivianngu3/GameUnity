import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'
import {NewSproutState} from './NewSprout'
import {GAME, KITCHEN} from '../../res/constants/url-endpoints'
import {SCISSORS, WORMS} from '../../theme/animation-durations'

export enum UnorderedProgress {
  SCISSORS_LEARNED,
  PESTICIDE_LEARNED,
  FERTILIZER_LEARNED,
}

export default class NewSproutStateMediator extends GameStateMediator<NewSproutState> implements ToolBehaviorHandler {
  soilImproved = false

  cut(): void {
    if (!this.soilImproved) {
      if (this.isCompleted('tomato')) {
        console.log('Tomato completed')
        this.state?.setToolboxOpen(false)
        this.state?.showScissorsAnimation.set(true)
        this.state?.timmyContents.set(null)
        setTimeout(() => {
          this.state?.showScissorsAnimation.set(false)
          this.state?.timmyContents.set(<>Great job! You grew your own tomatoes.</>)
          this.setNextArrowCallbacks([
            () => {
              this.state?.timmyContents.set(<>With that, our journey comes to an end.</>)
            },
            () => {
              this.state?.timmyContents.set(<>I'll see you next time!</>)
            },
            () => {
              this.state?.navigate('/' + GAME + KITCHEN)
            },
          ], true)
        }, SCISSORS * 1000)
      } else {
        console.log('Tomato not completed')
        this.addLearnedTool(UnorderedProgress.SCISSORS_LEARNED)

        this.state?.timmyContents.set(<>Scissors can be used to keep plants healthy.</>)
        this.state?.setToolboxOpen(false)
        this.setNextArrowCallbacks([
          () => {
            this.state?.timmyContents.set(<>Cutting off dead parts of a plant can help the rest of the plant grow.</>)
          },
          () => {
            this.state?.timmyContents.set(<>Scissors are also good for collecting fruits and veggies from a plant that has finished growing.</>)
          },
          () => {
            this.moveOnIfAllToolsLearned()
          },
        ], true)
      }
    }
  }

  fertilizer(): void {
    // TODO: Handle if not in tools learning phase
    if (this.isCompleted('protected')) {
      this.addLearnedTool(UnorderedProgress.FERTILIZER_LEARNED)

      this.state?.timmyContents.set(<>Fertilizer is used to make plants grow bigger...</>)
      this.state?.setToolboxOpen(false)
      this.setNextArrowCallbacks([
        () => {
          this.state?.timmyContents.set(<>But fertilizers are not always a good way to help your plant grow.</>)
        },
        () => {
          this.state?.timmyContents.set(<>Some of the bad chemicals in fertilizer can sink underground and get into the water you drink!</>)
        },
        () => {
          this.state?.timmyContents.set(<>We don’t want to drink fertilizer!</>)
        },
        () => {
          this.moveOnIfAllToolsLearned()
        },
      ], true)
    } else {
      this.notifyUserOnce(<>We aren't ready for that yet!</>)
    }
  }

  improveSoil(): void {
    if (!this.soilImproved) {
      if (this.isCompleted('protected')) {
        this.state?.setToolboxDisabled(true)
        this.state?.showWormsAnimation.set(true)
        setTimeout(() => {
          this.state?.showWormsAnimation.set(false)
          this.soilImproved = true
          this.addCheckedItem('improved')

          this.state?.timmyContents.set(<>Woohoo!</>)
          this.state?.setToolboxOpen(false)
          this.setNextArrowCallbacks([
            () => {
              this.state?.timmyContents.set(<>Now try learning about the other tools while your plant grows!</>)
            },
            () => {
              this.state?.timmyContents.set(<>Click on all the tools you haven't learned yet!</>)
            },
          ], true)
        }, WORMS * 1000)
      } else {
        this.notifyUserOnce(<>We aren't ready for that yet!</>)
      }
    }
  }

  pesticide(): void {
    this.addLearnedTool(UnorderedProgress.PESTICIDE_LEARNED)
    this.state?.timmyContents.set(<>Pesticides are used to keep bugs from harming your plant</>)
    this.state?.setToolboxOpen(false)
    let callbacks = [
      () => {
        this.state?.timmyContents.set(<>Even if pesticides could help keep away bugs and insects...</>)
      },
      () => {
        this.state?.timmyContents.set(<>They can also harm people, plants, animals, and the environment.</>)
      },
      () => {
        this.state?.timmyContents.set(<>That’s because pesticides are made up of chemicals that animals shouldn't eat.</>)
      },
      () => {
        this.state?.timmyContents.set(<>If these chemicals hurt the bees that pollinate the plants, then your seed won't grow!</>)
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
        () => {
          this.moveOnIfAllToolsLearned()
        },
      )
    }
    this.setNextArrowCallbacks(callbacks, true)
  }

  postFence(): void {
    if (!this.isCompleted('protected')) {
      this.setPlotCompleted('protected')
      this.addCheckedItem('protected')

      this.state?.timmyContents.set(<>Awesome! Open up your tool box to improve the area your plant is growing in.</>)
      setTimeout(() => {
        this.state?.setToolboxOpen(false)
      }, 1000)
    }
  }

  removeFence() {
    this.setPlotCompleted('tomato')
    this.state?.setToolboxDisabled(false)
    this.state?.timmyContents.set(<>Now use your scissors to collect it.</>)
  }

  dig(): void {this.disabledTool()}
  sowSeeds(): void {this.disabledTool()}
  water(): void {this.disabledTool()}

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
    } else {
      this.state?.timmyContents.set(<>Keep learning tools by clicking on them!</>)
    }
  }
}