import React from 'react'
import Plot from '../../component/container/Plot/Plot'
import StateHandler from './StateHandler'
import {Progress} from '../../component/container/Plot/Plot'
import CheckList from "../../component/container/CheckList/CheckList";

interface State<E> {
  state: E
  setter: (newState: E) => void
}

export interface NurturingState {
  plotFence: State<boolean>
  plotProgress: State<Progress>
}

export default function Nurturing() {
  // has a StateHandler
  // const stateHandler = StateHandler()
  return (
    <>
      <Plot />
      {/*<ToolBox />*/}
    </>
  )
}