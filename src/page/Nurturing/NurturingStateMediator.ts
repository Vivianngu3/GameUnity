import {NurturingState} from './Nurturing'
import {Dispatch, SetStateAction} from 'react'
import {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'
import {Progress as PlotProgress} from '../../component/container/Plot/Plot'

export interface State<E> {
  state: E
  set: Dispatch<SetStateAction<E>>
}

export default class NurturingStateMediator {
  state: NurturingState;
  progressOrder: PlotProgress[] = ['start', 'dug', 'seeds-sown', 'planted', 'watered']
  notify: (message: string) => void
  constructor(state: NurturingState, notify: (message: string) => void) {
    this.state = state
    this.notify = notify
  }

  dig() {
    // TODO: Shovel animation
    this.state.plotProgress.set('dug')
    this.addCheckedItem('dug')
  }

  sowSeeds() {
    if (this.isCompleted('dug')) {
      this.state.plotProgress.set('seeds-sown')
    } else {
      this.notify("You need to dig a hole first!")
    }
  }

  coverSeeds() {
    this.state.plotProgress.set('planted')
    this.addCheckedItem('planted')
  }

  water() {
    // TODO: Watering animation
    this.state.plotProgress.set('watered')
    this.addCheckedItem('watered')
  }

  fence() {
    this.state.plotFence.set(true)
    this.addCheckedItem('protected')
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