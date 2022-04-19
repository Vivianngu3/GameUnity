import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'
import {NewSproutState} from './NewSprout'
import {GAME} from '../../res/constants/url-endpoints'

export enum UnorderedProgress {
  SCISSORS_LEARNED,
  PESTICIDE_LEARNED,
  FERTILIZER_LEARNED,
}

export default class NewSproutStateMediator extends GameStateMediator<NewSproutState> implements ToolBehaviorHandler {
  soilImproved = false

  stopUpdates(): void {
    this.state = null
  }

  cut(): void {
    if (!this.soilImproved) {
      if (this.isCompleted('tomato')) {
        console.log('Tomato completed')
        // Show big tomatoes
        this.state?.timmyText.set("Great job! You grew your own tomatoes.")
        this.state?.setToolboxOpen(false)
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
        console.log('Tomato not completed')
        this.addLearnedTool(UnorderedProgress.SCISSORS_LEARNED)
        // Show definition
        this.moveOnIfAllToolsLearned()
      }
    }
  }

  fertilizer(): void {
    if (this.isCompleted('protected')) {
      this.addLearnedTool(UnorderedProgress.FERTILIZER_LEARNED)
      // Show definition
      this.moveOnIfAllToolsLearned()
    } else {
      this.notifyUserOnce("We aren't ready for that yet!")
    }
  }

  improveSoil(): void {
    if (!this.soilImproved) {
      if (this.isCompleted('protected')) {
        this.soilImproved = true
        this.addCheckedItem('improved')

        this.state?.timmyText.set('Woohoo!')
        setTimeout(() => {
          this.state?.setToolboxOpen(false)
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
    this.addLearnedTool(UnorderedProgress.PESTICIDE_LEARNED)
    this.state?.timmyText.set("Pesticides are used to keep bugs from harming your plant")
    this.state?.setToolboxOpen(false)
    let callbacks = [
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
    ]
    if (!this.isCompleted('protected')) {
      callbacks.push(
        () => {
          this.state?.timmyText.set("Open up your toolbox to find something else to protect your plant.")
        },
      )
    } else {
      callbacks.push(
        () => {
          this.state?.timmyText.set("That's why it's better find a different way to protect your plant.")
        },
      )
    }
    this.setNextArrowCallbacks(callbacks)
    this.moveOnIfAllToolsLearned()
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
      this.state?.timmyText.set(
        'Your plant has finished growing!\n' +
        'It’s time to take off the fence. Click it!'
      )
      this.state?.setToolboxOpen(false)
      this.setPlotCompleted('protected-tomato')
    }
  }
}