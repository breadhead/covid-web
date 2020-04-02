import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'

interface State extends FetchingState {
  requestFormData?: any
}

interface Actions extends FetchingActions {
  success(requestFormData: string): Action
}

const initialState = createInitialState({
  requestFormData: undefined,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, requestFormData: string) => {
    return {
      ...state,
      requestFormData,
    }
  },
  'saveRequestForm',
)

export { reducer, actions }
export type { State, Actions }

