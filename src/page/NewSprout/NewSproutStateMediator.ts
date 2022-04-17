import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'
import {NewSproutState} from './NewSprout'
import {Progress} from '../../component/container/Plot/Plot'

export default class NewSproutStateMediator extends GameStateMediator<NewSproutState> implements ToolBehaviorHandler {
  progressOrder: Progress[] = []

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
    // this.addCheckedItem('protected')
  }

  sowSeeds(): void {
  }

  water(): void {
  }
}