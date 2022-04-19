import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'
import {NewSproutState} from './NewSprout'
import {MySet as Set} from '../../utils/Set'
import {GAME} from '../../res/constants/url-endpoints'

enum UnorderedProgress {
  SCISSORS_LEARNED,
  PESTICIDE_LEARNED,
  FERTILIZER_LEARNED,
}

export default class NewSproutStateMediator extends GameStateMediator<NewSproutState> implements ToolBehaviorHandler {
  unorderedToolsLearned: Set<UnorderedProgress>

  constructor(state: NewSproutState) {
    super(state)
    this.unorderedToolsLearned = new Set()
  }


  stopUpdates(): void {
    this.state = null
  }

  cut(): void {
    if (this.isCompleted('improved')) {
      if (this.isCompleted('tomato')) {
        // Show big tomatoes
        this.state?.timmyText.set("Great job! You grew some tomatoes.")
        // this.state?.setShowNextArrow(true)
        this.setNextArrowCallbacks([
          () => {
              this.state?.timmyText.set('With that, our journey comes to an end.')
            },
            () => {
              this.state?.timmyText.set("I'll see you next time!")
            },
            () => {
              this.state?.navigate('/' + GAME)
            },
        ])
      } else {
        this.unorderedToolsLearned.add(UnorderedProgress.SCISSORS_LEARNED)
        // Show definition
        this.moveOnIfToolsLearned()
      }
    }
  }

  fertilizer(): void {
    if (this.isCompleted('protected')) {
      this.unorderedToolsLearned.add(UnorderedProgress.FERTILIZER_LEARNED)
      // Show definition
      this.moveOnIfToolsLearned()
    } else {
      this.notifyUserOnce("We aren't ready for that yet!")
    }
  }

  improveSoil(): void {
    if (!this.isCompleted('improved')) {
      if (this.isCompleted('protected')) {
        this.addCheckedItem('improved')

        this.state?.timmyText.set('Woohoo!')
        setTimeout(() => {
          this.state?.setToolboxOpen(false)
          // this.state?.setShowNextArrow(true)
          this.setNextArrowCallbacks([
              () => {
                this.state?.timmyText.set('Now try learning about the other tools while your plant grows!')
              },
              () => {
                this.state?.timmyText.set("Click on all the tools you haven't learned yet!")
              },
          ])
        }, 1000)
      } else {
        this.notifyUserOnce("We aren't ready for that yet!")
      }
    }
  }

  pesticide(): void {
    this.unorderedToolsLearned.add(UnorderedProgress.PESTICIDE_LEARNED)
    this.state?.timmyText.set("Pesticides are used to keep bugs from harming your plant")
    this.state?.setToolboxOpen(false)
    this.setNextArrowCallbacks([
      () => {
        this.state?.timmyText.set("Even if pesticides could help keep away bugs and insects...")
      },
      () => {
        this.state?.timmyText.set("They can also harm people, plants, animals, and the environment.")
      },
      () => {
        this.state?.timmyText.set("That’s because pesticides are made up of chemicals that animals shouldn't eat.")
      },
      () => {
        this.state?.timmyText.set("If these chemicals hurt the bees that pollinate the plants, then your seed won't grow!")
      },
      () => {
        this.state?.timmyText.set("That's why it's better find a different way to protect your plant!")
      },
    ])
    // Show definition
    this.moveOnIfToolsLearned()
  }

  postFence(): void {
    if (!this.isCompleted('protected')) {
      this.setPlotCompleted('protected')
      this.addCheckedItem('protected')

      this.state?.timmyText.set('Awesome! Open up your tool box to improve the area your plant is growing in.')
      setTimeout(() => {
        this.state?.setToolboxOpen(false)
      }, 1000)
    }
  }

  dig(): void {this.disabledTool()}
  sowSeeds(): void {this.disabledTool()}
  water(): void {this.disabledTool()}

  private setNextArrowCallbacks(callbacks: (() => void)[]) {
    let end = callbacks.length - 1
    let lastCallback = callbacks[end]
    callbacks[end] = () => {
      lastCallback()
      this.state?.nextArrowCallbacks.set([])
    }
    this.state?.nextArrowCallbacks.set(callbacks)
  }

  private moveOnIfToolsLearned() {
    // TODO: get UnorderedProgress values dynamically
    // let unorderedTools: UnorderedProgress[] = Object.keys(UnorderedProgress).map((i) => UnorderedProgress[i])

    // let unorderedTools = Object.values(UnorderedProgress)
    // // enums get converted to the format ['key1', 'key2', 'value1', 'value2'], so we want only the half with the values in it
    // unorderedTools = unorderedTools.slice(unorderedTools.length / 2)

    let unorderedTools: UnorderedProgress[] = [0, 1, 2]
    if (this.unorderedToolsLearned.hasAll(unorderedTools)) {
      this.state?.timmyText.set(
        'Your plant has finished growing!\n' +
        'It’s time to take off the fence. Click it!'
      )
      this.setPlotCompleted('protected-tomato')
    }
  }
}