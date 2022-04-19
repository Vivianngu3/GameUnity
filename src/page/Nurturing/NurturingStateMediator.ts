import {NurturingState} from './Nurturing'
import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import GameStateMediator from '../../utils/GameStateMediator'

export default class NurturingStateMediator extends GameStateMediator<NurturingState> implements ToolBehaviorHandler {
  // We need to stop updates when Nurturing is unmounted to avoid updating the state of an unmounted component
  stopUpdates() {
    this.state = null;
    console.log("Updates from NurturingStateMediator stopped")
    console.log(this.state)
  }

  cut() {
    this.notifyUserOnce("Not ready to use that yet")
  }

  dig() {
    this.state?.timmyText.set('')
    // TODO: Shovel animation
    this.setPlotCompleted('dug')
    this.addCheckedItem('dug')
  }

  sowSeeds() {
    if (this.isCompleted('dug')) {
      this.setPlotCompleted('seeds-sown')
      this.state?.timmyText.set('Click the hole to cover your seeds.')
      this.state?.setToolboxOpen(false)
    } else {
      this.notifyUserOnce("You need to dig a hole first!")
    }
  }

  coverSeeds() {
    if (this.isCompleted('seeds-sown')) {
      if (!this.isCompleted('planted')) {
        this.state?.timmyText.set('Good job! Now open your tool box and try to water your seed.')
      }
      this.setPlotCompleted('planted')
      this.addCheckedItem('planted')
    }
  }

  water() {
    if (this.isCompleted('planted')) {
      this.state?.timmyText.set('')
      // TODO: Watering animation
      this.setPlotCompleted('watered')
      this.addCheckedItem('watered')

      this.state?.timmyText.set('Great work!')
      setTimeout(() => {
        this.state?.setToolboxOpen(false)
        this.state?.setShowNextArrow(true)
      }, 1000)
    } else if (this.isCompleted('dug')) {
      this.notifyUserOnce("You need to finish planting your seed first!")
    } else {
      this.notifyUserOnce("You need to plant your seed first!")
    }
  }

  postFence() {
    this.notifyUserOnce("Not ready to use that yet")
  }

  improveSoil() {
    this.notifyUserOnce("Not ready to use that yet")
  }

  fertilizer() {
    this.notifyUserOnce("Not ready to use that yet")
  }

  pesticide() {
    this.notifyUserOnce("Not ready to use that yet")
  }
}