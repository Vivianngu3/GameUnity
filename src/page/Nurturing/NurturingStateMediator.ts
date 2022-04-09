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
    this.state && console.log('state!')
    this.state.plotProgress && console.log('plotProgress!')
    this.state.plotProgress.set('dug')
    this.addCheckedItem('dug')
    console.log('dug')
  }

  private addCheckedItem(item: keyof ChecklistProps) {
    // this.state.checkedItems.set({
    //   [item]: true,
    //   ...this.state.checkedItems
    // })
  }
}