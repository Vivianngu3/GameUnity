import {NurturingState} from './Nurturing'
import {Dispatch, SetStateAction} from 'react'
import {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'
import {Progress as PlotProgress} from '../../component/container/Plot/Plot'
import {ToolBehaviorHandler} from '../../component/container/ToolBox/ToolBox'

export interface State<E> {
  state: E
  set: Dispatch<SetStateAction<E>>
}

export default class NurturingStateMediator implements ToolBehaviorHandler {
  state: NurturingState;
  progressOrder: PlotProgress[] = ['start', 'dug', 'seeds-sown', 'planted', 'watered']
  notify: (message: string) => void
  constructor(state: NurturingState, notify: (message: string) => void) {
    this.state = state
    this.notify = notify
  }

  cut() {
    this.notify("Not ready to use that yet")
  }

  dig() {
    // TODO: remove debugging logs
    console.log("logging")
    if (this === undefined) console.log("This is undefined")
    if (this !== undefined) console.log("This isn't undefined")
    if (this.state) console.log("State from dig!")
    if (this.state.plotProgress) console.log("plotProgress from dig!")
    // TODO: Shovel animation
    this.setPlotCompleted('dug')
    this.addCheckedItem('dug')
  }

  sowSeeds() {
    if (this.isCompleted('dug')) {
      this.setPlotCompleted('seeds-sown')
    } else {
      this.notify("You need to dig a hole first!")
    }
  }

  coverSeeds() {
    if (this.isCompleted('seeds-sown')) {
      this.setPlotCompleted('planted')
      this.addCheckedItem('planted')
    }
  }

  water() {
    if (this.isCompleted('planted')) {
      // TODO: Watering animation
      this.setPlotCompleted('watered')
      this.addCheckedItem('watered')
    } else if (this.isCompleted('dug')) {
      this.notify("You need to finish planting your seed first!")
    } else {
      this.notify("You need to plant your seed first!")
    }
  }

  postFence() {
    this.state.plotFence.set(true)
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

  private setPlotCompleted(stateName: PlotProgress) {
    if (!this.isCompleted(stateName)) {
      this.state.plotProgress.set(stateName)
    }
  }

  private isCompleted(stateName: PlotProgress) {
    let passedStateIndex = this.progressOrder.indexOf(stateName)
    let currStateIndex = this.progressOrder.indexOf(this.state.plotProgress.state)
    return currStateIndex >= passedStateIndex
  }

  private addCheckedItem(item: keyof ChecklistProps) {
    // Typescript doesn't seem to acknowledge that `item` will always be a valid key even
    // though item's explicit type is correct
    // @ts-ignore
    this.state.checkedItems.set({
      [item]: true,
      ...this.state.checkedItems
    })
  }
}