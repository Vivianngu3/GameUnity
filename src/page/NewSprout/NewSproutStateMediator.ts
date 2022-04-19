import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'
import {NewSproutState} from './NewSprout'

export default class NewSproutStateMediator extends GameStateMediator<NewSproutState> implements ToolBehaviorHandler {
  stopUpdates(): void {
    this.state = null
  }

  cut(): void { }

  fertilizer(): void {
    if (this.isCompleted('improved')) {
      // Show definition
    } else {
      this.notifyUserOnce("We aren't ready for that yet!")
    }
  }

  improveSoil(): void {
    if (!this.isCompleted('improved')) {
      if (this.isCompleted('protected')) {
        this.addCheckedItem('improved')
      } else {
        this.notifyUserOnce("We aren't ready for that yet!")
      }
    }
  }

  pesticide(): void {
    if (this.isCompleted('improved')) {
      // Show definition
    } else {
      this.notifyUserOnce("We aren't ready for that yet!")
    }
  }

  postFence(): void {
    if (!this.isCompleted('protected')) {
      this.state?.plotFence.set(true)
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
}