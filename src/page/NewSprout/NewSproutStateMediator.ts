import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'
import {NewSproutState} from './NewSprout'
import {MySet as Set} from '../../utils/Set'

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
        this.state?.setShowNextArrow(true)
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
          this.state?.setShowNextArrow(true)
        }, 1000)
      } else {
        this.notifyUserOnce("We aren't ready for that yet!")
      }
    }
  }

  pesticide(): void {
    if (this.isCompleted('improved')) {
      this.unorderedToolsLearned.add(UnorderedProgress.PESTICIDE_LEARNED)
      // Show definition
      this.moveOnIfToolsLearned()
    } else {
      this.notifyUserOnce("We aren't ready for that yet!")
    }
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