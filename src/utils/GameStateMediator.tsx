import {Dispatch, SetStateAction} from 'react'
import {Progress as PlotProgress} from '../component/container/Plot/Plot'
import {Props as ChecklistProps} from '../component/container/CheckList/CheckList'
import {ToolName} from '../component/container/ToolBox/Tool/Tool'

// export type GameProgress = PlotProgress | 'improved'// | UnorderedProgress

export interface GamePageState {
  plotProgress: State<PlotProgress>
  checkedItems: State<ChecklistProps>
  timmyContents: State<JSX.Element | null>
  setToolboxOpen: Dispatch<SetStateAction<boolean>>
  setToolboxDisabled: Dispatch<SetStateAction<boolean>>
  setToolboxToggleSideEffect: Dispatch<SetStateAction<() => void>>
  disabledTools: State<ToolName[]>
}

export interface State<E> {
  value: E
  set: Dispatch<SetStateAction<E>>
}

export default abstract class GameStateMediator<S extends GamePageState> {
  state: S | null
  progressOrder: PlotProgress[] = ['start', 'dug', 'seeds-sown', 'planted', 'watered', 'protected', /*'improved',*/ 'protected-tomato', 'tomato'] //, 'pesticide-learned', 'fertilizer-learned']

  constructor(state: S) {
    this.state = state
  }

  // We need to stop updates when the game page is unmounted to avoid updating the state of an unmounted component
  stopUpdates() {
    console.log("Updates stopped")
    this.state = null
  }

  protected disabledTool() {
    this.notifyUserOnce(<>We're all done with that tool!</>)
  }

  protected notifyUserOnce(contents: JSX.Element) {
    if (this.state) {
      let timmyTextBefore: JSX.Element | null = this.state.timmyContents.value
      this.state.timmyContents.set(contents)
      this.state.setToolboxOpen(false)
      this.state.setToolboxToggleSideEffect(() => () => {
        this.state?.timmyContents.set(timmyTextBefore)
        this.state?.setToolboxToggleSideEffect(() => () => {})
      })
    }
  }

  protected setPlotCompleted(stateName: PlotProgress) {
    if (!this.isCompleted(stateName)) {
      this.state?.plotProgress.set(stateName)
    }
  }

  protected isCompleted(stateName: PlotProgress) {
    let passedStateIndex = this.progressOrder.indexOf(stateName)
    if (this.state) {
      let currStateIndex = this.progressOrder.indexOf(this.state.plotProgress.value)
      return currStateIndex >= passedStateIndex
    } else return false
  }

  protected addDisabledTool(tool: ToolName) {
    if (this.state) {
      let temp = (this.state.disabledTools.value).slice()
      temp.push(tool)
      this.state?.disabledTools.set(temp)
    }
  }

  protected addCheckedItem(item: keyof ChecklistProps) {
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
