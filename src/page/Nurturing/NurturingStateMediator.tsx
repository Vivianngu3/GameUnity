import {NurturingState} from './Nurturing'
import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'
import {SHOVEL as SHOVEL_SECONDS, WATER as WATER_SECONDS} from '../../theme/animation-durations'

export default class NurturingStateMediator extends GameStateMediator<NurturingState> implements ToolBehaviorHandler {
  cut() {
    this.notifyUserOnce(<>Not ready to use that yet</>)
  }

  dig() {
    if (this.state) {
      console.log('state')
      if (this.state.timmyContents) {
        console.log('contents')
        if (this.state.timmyContents.set !== null) {
          console.log('set')
        } else {
          console.log('null set')
        }
      } else {
        console.log('null contents')
      }
    } else {
      console.log('null state')
    }

    this.state?.timmyContents.set(null)
    this.state?.showChecklistExplanation.set(false)
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
      // TODO: Watering animation
      this.state?.showWaterAnimation.set(true)
      this.state?.setToolboxDisabled(true)
      setTimeout(() => {
        this.state?.showWaterAnimation.set(false)
        this.setPlotCompleted('watered')
        this.addCheckedItem('watered')

        this.state?.timmyContents.set(<>Great work!</>)
        setTimeout(() => {
          this.state?.setToolboxOpen(false)
          this.state?.setShowNextArrow(true)
        }, 1000)
      }, WATER_SECONDS * 1000)
    } else if (this.isCompleted('dug')) {
      this.notifyUserOnce(<>You need to finish planting your seed first!</>)
    } else {
      this.notifyUserOnce(<>You need to plant your seed first!</>)
    }
  }

  postFence() {
    this.notifyUserOnce(<>Not ready to use that yet</>)
  }

  improveSoil() {
    this.notifyUserOnce(<>Not ready to use that yet</>)
  }

  fertilizer() {
    this.notifyUserOnce(<>Not ready to use that yet</>)
  }

  pesticide() {
    this.notifyUserOnce(<>Not ready to use that yet</>)
  }
}