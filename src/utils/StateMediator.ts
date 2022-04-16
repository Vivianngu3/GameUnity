import {Dispatch, SetStateAction} from 'react'

export interface State<E> {
  value: E
  set: Dispatch<SetStateAction<E>>
}

export default interface StateMediator<PageState> {
  state: PageState | null
  stopUpdates(): void;
}
