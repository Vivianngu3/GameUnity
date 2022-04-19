import {Dispatch, SetStateAction} from 'react'
import {Progress as PlotProgress} from '../component/container/Plot/Plot'
import {Props as ChecklistProps} from '../component/container/CheckList/CheckList'

export type GameProgress = PlotProgress | 'improved'// | UnorderedProgress

export interface GamePageState {
  plotProgress: State<PlotProgress>
  checkedItems: State<ChecklistProps>
  timmyText: State<string>
  setToolboxOpen: Dispatch<SetStateAction<boolean>>
  setToolboxToggleSideEffect: Dispatch<SetStateAction<() => void>>
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

  stopUpdates() {
    this.state = null
  }

  protected disabledTool() {
    this.notifyUserOnce("We're all done with that tool!")
  }

  protected notifyUserOnce(str: string) {
    if (this.state) {
      let timmyTextBefore: string = this.state.timmyText.value
      this.state.timmyText.set(str)
      this.state.setToolboxOpen(false)
      this.state.setToolboxToggleSideEffect(() => () => {
        this.state?.timmyText.set(timmyTextBefore)
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
