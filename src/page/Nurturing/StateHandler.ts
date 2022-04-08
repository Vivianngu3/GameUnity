import {NurturingState} from './Nurturing'
import {Dispatch, SetStateAction} from 'react'

export interface State<E> {
  state: E
  set: Dispatch<SetStateAction<E>>
}

export default class StateHandler {
  state: NurturingState;
  constructor(state: NurturingState) {
    this.state = state
  }
  dig() {
    console.log('plot added')
    this.state && console.log("state!")
    this.state.plotFence && console.log("plotFence!")
    this.state.plotFence.set(true)
  }
}