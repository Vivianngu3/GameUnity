import {NurturingState} from './Nurturing'
import {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'
import {Progress as PlotProgress} from '../../component/container/Plot/Plot'
import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'
import StateMediator from '../../utils/StateMediator'

export default class NurturingStateMediator implements ToolBehaviorHandler, StateMediator<NurturingState> {
  state: NurturingState | null;
  progressOrder: PlotProgress[] = ['start', 'dug', 'seeds-sown', 'planted', 'watered']
  notify: (message: string) => void
  constructor(state: NurturingState, notify: (message: string) => void) {
    this.state = state
    this.notify = notify
  }

  // We need to stop updates when Nurturing is unmounted to avoid updating the state of an unmounted component
  stopUpdates() {
    this.state = null;
    console.log("Updates from NurturingStateMediator stopped")
    console.log(this.state)
  }

  cut() {
    this.notify("Not ready to use that yet")
  }

  dig() {
    // TODO: remove debugging logs
    console.log("logging")
    if (this === undefined) console.log("This is undefined")
    if (this !== undefined) console.log("This isn't undefined")
    if (this.state) {
      console.log("State from dig!")
      if (this.state.plotProgress) console.log("plotProgress from dig!")
    }
    this.state?.setTimmyText('')
    // TODO: Shovel animation
    this.setPlotCompleted('dug')
    this.addCheckedItem('dug')
  }

  sowSeeds() {
    if (this.isCompleted('dug')) {
      this.setPlotCompleted('seeds-sown')
      this.state?.setTimmyText('Click the hole to cover your seeds.')
      this.state?.setToolboxOpen(false)
      this.setOneTimeToolboxSideEffect(() => {this.state?.setTimmyText('')})
    } else {
      this.notify("You need to dig a hole first!")
    }
  }

  coverSeeds() {
    if (this.isCompleted('seeds-sown')) {
      if (!this.isCompleted('planted')) {
        this.state?.setTimmyText('Good job! Now open your tool box and try to water your seed.')
      }
      this.setPlotCompleted('planted')
      this.addCheckedItem('planted')
    }
  }

  water() {
    if (this.isCompleted('planted')) {
      this.state?.setTimmyText('')
      // TODO: Watering animation
      this.setPlotCompleted('watered')
      this.addCheckedItem('watered')

      setTimeout(() => {
        this.state?.setTimmyText('Great work!')
        this.state?.setShowNextArrow(true)
      }, 1000)
    } else if (this.isCompleted('dug')) {
      this.notify("You need to finish planting your seed first!")
    } else {
      this.notify("You need to plant your seed first!")
    }
  }

  postFence() {
    this.state?.plotFence.set(true)
    this.addCheckedItem('protected')
  }

  improveSoil() {
    this.notify("Not ready to use that yet")
  }

  fertilizer() {
    this.notify("Not ready to use that yet")
  }

  pesticide() {
    this.notify("Not ready to use that yet")
  }

  private setOneTimeToolboxSideEffect(sideEffect: () => void) {
    this.state?.setToolboxToggleSideEffect(() => () => {
      sideEffect()
      this.state?.setToolboxToggleSideEffect(() => () => {})
    })
  }

  private setPlotCompleted(stateName: PlotProgress) {
    if (!this.isCompleted(stateName)) {
      this.state?.plotProgress.set(stateName)
    }
  }

  private isCompleted(stateName: PlotProgress) {
    let passedStateIndex = this.progressOrder.indexOf(stateName)
    if (this.state) {
      let currStateIndex = this.progressOrder.indexOf(this.state.plotProgress.value)
      return currStateIndex >= passedStateIndex
    } else return false
  }

  private addCheckedItem(item: keyof ChecklistProps) {
    if (this.state) {
      // Typescript doesn't seem to acknowledge that `item` will always be a valid key even
      // though item's explicit type is correct
      // @ts-ignore
      this.state.checkedItems.set({
        [item]: true,
        ...this.state.checkedItems.value
      })
    }
  }
}