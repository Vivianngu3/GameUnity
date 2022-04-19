import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'
import {NewSproutState} from './NewSprout'

export default class NewSproutStateMediator extends GameStateMediator<NewSproutState> implements ToolBehaviorHandler {
  stopUpdates(): void {
    this.state = null
  }

  cut(): void {
  }

  dig(): void {
  }

  fertilizer(): void {
  }

  improveSoil(): void {
  }

  pesticide(): void {
  }

  postFence(): void {
    this.state?.plotFence.set(true)
    this.addCheckedItem('protected')
    this.state?.timmyText.set('Awesome! Open up your tool box to improve area your plant is growing in.')
  }

  sowSeeds(): void {
  }

  water(): void {
  }
}