import {NurturingState} from './Nurturing'
import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'
import {SHOVEL as SHOVEL_SECONDS, WATER as WATER_SECONDS} from '../../theme/animation-durations'

export default class NurturingStateMediator extends GameStateMediator<NurturingState> implements ToolBehaviorHandler {
  dig() {
    this.state?.timmyContents.set(null)
    this.state?.showChecklistExplanation.set(false)
    this.addDisabledTool('Shovel')
    this.state?.showShovelAnimation.set(true)
    setTimeout(() => {
      this.state?.showShovelAnimation.set(false)
      this.setPlotCompleted('dug')
      this.addCheckedItem('dug')
    }, SHOVEL_SECONDS * 1000)
  }

  sowSeeds() {
    if (this.isCompleted('dug')) {
      this.setPlotCompleted('seeds-sown')
      this.addDisabledTool('Seeds')
      this.state?.timmyContents.set(null)
      this.state?.setToolboxOpen(false)
      this.state?.setToolboxDisabled(true)
    } else {
      this.notifyUserOnce(<>You need to dig a hole first!</>)
    }
  }

  coverSeeds() {
    if (this.isCompleted('seeds-sown')) {
      if (!this.isCompleted('planted')) {
        this.state?.timmyContents.set(<>Good job! Now open your tool box and try to water your seed.</>)
        this.state?.setToolboxDisabled(false)
      }
      this.setPlotCompleted('planted')
      this.addCheckedItem('planted')
    }
  }

  water() {
    if (this.isCompleted('planted')) {
      this.state?.timmyContents.set(null)
      this.addDisabledTool('Water')
      this.state?.showWaterAnimation.set(true)
      this.state?.setToolboxDisabled(true)
      setTimeout(() => {
        this.state?.showWaterAnimation.set(false)
        this.setPlotCompleted('watered')
        this.addCheckedItem('watered')

        this.state?.timmyContents.set(<>Great work!</>)
        this.state?.setToolboxOpen(false)
        this.state?.setShowNextArrow(true)
      }, WATER_SECONDS * 1000)
    } else if (this.isCompleted('dug')) {
      this.notifyUserOnce(<>You need to finish planting your seed first!</>)
    } else {
      this.notifyUserOnce(<>You need to plant your seed first!</>)
    }
  }

  postFence() { this.toolTooEarly() }
  improveSoil() { this.toolTooEarly() }
  fertilizer() { this.toolTooEarly() }
  pesticide() { this.toolTooEarly() }
  cut() { this.toolTooEarly() }
}