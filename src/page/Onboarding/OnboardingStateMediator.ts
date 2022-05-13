import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import {OnboardingState} from './Onboarding'
import {WATER} from '../../theme/animation-durations'

export default class OnboardingStateMediator implements ToolBehaviorHandler {
  state: OnboardingState | null
  constructor(state: OnboardingState) {
    this.state = state
  }

  water(): void {
    this.state?.showToolbox.set(false)
    this.state?.showWaterAnimation.set(true)
    this.state?.setTimmyText('')
    setTimeout(() => {
      this.state?.showWaterAnimation.set(false)
      this.state?.setShowNextArrow(true)
      this.state?.setTimmyText("Good job! That's all you need to know to play.")
    }, WATER * 1000)
  }

  stopUpdates() {
    this.state = null
  }

  cut(): void { }
  dig(): void { }
  fertilizer(): void { }
  improveSoil(): void { }
  pesticide(): void { }
  postFence(): void { }
  sowSeeds(): void { }
}