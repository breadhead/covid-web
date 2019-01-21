import { combineReducers } from 'redux'

import { reducer as chooseReducer, State as ChooseState } from './choose'
import { reducer as listReducer, State as ListState } from './list'
export { actions as listActions } from './list'
export { actions as chooseActions } from './choose'

export const reducer = combineReducers({
  list: listReducer,
  choose: chooseReducer,
} as any)

export interface State {
  list: ListState
  choose: ChooseState
}
