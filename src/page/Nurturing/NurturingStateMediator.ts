import {NurturingState} from './Nurturing'
import {Dispatch, SetStateAction} from 'react'
import {Props as ChecklistProps} from '../../component/container/CheckList/CheckList'

export interface State<E> {
  state: E
  set: Dispatch<SetStateAction<E>>
}

export default class NurturingStateMediator {
  state: NurturingState;
  constructor(state: NurturingState) {
    this.state = state
  }
  dig() {
    // TODO: Shovel animation
    this.state.plotProgress.set('dug')
    this.addCheckedItem('dug')
  }

  sowSeeds() {
    this.state.plotProgress.set('seeds-inserted')
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

  private addCheckedItem(item: keyof ChecklistProps) {
    // @ts-ignore Typescript doesn't seem to acknowledge that item will always be a valid key even
    // though item's explicit type is that of a key of ChecklistProps
    this.state.checkedItems.set({
      [item]: true,
      ...this.state.checkedItems
    })
  }
}